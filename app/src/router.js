import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { connect } from "react-redux";

import App from "./containers/App/App";
import asyncComponent from "./helpers/AsyncFunc";
import Auth0 from "./helpers/auth0";
<<<<<<< HEAD
import userActions from '../src/redux/user/actions';

const {userExist} = userActions;

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			isLoggedIn ? (
				<Component {...props} />
			) : (
					<Redirect
						to={{
							pathname: "/signin",
							state: { from: props.location }
						}}
					/>
				)
		}
	/>
);

const PublicRoutes = ({ history, isLoggedIn, ...rest }) => {

	console.log(...rest);

	console.log(history, rest);
	if(history.location.pathname === '/'){
		history.push('/app');
	}

	// if(history.location.pathname !== '/app'){
	// 	let username = history.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
	// 	console.log(username)
	// 	// rest.userExist(username, history);
	// }


	return (
		<ConnectedRouter history={history} >
			<div>

				{/* Index page */}
				{/* <Route
					exact
					path="/"
					component={asyncComponent(() => import("./containers/Page/index"))}
				/> */}
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

				{/* Signin Page */}
				{/* <Route
					exact
					path={"/signin"}
					component={asyncComponent(() => import("./containers/Page/signin"))}
				/> */}
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

				{/* dashaboard Page */}
				{/* <RestrictedRoute
					path="/dashboard"
					component={App}
					isLoggedIn={isLoggedIn}
				/> */}
				<RestrictedRoute
					path="/:username/dashboard"
					component={App}
					isLoggedIn={isLoggedIn}
				/>
			</div>
		</ConnectedRouter>
	);
=======
import { checkUsernameFromUrl } from '../src/helpers/utility';

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/:username/signin",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
const PublicRoutes = ({ history, isLoggedIn }) => {
	const paths = ['/app', '/app/signin'];

	if(history.location.pathname === '/'){
		history.push('/app')
	}

	// Avoid /app/* paths to be validate 
	// Apply regex to avoid all /paths/[a-z]+ being validated.
	if(!paths.includes(history.location.pathname)){
		// check if the user exist
		// if no exist push to /app
		checkUsernameFromUrl()
		.then(({ data }) => {(data === null) ? history.push('/app') : '' })
		.catch(err => { history.push('/app') });
	}

  return (
    <ConnectedRouter history={history}>
      <div>
        {/* <Route
          exact
          path="/"
          component={asyncComponent(() => import("./containers/Page/index"))}
        /> */}
		<Route
          exact
          path="/:username"
          component={asyncComponent(() => import("./containers/Page/index"))}
        />
        {/* <Route
          exact
          path="/index"
          component={asyncComponent(() => import("./containers/Page/index"))}
        /> */}
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
        {/* <Route
          exact
          path={"/signin"}
          component={asyncComponent(() => import("./containers/Page/signin"))}
        /> */}
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
>>>>>>> 253a2605a9fc2fab1e5211a527157a98e18ffbaa
};

export default connect(state => ({
	isLoggedIn: state.Auth.idToken !== null,
}),{userExist})(PublicRoutes);

