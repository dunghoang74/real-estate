import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../../components/uielements/input';
import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
import authAction from '../../redux/auth/actions';
import IntlMessages from '../../components/utility/intlMessages';

import Header from '../../components/page/HeaderComponent';
import BodyIndex from '../../components/page/BodyIndexComponent';
import Footer from '../../components/page/FooterComponent';
import PageStyleWrapper from './styles/page.style';

const { login } = authAction;

class Index extends Component {

	render() {
		return (
			<PageStyleWrapper className="">
				<Header slider={true} />

				<BodyIndex />

				<Footer />
			</PageStyleWrapper>
		);
	}
}

export default connect(
	state => ({
		isLoggedIn: state.Auth.idToken !== null ? true : false,
	}),
	{ login }
)(Index);
