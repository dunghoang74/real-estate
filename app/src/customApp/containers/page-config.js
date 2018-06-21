import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Input, Button, Icon } from 'antd';
import { Button as ButtonB } from 'react-bootstrap';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import basicStyle from '../../settings/basicStyle';
import styled from "styled-components";
import pageConfig from '../../redux/pageConfig/actions';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import {Image, Transformation} from 'cloudinary-react';
import Notification from '../../components/notification';
import { getUsernameFromUrl } from '../../../src/helpers/utility';
import { CompactPicker } from 'react-color';

const {setupPage, getPageInfo, uploadLogo, uploadHeader, loading} = pageConfig;

const CLOUDINARY_UPLOAD_PRESET = 'ew0v9j7f';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/kazamap/upload';


class PageConfig extends Component {
	state = {
		value: 'mysite',
		copied: false,
		loading: false,
		page:null,
		file:null,
	};

	componentDidMount(){
		let data = JSON.parse(sessionStorage.getItem('usr'));
		this.props.getPageInfo(data._id);
		this.props.loading('plus', 'logo');
		this.props.loading('plus', 'header');
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.token_expired){
			Notification(
				'error',
				"Su session ha terminado. Porfavor Ingrese nuevamente.",
			);
			this.props.history.push('/' + getUsernameFromUrl() + '/signin');
		}
	}

	onClose = function (e) {
		const btn = document.getElementById("btnLearn");
		if (btn.style.display === "none") {
			btn.style.display = "block";
		} else {
			btn.style.display = "none";
		}
	};

	copyLink = () => {
		const el = document.createElement('input');
 		el.value = 'https://kazamap.com/'+this.state.value;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		this.setState({ copied: true })
		setTimeout(() => {
			this.setState({ copied: false });
			document.body.removeChild(el);
		},900)
	}

	onLogoDrop = (files) => {
		this.props.loading('loading', 'logo');
		this.handleLogoUpload(files[0]);
	}

	handleLogoUpload(file) {
		let upload = request.post(CLOUDINARY_UPLOAD_URL)
			.field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
			.field('folder', 'logos')
			.field('tags', 'logo,page')
			.field('file', file);

		upload.end((err, response) => {
			if (err) {
				console.error(err);
				this.props.loading('plus', 'logo');
			}

			if (response.body.secure_url !== '') {
				this.props.uploadLogo(response.body);
			}
		});
	}

	onHeaderDrop = (files) => {
		this.handleHeaderUpload(files[0]);
	}

	handleHeaderUpload(file) {
		this.props.loading('loading', 'header');

		let upload = request.post(CLOUDINARY_UPLOAD_URL)
			.field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
			.field('folder', 'headers')
			.field('tags', 'header,page')
			.field('file', file);

		upload.end((err, response) => {
			if (err) {
				console.error(err);
				this.props.loading('plus', 'header');
			}

			if (response.body.secure_url !== '') {

				this.props.uploadHeader(response.body);
			}
		});
	}

	render() {
		const { colStyle, gutter } = basicStyle;

		return (
			<PageConfigWrapper style={{ height: "auto" }}>
				<LayoutWrapper>
					<h1 >Configuración de tu Página.</h1>
					<Row gutter={gutter} justify="start">
						
						<Col md={12} sm={12} xs={24} style={colStyle} className="fullCol">
							<Box
								title="Dirección actual de tu página"
								subtitle="Añade tu propio logo y propiedades a tu página"
							>
								<table>
									<tbody>
										<tr>
											<td width="100%">
												<Input addonBefore="https://kazamap.com/"
													defaultValue={this.state.value}
													readOnly />
											</td>
											<td>
												{!this.state.copied 
												?
													<Button style={{ float: "right" }} 
															type="primary"
															onClick={this.copyLink}
													>Copiar URL</Button>
												:
													<span style={{color: 'red'}}>Copiado!</span>
												}
											</td>
										</tr>
									</tbody>
								</table>
								<br />
								
								{/* <div id="btnLearn">
									<Card title="¿Sabias?" extra={<a onClick={this.onClose}>X</a>}>
										<Alert
											message=""
											description="Puedes tener todas las funcinalidades de KazaMap en tu propio Dominio."
											type="warning"
											showIcon closable onClose={this.onClose}
										/>
										<br />
										
											<Input addonBefore="http://"
												defaultValue="TuPropioDominio" addonAfter=".com"
												readOnly />
											<br /><br />
											<Button type="primary" className="btnLearn">Aprende Como</Button>
										
									</Card>
								</div> */}
							</Box>
						</Col>
					</Row>

					<Row gutter={gutter} justify="start">
						<Col md={12} sm={12} xs={24} style={colStyle}>
							<Box title="Añade tu Logo:" subtitle="En esta sección puedes añadir el logo de tu compañia, caso contrario saldrá el logo de Kazamap.com. Te recomendamos añadir el tuyo propio para darle identidad a tu página.">
								<table>
									<tbody>
										<tr>
											<td>
												
												<Dropzone
													multiple={false}
													className="dropZone"
													accept="image/jpg,image/png,image/jpeg"
													onDrop={this.onLogoDrop.bind(this)}>
													<div className="dropZoneTexts">
														<div>Subir Logo</div>
														<Icon type={this.props.loading_logo} />
														<div>Arrastrar & Soltar</div>
													</div>
												</Dropzone>

											</td>	
											<td>
												{	
													(this.props.pageUserInfo !== null && 
														this.props.pageUserInfo !== undefined &&
														this.props.pageUserInfo.logo)
													?
														<Image cloudName="kazamap" publicId={this.props.pageUserInfo.logo.public_id} >
															<Transformation height="100" width="200"  background="white" crop="lpad" />
														</Image>
													:   ''
												}
											</td>
												
										</tr>	
									</tbody>
								</table>	

							</Box>
						</Col>
						<Col md={12} sm={12} xs={24} style={colStyle}>
							<Box title="Añade Imagen Principal:" subtitle="Esta sección representa los colores principales de tu página.">
								<table style={{width:"100%", border:"0px solid black"}}>
									<tbody>
										<tr>
											<td>
											
												<CompactPicker
													// color={ this.state.background }
													// onChangeComplete={ this.handleChangeComplete }
												/>
											</td>
											<td style={{textAlign:"right"}}>
											
												<CompactPicker
													// color={ this.state.background }
													// onChangeComplete={ this.handleChangeComplete }
												/>
											</td>	
										</tr>
										<tr>
											<td style={{ textAlign: "left" }} >
											
													{/* <Button className="exBtn"  
															type="primary"
															
													>Boton Primer Color</Button> */}
													<ButtonB bsStyle="primary" className="exBtn">
														Boton Primer Color
													</ButtonB>
											</td>
											<td style={{ textAlign: "right" }} >
											
													{/* <Button className="exBtn" 
															type="primary"
															onClick={this.copyLink}
													>Boton Segundo Color</Button> */}
													<ButtonB bsStyle="success" className="exBtn">
														Boton Segundo Color
													</ButtonB>
											</td>

										</tr>	
									</tbody>
								</table>	

							</Box>
						</Col>
					</Row>
					
					<Row className="fullCol">	
						<Col md={12} sm={12} xs={24} style={colStyle} className="fullCol">
							<Box title="Añade Imagen Principal:" subtitle="Esta sección representa la imagen principal de tu página.">
								<table>
									<tbody>
										<tr>
											<td>
												<Dropzone
													multiple={false}
													className="dropZone"
													accept="image/jpg,image/png,image/jpeg"
													onDrop={this.onHeaderDrop.bind(this)}>
													<div className="dropZoneTexts">
														<div>Subir Imagen</div>
														<Icon type={this.props.loading_header} />
														<div>Arrastrar & Soltar</div>
													</div>
												</Dropzone>

											</td>
											<td>
												{	
													(this.props.pageUserInfo !== null && 
														this.props.pageUserInfo !== undefined &&
														this.props.pageUserInfo.header !== undefined) 
													?
														<Image cloudName="kazamap" publicId={this.props.pageUserInfo.header.public_id} >
															<Transformation  width="1100" height="500"  background="white" crop="pad" />
														</Image>
													:   ''
												}
											</td>		
										</tr>
											
									</tbody>
								</table>
							</Box>
						</Col>
					</Row>

				</LayoutWrapper>
			</PageConfigWrapper>
		);
	}
}

export default connect(
	state => ({
		isLoggedIn: state.Auth.idToken !== null ? true : false,
		pageUserInfo:   state.PageConfigReducer.user_page,
		loading_logo:   state.PageConfigReducer.loading_logo,
		loading_header: state.PageConfigReducer.loading_header,
		token_expired:  state.PageConfigReducer.token_expired,
	}),
	{setupPage, 
	getPageInfo, 
	uploadLogo,
	loading,
	uploadHeader,
	})(PageConfig);


const PageConfigWrapper = styled.div`
	
	.btnLearn{
		width:100% !important;
		height:45px !important;
		font-size:1.3em !important;
	
	}
	.pageTitle{
		height:0px !important;
	}

	.dropZone{
		position: relative;
		border: 3px dashed green;
		width: 200px;
		height: 100px;
		border-radius: 5px;
		background-color: #F0F0F0;
		cursor: pointer; 
	}
	.dropZoneTexts{
		border:0px solid black;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 80%;
		height: 70%;
		margin: auto;
		text-align: center;
		cursor: pointer; 
	}
	.fullCol{
		width:100%;
	}

	.exBtn{
		width:245px;
	}

`;