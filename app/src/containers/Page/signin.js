import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Input from "../../components/uielements/input";
import Checkbox from "../../components/uielements/checkbox";
// import Button from "../../components/uielements/button";
import { Button } from 'react-bootstrap';
import authAction from "../../redux/auth/actions";
import appAction from "../../redux/app/actions";
import Auth0 from "../../helpers/auth0";
import Firebase from "../../helpers/firebase";
import FirebaseLogin from "../../components/firebase";
import IntlMessages from "../../components/utility/intlMessages";
import SignInStyleWrapper from "./signin.style";
import styled from "styled-components";

const { login } = authAction;
const { clearMenu } = appAction;

class SignIn extends Component {
	state = {
		redirectToReferrer: false
	};
	componentWillReceiveProps(nextProps) {
		if (
			this.props.isLoggedIn !== nextProps.isLoggedIn &&
			nextProps.isLoggedIn === true
		) {
			this.setState({ redirectToReferrer: true });
		}
	}
	handleLogin = () => {
		const { login, clearMenu } = this.props;
		login();
		clearMenu();
		this.props.history.push("/dashboard");
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
							<Link to="/">
								ZANZA.IO
							</Link>
						</div>

						<div className="isoSignInForm">
							<div className="isoInputWrapper">
								<Input size="large" className="inputSignin" placeholder="Nombre de Usuario" />
							</div>

							<div className="isoInputWrapper">
								<Input size="large" className="inputSignin" type="password" placeholder="Contraseña" />
							</div>

							<div className="isoInputWrapper isoLeftRightComponent">
								<Button bsStyle="primary" className="btnSignin" bsSize="large"  onClick={this.handleLogin}>
									INGRESAR
								</Button>
							</div>

							<div className="isoCenterComponent isoHelperWrapper">
								<Link to="/forgotpassword" className="isoForgotPass">
									<IntlMessages id="page.signInForgotPass" />
								</Link>
								<Link to="/signup" className="createAccoutLink">
									Crea una cuenta en ZANZA.IO
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
		isLoggedIn: state.Auth.idToken !== null ? true : false
	}),
	{ login, clearMenu }
)(SignIn);


const SigInForm = styled.div`
	
	.btnSignin{
		width:100% !important;
		font-size:1.5em !important;
	}
	.inputSignin{
		font-size:1.3em;
		height:52px !important;
	}
	.isoForgotPass, .createAccoutLink{
		font-size:1.2em !important;
	}


`;