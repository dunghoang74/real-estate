import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import imageHome from '../../image/home01-min.jpeg';

class HeaderSlider extends Component {
    render() {
        return (
            <SliderStyle className="container">
                <section className="header-slider">
                    <div id="header-slider" className="carousel slide" data-ride="carousel">
                        
                        <div className="carousel-inner" role="listbox">
                            
                            <div className="item active">
                                <img src={imageHome} alt="Inicio" />
                                <div className="carousel-caption">
                                    <h3 className="carousel-caption-title"><span>Single Property real estate</span> <i className="line-bottom color-primary"></i></h3>
                                    <div className="s-description"><p>This is simply dummy text of the printing and the typesetting industry. That has been the industry standard dummy text ever since the 1500s ...</p></div>
                                    <a href="listing.html" className="btn btn-primary color-primary"><span>Click to show</span></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </section>
                
               
            </SliderStyle>
        )}
    }
    
export default connect(state => ({}),{})(HeaderSlider);


const SliderStyle = styled.div`
    position:relative;

    .top-header-container {

        position: relative;
        width: 100%;
        height: 150px;
        color: white;
    }

    .header-slider{
        position:relative;
    }

    .carousel-caption-title{
        color:white;
    }

`;