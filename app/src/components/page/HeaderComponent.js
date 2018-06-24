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
import logo from '../../image/logo-min.png';
import { getUsernameFromUrl, getPageResource } from '../../../src/helpers/utility';
import { Select } from 'antd';
import pageActions from '../../redux/pageConfig/actions';
import {Image, Transformation} from 'cloudinary-react';

const {updateStatus} = modalActions;
const {loggOutUser, checkLoginStatus} = userActions;
const { getPageInfo } = pageActions;

const CLOUDINARY_UPLOAD_PRESET = 'ew0v9j7f';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/kazamap/upload';

class Header extends Component {

    state ={
        usernameUri: getUsernameFromUrl(),
    }

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
        
        console.log('header user page config', this.props.userPageConfig);
        let logo = getPageResource('logo', this.props.userPageConfig);
        let color1 = getPageResource('color1', this.props.userPageConfig);
        let color2 = getPageResource('color2', this.props.userPageConfig);

        return (
            <HeaderStyleWrapper className="container container-wrapper">
            
                <header className="header">
                    <div className="top-box">
                        <div className="container">
                            <section className="header-inner">
                                <div className="container">
                                    <div className="logo pull-left pull-sm-up col-sm-6 col-xs-12  text-left">
                                        <Link to={`/${this.state.usernameUri}`}>

                                            <Image cloudName="kazamap" publicId={logo} >
                                                <Transformation width="193" height="100"/>
                                            </Image>

                                            <Image cloudName="kazamap" publicId={logo} className="mini-logo" ></Image>

                                        </Link>
                                    </div>

                                    <div className="pull-right pull-sm-up col-sm-6 col-xs-12 menuBtns">
                                        <ButtonToolbar>
                                            
                                            {(!this.props.userLoggedIn) 
                                                ? 
                                                    <Link to={`/${this.state.usernameUri}/signin`}>
                                                        <Button bsStyle="primary" className="fixPrimary" style={{backgroundColor:color1}}>
                                                            <IntlMessages id="header.signInC" />
                                                        </Button>
                                                    </Link> 
                                                :  
                                                    <Button bsStyle="primary" className="fixPrimary" style={{backgroundColor:color1}}>
                                                        <IntlMessages id="header.addListing" />
                                                    </Button>
                                            } 

                                            {(!this.props.userLoggedIn) 
                                                ?  
                                                    <Button bsStyle="success" onClick={() => { this.handleShowRegistration() }} 
                                                            style={{backgroundColor:color2, borderColor:color2}}> 
                                                         <IntlMessages id="header.registerC" />
                                                    </Button> 
                                                :   <Button bsStyle="success" style={{backgroundColor:color2, borderColor:color2}}>
                                                        <IntlMessages id="header.searchProperty"/>
                                                    </Button>
                                            }     
                                            
                                            {(this.props.userLoggedIn) 
                                                ? 
                                                <Select defaultValue="Menú Usuario">
                                                    <Select.Option value="dashboard">
                                                        <Link to={`/${this.state.usernameUri}/dashboard`}>Dashboard</Link>
                                                    </Select.Option>
                                                    <Select.Option value="page-config">
                                                        <Link to={`/${this.state.usernameUri}/dashboard/page-config`}>Página</Link>
                                                    </Select.Option>
                                                    <Select.Option value="logout" onClick={this.handleLoggOutUser} >Salir</Select.Option>
                                                </Select>
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
    userPageConfig: state.PageConfigReducer.user_page,
}),{updateStatus, loggOutUser, checkLoginStatus, getPageInfo})(Header);


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

    .selectItem {
        color:black
    }

    .selectItem:hover {
        border:2px solid black;
        color:black !important;
    }

    .color1 {
        background-color: green !important;
        border: 4px solid black !important
    }

`;




// server {
//         listen 80;

//         server_name red-ecuador.com www.red-ecuador.com;

//         root /var/www/html/build;
//         index index.html;

//         location ^~ /[a-z\-]+ {
//                 try_files $uri $uri/ =404;
//         }
// }

// server_name red-ecuador.com www.red-ecuador.com;

// location /app {
//         # try_files $uri $uri/ =404;
//         # try_files $uri  /index.html =404;
//         try_files $uri $uri/ /index.html$is_args$args;
// }

// location /index {
//         try_files $uri $uri/ /index.html$is_args$args;
// }

// location ~ ^/[a-z\-]+ {
//         try_files $uri $uri/ /index.html$is_args$args;
// }

// location /dashboard {
//         try_files $uri $uri/ /index.html$is_args$args;
// }

// location /signin {
//         try_files $uri $uri/ /index.html$is_args$args;
// }

// location /registration {
//         try_files $uri $uri/ /index.html$is_args$args;
// }
