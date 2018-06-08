import React, { Component } from 'react';
import { connect } from 'react-redux';

class BodyIndex extends Component {
    render() {
        return (
            <div>
            <main className="main section-color-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="h-side top-pad h-side-slim clearfix">
                                <div className="properties-filter">
                                    <div className="form-group">
                                        <select className="form-control selectpicker select-small" name="filter" id="search">
                                            <option value="0">Order By</option>
                                            <option value="1">Asc</option>
                                            <option value="2">Desc</option>
                                        </select>
                                    </div>
                                    <div className="grid-type pull-right">
                                        <a href="index_classfied.html" className="grid active"><i className="fa fa-th"></i></a>
                                        <a href="/" className="list"><i className="fa fa-list"></i></a>
                                    </div>
                                </div>
                            </div> 
							{/* <!-- /. content-header -->   */}
                            <div className="properties">
                                <div className="row">
                                    <div className="col-md-4 col-sm-6">
                                        <div className="property-card card  treefield-card">
                                            <div className="property-card-header image-box">
                                                <img src="assets/img/placeholders/395x250.png" alt="" className="" />
                                                <div className="budget"><i className="fa fa-star"></i></div>
                                                <a href="listing.html" className="property-card-hover">
                                                    <img src="assets/img/property-hover-arrow.png" alt="" className="left-icon" />
                                                    <img src="assets/img/plus.png" alt="" className="center-icon" />
                                                    <img src="assets/img/icon-notice.png" alt="" className="right-icon" />
                                                </a>
                                            </div>
                                            <div className="property-card-box card-box card-block">
                                                <h3 className="property-card-title"><i className="fa fa-car color-primary"></i><a href="listing.html">Car</a></h3>
                                                <ul className="treefield-categories">
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_car.html">Hybrid cars</a>
                                                        <span className="count text-color-primary">7</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_car.html">Classic cars</a>
                                                        <span className="count text-color-primary">1</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_car.html">Modern cars</a>
                                                        <span className="count text-color-primary">8</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_car.html">Infinity cars</a>
                                                        <span className="count text-color-primary">2</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_car.html">Fast cars</a>
                                                        <span className="count text-color-primary">3</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="property-card card  treefield-card">
                                            <div className="property-card-header image-box">
                                                <img src="assets/img/placeholders/395x250.png" alt="" className="" />
                                                <a href="listing.html" className="property-card-hover">
                                                    <img src="assets/img/property-hover-arrow.png" alt="" className="left-icon" />
                                                    <img src="assets/img/plus.png" alt="" className="center-icon" />
                                                    <img src="assets/img/icon-notice.png" alt="" className="right-icon" />
                                                </a>
                                            </div>
                                            <div className="property-card-box card-box card-block">
                                                <h3 className="property-card-title"><i className="fa fa-motorcycle color-primary"></i><a href="listing.html">Bike</a></h3>
                                                <ul className="treefield-categories">
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_car.html">Adventure</a>
                                                        <span className="count text-color-primary">3</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_car.html">Racing</a>
                                                        <span className="count text-color-primary">15</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_car.html">Commuter bikes</a>
                                                        <span className="count text-color-primary">7</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_car.html">Touring bikes</a>
                                                        <span className="count text-color-primary">75</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="property-card card  treefield-card">
                                            <div className="property-card-header image-box">
                                                <img src="assets/img/placeholders/395x250.png" alt="" className="" />
                                                <a href="listing.html" className="property-card-hover">
                                                    <img src="assets/img/property-hover-arrow.png" alt="" className="left-icon" />
                                                    <img src="assets/img/plus.png" alt="" className="center-icon" />
                                                    <img src="assets/img/icon-notice.png" alt="" className="right-icon" />
                                                </a>
                                            </div>
                                            <div className="property-card-box card-box card-block">
                                                <h3 className="property-card-title"><i className="fa fa-truck color-primary"></i><a href="listing.html">Truck</a></h3>
                                                <ul className="treefield-categories">
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_car.html">Bus</a>
                                                        <span className="count text-color-primary">30</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_car.html">Tractor</a>
                                                        <span className="count text-color-primary">6</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_car.html">Wagon</a>
                                                        <span className="count text-color-primary">10</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="property-card card  treefield-card">
                                            <div className="property-card-header image-box">
                                                <img src="assets/img/placeholders/395x250.png" alt="" className="" />
                                                <a href="listing.html" className="property-card-hover">
                                                    <img src="assets/img/property-hover-arrow.png" alt="" className="left-icon" />
                                                    <img src="assets/img/plus.png" alt="" className="center-icon" />
                                                    <img src="assets/img/icon-notice.png" alt="" className="right-icon" />
                                                </a>
                                            </div>
                                            <div className="property-card-box card-box card-block">
                                                <h3 className="property-card-title"><i className="fa fa-at color-primary"></i><a href="listing.html">Job</a></h3>
                                                <ul className="treefield-categories">
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_job.html">Administrative</a>
                                                        <span className="count text-color-primary">42</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_job.html">Architecture</a>
                                                        <span className="count text-color-primary">29</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_job.html">Bank</a>
                                                        <span className="count text-color-primary">163</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_job.html">IT</a>
                                                        <span className="count text-color-primary">251</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_job.html">Management</a>
                                                        <span className="count text-color-primary">193</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="property-card card  treefield-card">
                                            <div className="property-card-header image-box">
                                                <img src="assets/img/placeholders/395x250.png" alt="" className="" />
                                                <a href="listing.html" className="property-card-hover">
                                                    <img src="assets/img/property-hover-arrow.png" alt="" className="left-icon" />
                                                    <img src="assets/img/plus.png" alt="" className="center-icon" />
                                                    <img src="assets/img/icon-notice.png" alt="" className="right-icon" />
                                                </a>
                                            </div>
                                            <div className="property-card-box card-box card-block">
                                                <h3 className="property-card-title"><i className="fa fa-building-o color-primary"></i><a href="listing.html">Real Estate</a></h3>
                                                <ul className="treefield-categories">
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="map_side2.html">Apartment</a>
                                                        <span className="count text-color-primary">42</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="map_side2.html">Land</a>
                                                        <span className="count text-color-primary">95</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="map_side2.html">House</a>
                                                        <span className="count text-color-primary">131</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="map_side2.html">Commercial</a>
                                                        <span className="count text-color-primary">123</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="property-card card  treefield-card">
                                            <div className="property-card-header image-box">
                                                <img src="assets/img/placeholders/395x250.png" alt="" className="" />
                                                <a href="listing.html" className="property-card-hover">
                                                    <img src="assets/img/property-hover-arrow.png" alt="" className="left-icon" />
                                                    <img src="assets/img/plus.png" alt="" className="center-icon" />
                                                    <img src="assets/img/icon-notice.png" alt="" className="right-icon" />
                                                </a>
                                            </div>
                                            <div className="property-card-box card-box card-block">
                                                <h3 className="property-card-title"><i className="fa fa-ship color-primary"></i><a href="listing.html">Yacht</a></h3>
                                                <ul className="treefield-categories">
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_yacht.html">Fisher</a>
                                                        <span className="count text-color-primary">6</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_yacht.html">Motor</a>
                                                        <span className="count text-color-primary">19</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_yacht.html">House</a>
                                                        <span className="count text-color-primary">131</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_yacht.html">Sailing</a>
                                                        <span className="count text-color-primary">3</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="property-card card  treefield-card">
                                            <div className="property-card-header image-box">
                                                <img src="assets/img/placeholders/395x250.png" alt="" className="" />
                                                <a href="listing.html" className="property-card-hover">
                                                    <img src="assets/img/property-hover-arrow.png" alt="" className="left-icon" />
                                                    <img src="assets/img/plus.png" alt="" className="center-icon" />
                                                    <img src="assets/img/icon-notice.png" alt="" className="right-icon" />
                                                </a>
                                            </div>
                                            <div className="property-card-box card-box card-block">
                                                <h3 className="property-card-title"><i className="fa fa-paw color-primary"></i><a href="listing.html">Horses</a></h3>
                                                <ul className="treefield-categories">
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_shop.html">American Paint Horse</a>
                                                        <span className="count text-color-primary">27</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_shop.html">Arabian horse</a>
                                                        <span className="count text-color-primary">173</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_shop.html">Czech warm blood</a>
                                                        <span className="count text-color-primary">543</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_shop.html">Croatian Coldblood</a>
                                                        <span className="count text-color-primary">203</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="property-card card  treefield-card">
                                            <div className="property-card-header image-box">
                                                <img src="assets/img/placeholders/395x250.png" alt="" className="" />
                                                <a href="listing.html" className="property-card-hover">
                                                    <img src="assets/img/property-hover-arrow.png" alt="" className="left-icon" />
                                                    <img src="assets/img/plus.png" alt="" className="center-icon" />
                                                    <img src="assets/img/icon-notice.png" alt="" className="right-icon" />
                                                </a>
                                            </div>
                                            <div className="property-card-box card-box card-block">
                                                <h3 className="property-card-title"><i className="fa fa-money color-primary"></i><a href="listing.html">Business Estate</a></h3>
                                                <ul className="treefield-categories">
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="map_business.html">Bar</a>
                                                        <span className="count text-color-primary">57</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="map_business.html">Home food restaurant</a>
                                                        <span className="count text-color-primary">23</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="map_business.html">Flower shop</a>
                                                        <span className="count text-color-primary">44</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="map_business.html">Clothes shop</a>
                                                        <span className="count text-color-primary">678</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="map_business.html">Luxar Hotel</a>
                                                        <span className="count text-color-primary">457</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="property-card card  treefield-card">
                                            <div className="property-card-header image-box">
                                                <img src="assets/img/placeholders/395x250.png" alt="" className="" />
                                                <a href="listing.html" className="property-card-hover">
                                                    <img src="assets/img/property-hover-arrow.png" alt="" className="left-icon" />
                                                    <img src="assets/img/plus.png" alt="" className="center-icon" />
                                                    <img src="assets/img/icon-notice.png" alt="" className="right-icon" />
                                                </a>
                                            </div>
                                            <div className="property-card-box card-box card-block">
                                                <h3 className="property-card-title"><i className="fa fa-shopping-cart color-primary"></i><a href="listing.html">Shop</a></h3>
                                                <ul className="treefield-categories">
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_shop.html">Phones</a>
                                                        <span className="count text-color-primary">6</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_shop.html">Tablet devices</a>
                                                        <span className="count text-color-primary">19</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_shop.html">Food</a>
                                                        <span className="count text-color-primary">131</span>
                                                    </li>
                                                    <li>
                                                        <a className="treefield-box-item btn-default" href="index_shop.html">Clothes</a>
                                                        <span className="count text-color-primary">3</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
								{/* <!-- /.properties --> */}
                                <nav className="text-center">
                                    <ul className="pagination">
                                        <li className="page-item"><a className="page-link active" href="/">1</a></li>
                                        <li className="page-item"><a className="page-link" href="/">2</a></li>
                                        <li className="page-item"><a className="page-link" href="/">3</a></li>
                                    </ul>
                                </nav>
                            </div> 
							{/* <!-- /.properties-->  */}
                        </div>
						{/* <!-- /.center-content --> */}
                        <div className="col-md-3 sidebar-right">
                            <div className="widget text-center">
                                <div className="fb-page" data-href="https://www.facebook.com/facebook" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><div className="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/facebook"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div></div>
                            </div>
							{/* <!-- /.widget-facebook --> */}
                            <div className="widget widget-box box-container">
                                <div className="widget-header text-uppercaser">
                                    <h2>Filter</h2>
                                </div>
                                <div className="form-additional npad">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Badrooms"  />
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Bathroom"  />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Min Price"  />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Max Price"  />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary btn-wide color-primary" type='submit'>Refresh results</button>
                                    </div>
                                </div>
                            </div>
                            <div className="widget widget-box box-container">
                                <div className="widget-header text-uppercaser">
                                    <h3>Recommendations</h3>
                                </div>
                                <ul className="widget-list text-uppercase text-center npad">
                                    <li><a href="/" className="widget-item">APARTMENTS IN SPLIT</a></li>
                                    <li><a href="/" className="widget-item">CAR IN VARAZDIN</a></li>
                                    <li><a href="/" className="widget-item">BIKE IN ZAGORJE</a></li>
                                </ul>
                            </div>
							{/* <!-- /.widget-filter-->  */}
                            <div className="widget widget-ads-right">
                                <img src="assets/img/placeholders/265x220.png" alt="" className="center-block" />
                            </div>
							{/* <!-- /.widget-ads-->  */}
                        </div>
                        {/* <!-- /.right side bar --> */}
                    </div>
                </div>
            </main>
            <section className="section news section-color-secondary">
                <div className="container">
                    <div className="section-title">
                        <h2 className="section-title text-center"><span>News</span></h2>
                    </div>
                    <div className="news-slide">
                        <div id="news-carousel" className="carousel slide" data-ride="carousel">
                           <div className="carousel-inner" role="listbox">
                                <div className="item active">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <h3 className="title"><a href="page_gallery.html">Find your happy family house</a></h3>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <div className="news-thumbnail hover-default">
                                                            <img src="assets/img/placeholders/700x350.png" alt="" />
                                                            <a href="listing.html" className="property-card-hover">
                                                                <img src="assets/img/property-hover-arrow.png" alt="" className="left-icon" />
                                                                <img src="assets/img/plus.png" alt="" className="center-icon" />
                                                                <img src="assets/img/icon-notice.png" alt="" className="right-icon" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7 description">
                                                        This  is simply dummy text of the printing and typesetting industry. That m has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Layout passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Layout.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <h3 className="title"><a href="page_gallery.html">Healthy body important for success in business</a></h3>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <div className="news-thumbnail hover-default">
                                                            <img src="assets/img/placeholders/700x350.png" alt="" />
                                                            <a href="listing.html" className="property-card-hover">
                                                                <img src="assets/img/property-hover-arrow.png" alt="" className="left-icon" />
                                                                <img src="assets/img/plus.png" alt="" className="center-icon" />
                                                                <img src="assets/img/icon-notice.png" alt="" className="right-icon" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7 description">
                                                        This  is simply dummy text of the printing and typesetting industry. That m has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Layout passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Layout.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <h3 className="title"><a href="page_gallery.html">Sell your house easily with nice grass</a></h3>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <div className="news-thumbnail hover-default">
                                                            <img src="assets/img/placeholders/700x350.png" alt="" />
                                                            <a href="listing.html" className="property-card-hover">
                                                                <img src="assets/img/property-hover-arrow.png" alt="" className="left-icon" />
                                                                <img src="assets/img/plus.png" alt="" className="center-icon" />
                                                                <img src="assets/img/icon-notice.png" alt="" className="right-icon" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7 description">
                                                        This  is simply dummy text of the printing and typesetting industry. That m has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Layout passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Layout.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <h3 className="title"><a href="page_gallery.html">Education and over-thinking</a></h3>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <div className="news-thumbnail hover-default">
                                                            <img src="assets/img/placeholders/700x350.png" alt="" />
                                                            <a href="listing.html" className="property-card-hover">
                                                                <img src="assets/img/property-hover-arrow.png" alt="" className="left-icon" />
                                                                <img src="assets/img/plus.png" alt="" className="center-icon" />
                                                                <img src="assets/img/icon-notice.png" alt="" className="right-icon" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7 description">
                                                        This  is simply dummy text of the printing and typesetting industry. That m has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Layout passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Layout.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <h3 className="title"><a href="page_gallery.html">New modern house designs</a></h3>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <div className="news-thumbnail hover-default">
                                                            <img src="assets/img/placeholders/700x350.png" alt="" />
                                                            <a href="listing.html" className="property-card-hover">
                                                                <img src="assets/img/property-hover-arrow.png" alt="" className="left-icon" />
                                                                <img src="assets/img/plus.png" alt="" className="center-icon" />
                                                                <img src="assets/img/icon-notice.png" alt="" className="right-icon" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7 description">
                                                        This  is simply dummy text of the printing and typesetting industry. That m has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Layout passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Layout.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <h3 className="title"><a href="page_gallery.html">Better portal for large City</a></h3>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <div className="news-thumbnail hover-default">
                                                            <img src="assets/img/placeholders/700x350.png" alt="" />
                                                            <a href="listing.html" className="property-card-hover">
                                                                <img src="assets/img/property-hover-arrow.png" alt="" className="left-icon" />
                                                                <img src="assets/img/plus.png" alt="" className="center-icon" />
                                                                <img src="assets/img/icon-notice.png" alt="" className="right-icon" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7 description">
                                                        This  is simply dummy text of the printing and typesetting industry. That m has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Layout passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Layout.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <h3 className="title"><a href="page_gallery.html">Clean environment importance for healthy life</a></h3>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <div className="news-thumbnail hover-default">
                                                            <img src="assets/img/placeholders/700x350.png" alt="" />
                                                            <a href="listing.html" className="property-card-hover">
                                                                <img src="assets/img/property-hover-arrow.png" alt="" className="left-icon" />
                                                                <img src="assets/img/plus.png" alt="" className="center-icon" />
                                                                <img src="assets/img/icon-notice.png" alt="" className="right-icon" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7 description">
                                                        This  is simply dummy text of the printing and typesetting industry. That m has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Layout passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Layout.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <h3 className="title"><a href="page_gallery.html">Become successfully speaker</a></h3>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <div className="news-thumbnail hover-default">
                                                            <img src="assets/img/placeholders/700x350.png" alt="" />
                                                            <a href="listing.html" className="property-card-hover">
                                                                <img src="assets/img/property-hover-arrow.png" alt="" className="left-icon" />
                                                                <img src="assets/img/plus.png" alt="" className="center-icon" />
                                                                <img src="assets/img/icon-notice.png" alt="" className="right-icon" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7 description">
                                                        This  is simply dummy text of the printing and typesetting industry. That m has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Layout passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Layout.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <h3 className="title"><a href="page_gallery.html">Yacht prices again changing</a></h3>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <div className="news-thumbnail hover-default">
                                                            <img src="assets/img/placeholders/700x350.png" alt="" />
                                                            <a href="listing.html" className="property-card-hover">
                                                                <img src="assets/img/property-hover-arrow.png" alt="" className="left-icon" />
                                                                <img src="assets/img/plus.png" alt="" className="center-icon" />
                                                                <img src="assets/img/icon-notice.png" alt="" className="right-icon" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7 description">
                                                        This  is simply dummy text of the printing and typesetting industry. That m has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Layout passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Layout.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <h3 className="title"><a href="page_gallery.html">Women successfully ratio</a></h3>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <div className="news-thumbnail hover-default">
                                                            <img src="assets/img/placeholders/700x350.png" alt="" />
                                                            <a href="listing.html" className="property-card-hover">
                                                                <img src="assets/img/property-hover-arrow.png" alt="" className="left-icon" />
                                                                <img src="assets/img/plus.png" alt="" className="center-icon" />
                                                                <img src="assets/img/icon-notice.png" alt="" className="right-icon" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7 description">
                                                        This  is simply dummy text of the printing and typesetting industry. That m has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Layout passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Layout.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <h3 className="title"><a href="page_gallery.html">Toys affect children's nature</a></h3>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <div className="news-thumbnail hover-default">
                                                            <img src="assets/img/placeholders/700x350.png" alt="" />
                                                            <a href="listing.html" className="property-card-hover">
                                                                <img src="assets/img/property-hover-arrow.png" alt="" className="left-icon" />
                                                                <img src="assets/img/plus.png" alt="" className="center-icon" />
                                                                <img src="assets/img/icon-notice.png" alt="" className="right-icon" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7 description">
                                                        This  is simply dummy text of the printing and typesetting industry. That m has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Layout passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Layout.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <h3 className="title"><a href="page_gallery.html">Become a better guest</a></h3>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <div className="news-thumbnail hover-default">
                                                            <img src="assets/img/placeholders/700x350.png" alt="" />
                                                            <a href="listing.html" className="property-card-hover">
                                                                <img src="assets/img/property-hover-arrow.png" alt="" className="left-icon" />
                                                                <img src="assets/img/plus.png" alt="" className="center-icon" />
                                                                <img src="assets/img/icon-notice.png" alt="" className="right-icon" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7 description">
                                                        This  is simply dummy text of the printing and typesetting industry. That m has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Layout passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Layout.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="carousel-indicators pagination-carousel">
                                <li data-target="#news-carousel" data-slide-to="0" className="active" ><a className="" href="/"> 1 </a></li>
                                <li  data-target="#news-carousel" data-slide-to="1" ><a className="" href="/">2</a></li>
                                <li  data-target="#news-carousel" data-slide-to="2" ><a className="" href="/">3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
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