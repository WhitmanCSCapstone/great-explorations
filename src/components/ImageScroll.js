import React from 'react';
import Slider from 'react-slick';
import './ImageScroll.css';
import './../App.css'
import logo1 from './../grex_images/IMG_01.jpg';
import logo2 from './../grex_images/IMG_02.jpg';
import logo3 from './../grex_images/IMG_03.jpg';
import logo4 from './../grex_images/IMG_04.jpg';
import logo5 from './../grex_images/IMG_05.jpg';
import logo6 from './../grex_images/IMG_06.jpg';
import logo7 from './../grex_images/IMG_07.jpg';

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
