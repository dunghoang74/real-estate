import React, { Component } from 'react';
import { connect } from 'react-redux';

class BodyIndex extends Component {
    render() {
        return (
            <div>

            <div className="section page-body section-color-primary">
                <div className="container">
                    <h2 className="section-title text-center"><span>Example Features</span></h2>
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="row">
                                <div className="col-md-3 content-image"><img src="assets/img/placeholders/110x100.png" alt="" /></div>
                                <div className="col-md-9">
                                    <h4 className="text-color-primary">Native Multilangual</h4> Natively multilingual, no need to install any addon. Every element can be translated and you can add as many languages as you want.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="row">
                                <div className="col-md-3 content-image"><img src="assets/img/placeholders/110x100.png" alt="" /></div>
                                <div className="col-md-9">
                                    <h4 className="text-color-primary">Easy to customize</h4> Template is based on Bootstrap 3, if you are familiar with Bootstrap you can easily customize this template.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="row">
                                <div className="col-md-3 content-image"><img src="assets/img/placeholders/110x100.png" alt="" /></div>
                                <div className="col-md-9">
                                    <h4 className="text-color-primary">Bootstrap ready</h4> Based on Bootstrap 3 and are easy to customize.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="row">
                                <div className="col-md-3 content-image"><img src="assets/img/placeholders/110x100.png" alt="" /></div>
                                <div className="col-md-9">
                                    <h4 className="text-color-primary">User friendly</h4> Website structure is logical. Managing elements such as pages, estates or images is easily done...
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="row">
                                <div className="col-md-3 content-image"><img src="assets/img/placeholders/110x100.png" alt="" /></div>
                                <div className="col-md-9">
                                    <h4 className="text-color-primary">Template System</h4> This is simply dummy text of the printing and typesetting industry.elit...
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="row">
                                <div className="col-md-3 content-image"><img src="assets/img/placeholders/110x100.png" alt="" /></div>
                                <div className="col-md-9">
                                    <h4 className="text-color-primary">Robust</h4> Build as easy to use and robust Flat style user interface.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )}
}

export default connect(state => ({}),{})(BodyIndex);