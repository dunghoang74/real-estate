import React, { Component } from 'react';
import { connect } from 'react-redux';

class BodyRegistration extends Component {
    render() {
        const border = {
            border: '0px',
        };
        const marginBottom = {
            marginBottom: '0px',
        }

        return (
            
            <main className="main section-color-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <section className="top-title">
                                <h1 className="h-side-title page-title page-title-big text-color-primary">Register</h1>
                            </section> 
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="widget  widget-box box-container widget-form form-main" id="form">
                                        <div className="widget-header">
                                            <h2>Login</h2>
                                        </div>
                                        <form action="#" method="post" className="form-additional">
                                            <div className="control-group">
                                                <label className="control-label" >Username</label>
                                                <div className="controls">
                                                    <input type="text" name="username" value="" className="form-control" id="inputUsername2" placeholder="Username" />
                                                </div>
                                            </div>
                                            <div className="control-group">
                                                <label className="control-label" >Password</label>
                                                <div className="controls">
                                                    <input type="password" name="password" value="" className="form-control" id="inputPassword1" placeholder="Password" />
                                                </div>
                                            </div>
                                            <div className="control-group">
                                                <div className="controls">
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" name="remember" id="remember" value="true" /> Remember me </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="control-group">
                                                <div className="controls">
                                                    <button type="submit" className="btn btn-danger">Sign in</button>
                                                    <button type="reset" className="btn btn-default">Reset</button>
                                                    <a href="#"><em>Forget password?</em></a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="widget  widget-box box-container widget-form form-main" id="form2">
                                        <div className="widget-header">
                                            <h2>Register</h2>
                                        </div>
                                        <form action="#" method="post" className="form-additional">
                                            <div className="control-group">
                                                <label className="control-label">First and last name</label>
                                                <div className="controls">
                                                    <input type="text" name="name_surname" value="" className="form-control" id="inputNameSurname" placeholder="First and last name" />
                                                </div>
                                            </div>
                                            <div className="control-group">
                                                <label className="control-label">Username</label>
                                                <div className="controls">
                                                    <input type="text" name="username" value="" className="form-control" id="inputUsername" placeholder="Username" />
                                                </div>
                                            </div>
                                            <div className="control-group">
                                                <label className="control-label">Email</label>
                                                <div className="controls">
                                                    <input type="text" name="mail" value="" className="form-control" id="inputMail" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="control-group">
                                                <label className="control-label" for="inputPassword2">Password</label>
                                                <div className="controls">
                                                    <input type="password" name="password" value="" className="form-control" id="inputPassword2" placeholder="Password" />
                                                </div>
                                            </div>
                                            <div className="control-group">
                                                <label className="control-label">Confirm password</label>
                                                <div className="controls">
                                                    <input type="password" name="password_confirm" value="" className="form-control" id="inputPasswordConfirm" placeholder="Confirm password"  />
                                                </div>
                                            </div>
                                            <div className="control-group">
                                                <label className="control-label">Address</label>
                                                <div className="controls">
                                                    <textarea name="address" cols="40" rows="3" placeholder="Address" className="form-control"></textarea>
                                                </div>
                                            </div>

                                            <div className="control-group">
                                                <label className="control-label">Phone (With country code)</label>
                                                <div className="controls">
                                                    <input type="text" name="phone" value="" className="form-control" id="inputPhone" placeholder="Phone" />
                                                </div>
                                            </div>
                                            <div className="control-group">
                                                <label className="control-label captcha"><img src="assets/img/placeholders/120x35.png" width="120" height="35" style={border} alt="" /></label>
                                                <div className="controls">
                                                    <input className="captcha form-control" name="captcha" type="text" placeholder="Enter code from image" value="" />
                                                </div>
                                            </div>
                                            <div className="control-group">
                                                <div className="controls">
                                                    <button type="submit" className="btn btn-danger">Register</button>
                                                    <button type="reset" className="btn btn-success">Reset</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default connect(state => ({}), {})(BodyRegistration);