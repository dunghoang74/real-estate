import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container footer-mask">
                    <div className="container footer-contant">
                        <div className="row">
                            <div className="col-md-3 hidden-sm hidden-xs">
                                <div className="logo"><a href="/"><img src="assets/img/placeholders/360x85.png" alt="" /></a></div>
                                <div className="social">
                                    <ul>
                                        <li><a href="/"><i className="fa fa-facebook-f"></i></a></li>
                                        <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="/"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="title">
                                    <h4>Contact</h4>
                                </div>
                                <ul className="list list-contact  list-news">
                                    <li>ClassifiedPlace,
                                        Ilica 345,
                                        HR-10000 Zagreb</li>
                                    <li><i className="fa fa-phone"></i> +385 (0)1 123 321</li>
                                    <li><i className="fa fa-phone"></i>  +385 (0)1 123 322</li>
                                    <li><i className="fa fa-envelope"></i>  info@my-website.com</li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6  hidden-sm hidden-xs">
                                <div className="title">
                                    <h4>News</h4>
                                </div>
                                <ul className="list list-news">
                                    <li>
                                        <a href="page_gallery.html" className="title">Yacht changing</a>
                                        <span className="description"> 
                                            January 6, 2017
                                        </span>
                                    </li>                       
                                    <li>
                                        <a href="page_gallery.html" className="title">Women successfully</a>
                                        <span className="description"> 
                                            May 22, 2017
                                        </span>
                                    </li>                       
                                    <li>
                                        <a href="page_gallery.html" className="title">Better portal for City</a>
                                        <span className="description"> 
                                            June 22, 2017
                                        </span>
                                    </li>                       
                                    <li>
                                        <a href="page_gallery.html" className="title">A better guest</a>
                                        <span className="description"> 
                                            January 19, 2017
                                        </span>
                                    </li>                       
                                    <li>
                                        <a href="page_gallery.html" className="title">Yacht prices</a>
                                        <span className="description"> 
                                            January 27, 2017
                                        </span>
                                    </li>                       
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="title">
                                    <h4>Opening hours</h4>
                                </div>
                                <ul className="list list-hours">
                                    <li>
                                        <a href="page_gallery.html" className="title">Mon-Tues:</a>
                                        <span className="description"> 
                                            6.30 am - 18.00pm
                                        </span>
                                    </li>                       
                                    <li>
                                        <a href="page_gallery.html" className="title">Wed - Th:</a>
                                        <span className="description"> 
                                            10.00 am - 11.30pm
                                        </span>
                                    </li>                       
                                    <li>
                                        <a href="page_gallery.html" className="title">Fri:</a>
                                        <span className="description"> 
                                            2.30 pm - 10.00pm
                                        </span>
                                    </li>                       
                                    <li>
                                        <a href="page_gallery.html" className="title">Sun:</a>
                                        <span className="description"> 
                                            Closed
                                        </span>
                                    </li>                       
                                </ul>
                            </div>
                        </div>
                    </div>
					{/* <!-- /.footer-content --> */}
                    <div className="footer-bottom">
                        <div className="container text-right">
                            <span className=""><a href="/">WINTER &#169; 2016</a></span>
                        </div>
                    </div>
					{/* <!-- /.footer-bottom -->  */}
                </div>
            </footer>
        )}
}

export default connect(state => ({}),{})(Footer);