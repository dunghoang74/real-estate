import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Input, Button, Alert, Upload, Icon, message } from 'antd';
// import { Button as ButtonB } from 'react-bootstrap';
import LayoutContentWrapper from "../../components/utility/layoutWrapper.js";
import LayoutContent from "../../components/utility/layoutContent";
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import ContentHolder from '../../components/utility/contentHolder';
import basicStyle from '../../settings/basicStyle';
import IntlMessages from '../../components/utility/intlMessages';
import Card from '../../containers/Uielements/Card/card.style';
import styled from "styled-components";
import {uploadLogo} from '../../helpers/utility';
import pageConfig from '../../redux/pageConfig/actions';
import { getUsernameFromUrl, getPageByUserId } from '../../../src/helpers/utility';

const {setupPage} = pageConfig;

class PageConfig extends Component {
	state = {
		value: 'mysite',
		copied: false,
		loading: false,
		page:null,
		images:null
	};

	componentDidMount(){
		let data = JSON.parse(sessionStorage.getItem('usr'));

		getPageByUserId(data._id)
			.then((resp) => {
				if(resp.data.length > 0){

					setTimeout(()=>{
						this.setState({page: resp.data[0]});
					},500)

				}
			})
			.catch((err)=>{
				console.log(err.response)
			})
			const images = this.importAll(require.context('../../image/logos/', false, /\.(png|jpe?g)$/));
			
			setTimeout(()=>{
				this.setState({ images: images });
			},500)
			
	}

	importAll = (r) => {
		let images = {};
		r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
		return images;
	}

	onClose = function (e) {
		const btn = document.getElementById("btnLearn");
		if (btn.style.display === "none") {
			btn.style.display = "block";
		} else {
			btn.style.display = "none";
		}
	};

	getBase64 = (img, callback) => {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	}

	beforeUpload = (file) => {
		const isJPG = (file.type === 'image/jpeg' || file.type === 'image/jpg');
		const isPNG = file.type === 'image/png';

		if (!isJPG && !isPNG) {
			message.error('Solo se aceptan imágenes JPG y PNG');
		}

		const isLt2M = file.size / 1024 / 1024 < 1.5;
		const imageSize = file.size / 1024 / 1024;
		if (!isLt2M) {
			message.error('EL logo debe de pesar menos de 1.5MB! y su image pesa: ' + imageSize.toFixed(1));
		}

		return ((isJPG || isPNG) && isLt2M);
	}

	onUpload = ({ file, onSuccess }) => {
		
		uploadLogo(file)
			.then((resp) => {
				onSuccess('done', file);
				//setup page configuration
				this.props.setupPage(resp);
			})
			.catch((err) => {
				this.setState({
					loading: false,
				})

				if(err.response !== undefined && (err.response.status === 403 || err.response.status === 499)){

					window.location = '/' + getUsernameFromUrl() + '/signin';

				}else{
					message.error('Hubo un error al subir el logo. Refresque la página e intente denuevo.');
				}

			});

	}

	onSuccess = (file) => {
		return file;
	}

	handleChange = (info) => {
		if (info.file.status === 'uploading') {
			this.setState({ loading: true });
			return;
		}
		if (info.file.status === 'done') {
			this.getBase64(info.file.originFileObj, imageUrl => this.setState({
				imageUrl,
				loading: false,
			}));
		}
	}


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

	render() {

		const { colStyle, gutter, pageTitle } = basicStyle;
		const uploadButton = (
			<div>
				<Icon type={this.state.loading ? 'loading' : 'plus'} />
				<div className="ant-upload-text">Subir Logo</div>
			</div>
		);
		const imageUrl = this.state.imageUrl;

		return (
			<PageConfigWrapper style={{ height: "100vh" }}>
				<LayoutWrapper>
					<h1 >Configuración de tu Página.</h1>
					<Row gutter={gutter} justify="start">
						
						<Col md={12} sm={12} xs={24} style={colStyle}>
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
								
								<div id="btnLearn">
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
								</div>
							</Box>
						</Col>
						<Col md={12} sm={12} xs={24} style={colStyle}>
							<Box title="Añade tu Logo:" subtitle="En esta sección puedes añadir el logo de tu compañia, caso contrario saldrá el logo de Kazamap.com. Te recomendamos añadir el tuyo propio para darle identidad a tu página.">
								
								{console.log('page imaages:::',this.state.page,  this.state.images )}

								<table>
									<tbody>
										<tr>
											<td>
												{(this.state.page !== null) ? this.state.images[this.state.page.logo] : '' }
												{	
													(this.state.page !== null) 
													?
														<img src={this.state.images[this.state.page.logo]} width="102px"/>
													:   ''
												}
											</td>
											<td>
												<Upload
													name="avatar"
													listType="picture-card"
													className="avatar-uploader"
													showUploadList={false}
													action="memory"
													beforeUpload={this.beforeUpload}
													onChange={this.handleChange}
													customRequest={this.onUpload}
												>
													{imageUrl ? <img src={imageUrl} alt="avatar" width="100px" /> : uploadButton}
												</Upload>
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

	}),{setupPage})(PageConfig);


const PageConfigWrapper = styled.div`
	
	.btnLearn{
		width:100% !important;
		height:45px !important;
		font-size:1.3em !important;
	
	}
	.pageTitle{
		height:0px !important;
	}

`;