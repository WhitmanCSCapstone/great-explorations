import React from 'react';
import Slider from 'react-slick';
import './ImageScroll.css';
import './App.css'
import logo1 from './grex_images/aurora.jpg';
import logo2 from './grex_images/IMG_5710.jpg';
import logo3 from './grex_images/IMG_5733.jpg';
import logo4 from './grex_images/IMG_5740.jpg';
import logo5 from './grex_images/IMG_5700.jpg';
import logo6 from './grex_images/IMG_5702.jpg';
import logo7 from './grex_images/IMG_5725.jpg';

class ImageScroll extends React.Component {
    render() {
        var settings = {
            dots: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 5000,
            centerMode: true,
            centerPadding: '0px',
            variableWidth: true,
            adaptiveHeight: true,
            overflow: 'hidden'

        };
        return (
          <div style={{
            width: window.innerWidth,
            display: true
          }}>
            <Slider {...settings}>
                <div><h3><img src={logo1} height="300px" alt="logo" /></h3></div>
                <div><h3><img src={logo2} height="300px" alt="logo" /></h3></div>
                <div><h3><img src={logo3} height="300px" alt="logo" /></h3></div>
                <div><h3><img src={logo4} height="300px" alt="logo" /></h3></div>
                <div><h3><img src={logo5} height="300px" alt="logo" /></h3></div>
                <div><h3><img src={logo6} height="300px" alt="logo" /></h3></div>
                <div><h3><img src={logo7} height="300px" alt="logo" /></h3></div>
            </Slider>
          </div>
        )
    }
}


export default ImageScroll
