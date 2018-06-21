import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Input from "../../components/uielements/input";
import { Button, Alert } from 'antd';
import authAction from "../../redux/auth/actions";
import appAction from "../../redux/app/actions";
import IntlMessages from "../../components/utility/intlMessages";
import SignInStyleWrapper from "./signin.style";
import styled from "styled-components";
import Notification from '../../components/notification';
import { getUsernameFromUrl } from '../../../src/helpers/utility';

const { login, setLoading, tokenExpired } = authAction;
const { clearMenu } = appAction;

class SignIn extends Component {
	state = {
		redirectToReferrer: false,
		email: '',
		password: '',
		userData: null,
		loginError: null,
		usernameUri: getUsernameFromUrl()
	};

    updateField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
	};

	componentWillReceiveProps(nextProps) {
		if (
			this.props.isLoggedIn !== nextProps.isLoggedIn &&
			nextProps.isLoggedIn === true
		) {
			this.setState({ redirectToReferrer: true });
		}
	}

	clearLocalAndSessionStorage(){
		localStorage.removeItem('id_token');
		localStorage.removeItem('access_token');
		localStorage.removeItem('expires_at');
		sessionStorage.clear();
	}

	handleLogin = () => {
		this.clearLocalAndSessionStorage();
		const { login } = this.props;
		const user = { email:this.state.email, password:this.state.password };
		login(user);

		setTimeout(() => {
			if (localStorage.getItem('id_token') === null){
				Notification(
					'error',
					"Error en su email o contraseña!",
				);	
				this.props.setLoading(false);
			}
		}, 500);
	
		setTimeout(() => { 
			if (localStorage.getItem('id_token') !== null){

				if(sessionStorage.getItem('usr') !== null){
					let data = JSON.parse(sessionStorage.getItem('usr'));
					Notification(
						'success',
						"Bienvenido/a " + data.username,
					);	
				}	
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
					this.props.setLoading(false);
					if(data.user_type == 'buyer'){
						this.props.history.push(`/${data.username}`);
					}else{
						this.props.history.push(`/${data.username}/dashboard`);
					}
				}
			}
		}, 1500);
	};
	render() {
		const from = { pathname: "/dashboard" };
		const { redirectToReferrer } = this.state;

		if (redirectToReferrer) {
			return <Redirect to={from} />;
		}

		return (
			<SigInForm>
				<SignInStyleWrapper className="isoSignInPage">
					<div className="isoLoginContentWrapper">
						<div className="isoLoginContent">
							<div className="isoLogoWrapper">
								{/* <Link to={`/${this.state.usernameUri}`}>
									KAZAMAP.COM
								</Link> */}
								
								<a href={`/${this.state.usernameUri}`}> 
									KAZAMAP.COM
								</a>
							</div>

							<div className="isoSignInForm">
								<div className="isoInputWrapper">
									<Input name="email" onChange={this.updateField} size="large" className="inputSignin" placeholder="Email" />
								</div>

								<div className="isoInputWrapper">
									<Input name="password" onChange={this.updateField} size="large" className="inputSignin" type="password" placeholder="Contraseña" />
								</div>

								<div className="isoInputWrapper isoLeftRightComponent">
									<Button type="primary" className="btnSignin" bssize="large" loading={this.props.loading}  onClick={this.handleLogin}>
										INGRESAR
									</Button>
								</div>

								<div className="isoCenterComponent isoHelperWrapper">
									<Link to="/forgotpassword" className="isoForgotPass">
										<IntlMessages id="page.signInForgotPass" />
									</Link>
									<Link to="/signup" className="createAccoutLink">
										Crea una cuenta en KAZAMAP.COM
									</Link>
								</div>
							</div>
						</div>
					</div>
				</SignInStyleWrapper>
			</SigInForm>
		);
	}
}

export default connect(
	state => ({
		isLoggedIn: state.Auth.idToken !== null ? true : false,
		loading: state.Auth.loading,
	}),
	{ login, clearMenu, setLoading, tokenExpired }
)(SignIn);


const SigInForm = styled.div`
	
	.btnSignin{
		width:100% !important;
		font-size:1.5em !important;
		height:50px !important;
		border-radius: 0px !important;
	}
	.inputSignin{
		font-size:1.3em;
		height:52px !important;
	}
	.isoForgotPass, .createAccoutLink{
		font-size:1.2em !important;
	}


`;