import React, { Component } from 'react';
import { connect } from 'react-redux';
import IntlMessages from '../../components/utility/intlMessages';
import HeaderSlider from '../../components/page/HeaderSliderComponent';
import { BrowserRouter as Router, Link } from "react-router-dom";
import modalActions from '../../redux/modal/actions';
import userActions from '../../redux/user/actions';
import { Modal, Button, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import styled from "styled-components";
import RegistrationModal from '../modal/RegistrationModal';

const {updateStatus} = modalActions;
const {loggOutUser, checkLoginStatus} = userActions;

class Header extends Component {

    componentDidMount(){

        this.props.checkLoginStatus();
    }

    handleShowRegistration = () => {
        this.props.updateStatus(true)
    };

    handleLoggOutUser = () => {
        this.props.loggOutUser();
    }

    render() {
        return (

            <HeaderStyleWrapper className="container container-wrapper">
            
                <header className="header">
                    <div className="top-box">
                        <div className="container">
                            <section className="header-inner">
                                <div className="container">
                                    <div className="logo pull-left pull-sm-up col-sm-6 col-xs-12  text-left">
                                        <Link to="/">
                                            <img src="https://garrigusrealestate.net/wp-content/uploads/2017/01/Garrigus-Real-Estate-Logo-MAIN-FINISHED-NO-BACKGROUND-PNG-LOGO.png"  />
                                            <img src="https://garrigusrealestate.net/wp-content/uploads/2017/01/Garrigus-Real-Estate-Logo-MAIN-FINISHED-NO-BACKGROUND-PNG-LOGO.png" width="100" className="mini-logo" />
                                        </Link>
                                    </div>

                                    <div className="pull-right pull-sm-up col-sm-6 col-xs-12 menuBtns">
                                        <ButtonToolbar>
                                            {(!this.props.userLoggedIn) ? <Button bsStyle="primary" className="fixPrimary"><IntlMessages id="header.signInC" /></Button> :  <Button bsStyle="primary" className="fixPrimary"><IntlMessages id="header.addListing" /></Button>} 


                                             {(!this.props.userLoggedIn) ?  <Button bsStyle="success" onClick={() => { this.handleShowRegistration() }}> <IntlMessages id="header.registerC" /></Button> :  <Button bsStyle="success"> <IntlMessages id="header.searchProperty"/></Button>}     
                                            {(this.props.userLoggedIn) 
                                                ? 
                                                    <DropdownButton bsStyle="primary" title="" id="top-menu" className="fixPrimary">
                                                        <MenuItem eventKey="1">Action</MenuItem>
                                                        <MenuItem eventKey="2">Another action</MenuItem>
                                                        <MenuItem eventKey="3" >
                                                            Active Item
                                                        </MenuItem>
                                                        <MenuItem divider />
                                                        <MenuItem onClick={this.handleLoggOutUser}>Log Out</MenuItem>
                                                    </DropdownButton>
                                                : ''
                                            }
                                            
                                        </ButtonToolbar>

                                    </div>

                                    <div className="pull-left menu">
                                        <div className="box-navigaion clearfix">
                                            <div className="navbar-header">
                                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#main-menu">
                                                    <span className="sr-only">Toggle navigation</span>
                                                    <span className="icon-bar"></span>
                                                    <span className="icon-bar"></span>
                                                    <span className="icon-bar"></span>
                                                </button>
                                            </div>
                                            
                                        </div>
                                        <nav className="navbar text-color-primary">

                                            <div className="text-right">
                                                <button className="navbar-toggler hidden" type="button" data-toggle="collapse" data-target="#main-menu">
                                                    &#9776;
                                            </button>
                                            </div>

                                        </nav>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                    <div className="top-box-mask"></div>

                    {(this.props.slider) ? <HeaderSlider /> : ''}

                </header>

                <RegistrationModal />

            </HeaderStyleWrapper>

        )
    }
}


export default connect(state => ({
    isLoggedIn: state.Auth.idToken !== null ? true : false,
    show_section: state.App.section,
    userLoggedIn : (state.User.userLoggedIn && localStorage.getItem("id_token") !== null)? true : false,
}),{updateStatus, loggOutUser, checkLoginStatus})(Header);


const HeaderStyleWrapper = styled.div`
    .logo{
        border:0px solid black;
        padding-top:4px;
        padding-bottom:0px
    }
    .register-text{
        font-size:1em !important;
        text-transform: capitalize !important;
    }

    .menuBtns:{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    .signBtn{
        float:right
    }

    .fixPrimary{
        border:1px solid #0f7ad5;
        text-transform: capitalize !important;
    }

    .register-search-btn{
        margin-right:10px;
        border:3px solid yellow;
    }

    .header{
        text-transform: capitalize !important;
    }

`;

