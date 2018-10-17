import React from 'react';
import { Carousel } from 'antd';
import Slider from 'react-slick';
import './ImageScroll.css';
import './App.css'
import logo1 from './grex_images/STEM.jpg';
import logo2 from './grex_images/girls.jpg';
import logo3 from './grex_images/wheat.jpg';
import logo4 from './grex_images/town.jpg';

function onChange(a, b, c) {
  console.log(a, b, c);
}

class ImageScroll extends React.Component {
    render() {
        var settings = {
            dots: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            centerMode: true,
            centerPadding: '0px',
            variableWidth: true,
            adaptiveHeight: false,
            overflow: 'hidden'
            
        };
        return (
            <Slider {...settings}>
                <div><h3><img src={logo1} height="300px" alt="logo" /></h3></div>
                <div><h3><img src={logo2} height="300px" alt="logo" /></h3></div>
                <div><h3><img src={logo3} height="300px" alt="logo" /></h3></div>
                <div><h3><img src={logo4} height="300px" alt="logo" /></h3></div>
            </Slider>
        )
    }
}


export default ImageScroll