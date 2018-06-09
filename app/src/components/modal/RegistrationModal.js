
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link } from "react-router-dom";
import actions from '../../redux/app/actions';
import { Modal, Button, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import styled from "styled-components";

import Form from '../../components/uielements/form';
import Input from '../../components/uielements/input';
import PageHeader from '../../components/utility/pageHeader';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import IntlMessages from '../../components/utility/intlMessages';
import FormValidation from './RegistrationFormValidation';
import modalActions from '../../redux/modal/actions';

const FormItem = Form.Item;
const { updateStatus } = modalActions;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
};

class Header extends Component {

    handleClose = () => {
        this.props.updateStatus(false);
    }

    render() {

        return (
            <Modal show={this.props.modalStatus} onHide={this.handleClose} >
                <Modal.Header closeButton>
                <h3 className="isoSaleLabel"><span><Modal.Title>{<IntlMessages id="header.registerC" />}</Modal.Title></span></h3>
                </Modal.Header>
                <Modal.Body>
                    <div className="isoBoxWrapper">
                        <LayoutWrapper>
                            <Box>
                                <FormValidation />
                            </Box>
                        </LayoutWrapper>
                    </div>
                </Modal.Body>
                <Modal.Footer>
        <Button bsStyle="danger" onClick={this.handleClose}><IntlMessages id="form.close" /></Button>
                </Modal.Footer>
            </Modal>

        )
    }
}

export default connect(state => ({
    isLoggedIn: state.Auth.idToken !== null ? true : false,
    show_section: state.App.section,
    modalStatus: state.ModalStatus.showStatus,
}), {updateStatus})(Header);
