import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Select, Button } from 'antd';
import { Button as ButtonB } from 'react-bootstrap';
import Form from '../../components/uielements/form';
import Checkbox from '../../components/uielements/checkbox';
import Notification from '../../components/notification';
import {  DropdownButton, ButtonToolbar, MenuItem } from 'react-bootstrap';
import styled from "styled-components";
import IntlMessages from '../../components/utility/intlMessages';
import userActions from '../../redux/user/actions'
import { call } from 'redux-saga/effects';
import { getUsernameFromUrl } from '../../../src/helpers/utility';

const {addUser, checkUserAvalability, checkUserEmailAvalability} = userActions;

const FormItem = Form.Item;

class FormWIthSubmissionButton extends Component {
	state = {
		confirmDirty: false,
		formType: 'search',
		loading:false,
		userLable: "Usuario",
		usernameUri: getUsernameFromUrl()
	};

	switchFormTo = (formToSwitch) =>{

		this.setState({formType: formToSwitch});
		if(formToSwitch === 'post'){
			this.setState({userLable: 'Usuario/dominio'})
		}else{
			this.setState({userLable: 'Usuario'})
		}
	
	}
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {

				this.setState({loading:true});
				this.props.addUser(values);

				setTimeout(() => { 
					if (localStorage.getItem('id_token') !== null){

						Notification(
							'success',
							"Bienvenido/a " + values.username ,
						);		
					}
				}, 500);

				setTimeout(() => { 
					if (localStorage.getItem('id_token') !== null){
						Notification(
							'success',
							"Lo estamos redireccionando...",
						);
					}
				}, 1000);

				setTimeout(() => { 
						if (localStorage.getItem('id_token') !== null){
							if(sessionStorage.getItem('usr') !== null){
								let data = JSON.parse(sessionStorage.getItem('usr'));
								if(data.user_type === 'buyer'){
									// history.push(`/${data.username}`);
									window.location = `/${data.username}`;
								}else{
									// history.push(`/${data.username}/dashboard`);
									window.location = `/${data.username}/dashboard`;
								}
							}
						}
				}, 1500);
				
			}
			
		});
	};
	handleConfirmBlur = e => {
		const value = e.target.value;
		this.setState({ confirmDirty: this.state.confirmDirty || !!value });
	};
	checkPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && value !== form.getFieldValue('password')) {
			callback(<IntlMessages id='form.errormsg.match_password' />);
		} else {
			callback();
		}
	};
	checkConfirm = (rule, value, callback) => {
		const form = this.props.form;
		if (value && this.state.confirmDirty) {
			form.validateFields(['confirm'], { force: true });
		}
		callback();
	};

	checkPhone = (rule, value, callback) => {
		const form = this.props.form;
		if(!isNaN(parseFloat(value)) && isFinite(value)){
			callback();
		}else{
			callback(<IntlMessages id='form.errormsg.phone_only_numbers' />);
		}
	};
	checkUserType = (rule, value, callback) => {
		const form = this.props.form;
		// add validation
		callback();
		
	};
	checkUserName = (rule, value, callback) => {

		if(value){
			const form = this.props.form;
			let newVal = value.toLowerCase().replace(/ /g,"_").replace( /[0-9]/g, '').replace(/[^-_a-zA-Z]/, "");
			this.props.form.setFieldsValue({
				username: newVal,
			});

			setTimeout(() => { 
				let userVal = form.getFieldValue('username');
				this.props.checkUserAvalability(userVal);

				if(this.props.userAvailable){
					callback();
				}else{
					callback(<IntlMessages id='form.errormsg.username_taken' />);
				}

			}, 500);
		}else{
			callback();
		}

	};
	reCheckUsername = (e) => {
		const form = this.props.form;
		form.validateFields(['username'], { force: true });
	}
	checkUserEmail = (rule, value, callback) => {

		const form = this.props.form;

		setTimeout(() => { 
			let userEmailVal = form.getFieldValue('email');
			this.props.checkUserEmailAvalability(userEmailVal);

			if(this.props.userEmailAvailable){
				callback();
			}else{
				callback(<IntlMessages id='form.errormsg.email_suscribed' />);
			}

		}, 800);

	}
	reCheckEmail = (e) => {
		const form = this.props.form;
		form.validateFields(['email'], { force: true });
	}

	render() {
		const { getFieldDecorator } = this.props.form;

		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 6 },
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 14 },
			},
		};
		const tailFormItemLayout = {
			wrapperCol: {
				xs: {
					span: 24,
					offset: 0,
				},
				sm: {
					span: 14,
					offset: 6,
				},
			},
		};
		return (
			<RegistrationForm>
				
				<ButtonToolbar>
					<ButtonB bsStyle="primary" bsSize="large" className="btnsTop btnModal" onClick={() => {this.switchFormTo('search')}}>
						<IntlMessages id="form.wantToSearch"/>
					</ButtonB>
					<ButtonB bsStyle="success" bsSize="large" className="btnPost btnsTop btnModal" onClick={() => {this.switchFormTo('post')}} >
						<IntlMessages id="form.wantToPost"/>
					</ButtonB>
				</ButtonToolbar>

				<Form onSubmit={this.handleSubmit}>

					{(this.state.formType === 'post')
						? 
							<FormItem {...tailFormItemLayout}>
								{getFieldDecorator('user_type', {
									valuePropName: 'dropdown',
									rules: [
										{
											validator: this.checkUserType,
										},
										{
										message: <IntlMessages id='form.errormsg.please_select_option' />,
											required: true,
										},
									],
								})(
									<Select defaultValue="">
										<Select.Option value=""><IntlMessages id='form.drop.select_a_user_type' /></Select.Option>
										<Select.Option value="single_seller"><IntlMessages id='form.drop.single_seller' /></Select.Option>
										<Select.Option value="real_state"><IntlMessages id='form.drop.real_state' /></Select.Option>
										<Select.Option value="constructor"><IntlMessages id='form.drop.constructor' /></Select.Option>
										<Select.Option value="runner"><IntlMessages id='form.drop.runner' /></Select.Option>
									</Select>
								)}
							</FormItem>
							
						
						: ''
					}
					
					<FormItem {...formItemLayout} label={this.state.userLable} hasFeedback>
						{getFieldDecorator('username', {
							rules: [
								{
									min:5,
									message:<IntlMessages id='form.errormsg.username_greater' />
								},
								{
									max:16,
									message:<IntlMessages id='form.errormsg.username_less' />
								},
								{
									validator: this.checkUserName,
								},
								{
									required: true,
									message: <IntlMessages id='form.errormsg.username' />,
								},
								
							],
						})(
							<Input name="username" id="userName" onBlur={this.reCheckUsername} />
						)}
					</FormItem>

					<FormItem {...formItemLayout} label={<IntlMessages id='form.lable.email' />} hasFeedback>
						{getFieldDecorator('email', {
							rules: [
								{
									validator: this.checkUserEmail,
								},
								{
									type: 'email',
									message: <IntlMessages id='form.errormsg.valid_email' />,
								},
								{
									required: true,
									message: <IntlMessages id='form.errormsg.email' />,
								},
							],
						})(<Input name="email" id="email" onBlur={this.reCheckEmail} />)}
					</FormItem>

					{(this.state.formType === 'post')
						?
							<FormItem {...formItemLayout} label={<IntlMessages id='form.lable.phone' />} hasFeedback>
								{getFieldDecorator('phone', {
									rules: [
										{
											min:9,
											message:"Ingrese minimo 9 números"
										},
										{
											max:12,
											message:"Ingrese maximo 12 números"
										},
										{
											validator: this.checkPhone,
										},
										{
											required: true,
											message: <IntlMessages id='form.errormsg.phone' />,
										},
									],
								})(<Input name="phone" id="phone" />)}
							</FormItem>
						: ''
					}

					<FormItem {...formItemLayout} label={<IntlMessages id='form.lable.password' />} hasFeedback>
						{getFieldDecorator('password', {
							rules: [
								{
									required: true,
									message: <IntlMessages id='form.errormsg.password' />,
								},
								{
									validator: this.checkConfirm,
								},
							],
						})(<Input type="password" />)}
					</FormItem>
					<FormItem {...formItemLayout}  label="Repetir" hasFeedback>
						{getFieldDecorator('confirm', {
							rules: [
								{
									required: true,
									message: "Confirme su contraseña",
								},
								{
									validator: this.checkPassword,
								},
							],
						})(<Input type="password" onBlur={this.handleConfirmBlur} placeholder="Repetir contraseña" />)}
					</FormItem>
					<FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
						{getFieldDecorator('agreement', {
							valuePropName: 'checked',
							rules: [
								{
									message: <IntlMessages id='form.errormsg.terms' />,
									required: true,
								},
							],
						})(
							<Checkbox>
								<IntlMessages id='form.message.agreement' />  
								<a href=""> <IntlMessages id='form.agreement' /></a>
							</Checkbox>
						)}
					</FormItem>
					<FormItem {...tailFormItemLayout}>
						<ButtonB className="btnModal btn_primary" bsStyle="primary" type="submit"  >
							<IntlMessages id="header.registerC" />
						</ButtonB>
					</FormItem>
				</Form>
			</RegistrationForm>
    );
	}
}

const WrappedFormWIthSubmissionButton = Form.create()(FormWIthSubmissionButton);
// export default WrappedFormWIthSubmissionButton;

export default connect(state => ({
	isLoggedIn: state.Auth.idToken !== null ? true : false,
	userRegistered: state.User.userRegistered,
	userAvailable: state.User.userAvailable,
	userEmailAvailable: state.User.userEmailAvailable
}), {addUser, checkUserAvalability, checkUserEmailAvalability})(WrappedFormWIthSubmissionButton, FormWIthSubmissionButton);


//addUser

const RegistrationForm = styled.div`
	
	.btnPost{
		margin-left:10px;
	}
	.btnsTop{
		margin-bottom:15px;
	}
	.btnModal{
		font-size:1.5em !important;
		height:50px !important;
		border-radius: 0px !important;
	}
	.btn_primary{
		color: #fff;
		background-color: #337ab7;
		border-color: #2e6da4;
	}


`;