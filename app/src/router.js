import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { connect } from "react-redux";
import App from "./containers/App/App";
import asyncComponent from "./helpers/AsyncFunc";
import Auth0 from "./helpers/auth0";
import { checkUsernameFromUrl, getUsernameFromUrl } from '../src/helpers/utility';

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			isLoggedIn ? (
				<Component {...props} />
			) : (
					<Redirect
						to={{
							pathname: "/" + getUsernameFromUrl() + "/signin",
							state: { from: props.location }
						}}
					/>
				)
		}
	/>
);
const PublicRoutes = ({ history, isLoggedIn }) => {
	const paths = ['/app', '/app/signin'];

	if (history.location.pathname === '/') {
		history.push('/app')
	}

	// Avoid /app/* paths to be validate 
	// Apply regex to avoid all /paths/[a-z]+ being validated.
	if (!paths.includes(history.location.pathname)) {
		// check if the user exist
		// if no exist push to /app
		checkUsernameFromUrl()
			.then(({ data }) => { 
				if(data === null) {
					history.push('/app')
				}else {
					console.log('pdata.page:::', data._page)
					sessionStorage.setItem('u_p', JSON.stringify(data._page));
				}
			 }) 
			.catch(err => { 
				console.log('error checkUsernameFromUrl::::', err, err.response)
				// history.push('/app') 
			});
	}else{
		sessionStorage.removeItem('u_p');
	}

	return (
		<ConnectedRouter history={history}>
			<div>
				<Route
					exact
					path="/:username"
					component={asyncComponent(() => import("./containers/Page/index"))}
				/>
				<Route
					exact
					path={"/404"}
					component={asyncComponent(() => import("./containers/Page/404"))}
				/>
				<Route
					exact
					path={"/500"}
					component={asyncComponent(() => import("./containers/Page/500"))}
				/>
				<Route
					exact
					path={"/:username/signin"}
					component={asyncComponent(() => import("./containers/Page/signin"))}
				/>
				<Route
					exact
					path={"/signup"}
					component={asyncComponent(() => import("./containers/Page/signup"))}
				/>
				<Route
					exact
					path={"/forgotpassword"}
					component={asyncComponent(() =>
						import("./containers/Page/forgotPassword")
					)}
				/>
				<Route
					exact
					path={"/resetpassword"}
					component={asyncComponent(() =>
						import("./containers/Page/resetPassword")
					)}
				/>

				<Route
					path="/auth0loginCallback"
					render={props => {
						Auth0.handleAuthentication(props);
					}}
				/>

				<RestrictedRoute
					path="/:username/dashboard"
					component={App}
					isLoggedIn={isLoggedIn}
				/>
			</div>
		</ConnectedRouter>
	);
};

export default connect(state => ({
	isLoggedIn: state.Auth.idToken !== null,
}), {})(PublicRoutes);



