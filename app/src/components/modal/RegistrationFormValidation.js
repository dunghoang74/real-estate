import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Select } from 'antd';
import Form from '../../components/uielements/form';
import Checkbox from '../../components/uielements/checkbox';
// import Notification from '../../components/notification';
import { Button, DropdownButton, ButtonToolbar, MenuItem } from 'react-bootstrap';
import styled from "styled-components";
import IntlMessages from '../../components/utility/intlMessages';
import userActions from '../../redux/user/actions'


const {addUser} = userActions;

const FormItem = Form.Item;

class FormWIthSubmissionButton extends Component {
	state = {
		confirmDirty: false,
		formType: 'search',
	};

	switchFormTo = (formToSwitch) =>{

		this.setState({formType: formToSwitch});
	
	}
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				this.props.addUser(values);
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
			callback('Two passwords that you enter is inconsistent!');
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
			callback("Please the input only numbers");
		}
		
	};
	checkUserType = (rule, value, callback) => {
		const form = this.props.form;
		// add validation
		callback();
		
	};
	checkUserName = (rule, value, callback) => {
		const form = this.props.form;

		// check user avaliabiliti
		callback();

	}
	formatUsername = (e) =>{

		console.log(e.target.value);
		return e.target.value.toUpperCase();
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
					<Button bsStyle="primary" bsSize="large" className="btnsTop" onClick={() => {this.switchFormTo('search')}}>
						<IntlMessages id="form.wantToSearch"/>
					</Button>
					<Button bsStyle="success" bsSize="large" className="btnPost btnsTop" onClick={() => {this.switchFormTo('post')}} >
						<IntlMessages id="form.wantToPost"/>
					</Button>
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
											message: 'Please select a option',
											required: true,
										},
									],
								})(
									<Select defaultValue="">
										<Select.Option value="">Elige el tipo de usuario</Select.Option>
										<Select.Option value="single_seller">Usuario Particular</Select.Option>
										<Select.Option value="real_state">Inmobiliaria</Select.Option>
										<Select.Option value="constructor">Contructora</Select.Option>
										<Select.Option value="runner">Corredor</Select.Option>
									</Select>
								)}
							</FormItem>
							
						
						: ''
					}

					<FormItem {...formItemLayout} label="User Name" hasFeedback >
						{getFieldDecorator('username', {
							rules: [
								{
									min:5,
									message:'the username must be greater than 4'
								},
								{
									max:16,
									message:'the username must be less than 15'
								},
								{
									validator: this.checkUserName,
								},
								{
									required: true,
									message: 'Please input a User Name',
								},
								
							],
						})(<Input name="username" id="userName" onBlur={this.formatUsername} />)}
					</FormItem>

					<FormItem {...formItemLayout} label="E-mail" hasFeedback>
						{getFieldDecorator('email', {
							rules: [
								{
									type: 'email',
									message: 'The input is not valid E-mail!',
								},
								{
									required: true,
									message: 'Please input your E-mail!',
								},
							],
						})(<Input name="email" id="email" />)}
					</FormItem>

					{(this.state.formType === 'post')
						?
							<FormItem {...formItemLayout} label="Phone" hasFeedback>
								{getFieldDecorator('phone', {
									rules: [
										{
											validator: this.checkPhone,
										},
										{
											required: true,
											message: 'Please input your Phone!',
										},
									],
								})(<Input name="phone" id="phone" />)}
							</FormItem>
						: ''
					}

					<FormItem {...formItemLayout} label="Password" hasFeedback>
						{getFieldDecorator('password', {
							rules: [
								{
									required: true,
									message: 'Please input your password!',
								},
								{
									validator: this.checkConfirm,
								},
							],
						})(<Input type="password" />)}
					</FormItem>
					<FormItem {...formItemLayout} label="Confirm Password" hasFeedback>
						{getFieldDecorator('confirm', {
							rules: [
								{
									required: true,
									message: 'Please confirm your password!',
								},
								{
									validator: this.checkPassword,
								},
							],
						})(<Input type="password" onBlur={this.handleConfirmBlur} />)}
					</FormItem>
					<FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
						{getFieldDecorator('agreement', {
							valuePropName: 'checked',
							rules: [
								{
									message: 'Please confirm the temrms and Conditions',
									required: true,
								},
							],
						})(
							<Checkbox>
								I have read the <a href="">agreement</a>
							</Checkbox>
						)}
					</FormItem>
					<FormItem {...tailFormItemLayout}>
						<Button bsStyle="primary" type="submit">
							<IntlMessages id="header.registerC" />
						</Button>
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
	registerdUser: state.User.userRegistered,
}), {addUser})(WrappedFormWIthSubmissionButton, FormWIthSubmissionButton);


//addUser

const RegistrationForm = styled.div`
	
	.btnPost{
		margin-left:10px;
	}
	.btnsTop{
		margin-bottom:15px;
	}

`;