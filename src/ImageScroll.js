import React from 'react';
import { Carousel } from 'antd';
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
        return (
            <Carousel className="ant-carousel"
              autoplay
            >
                <div><h3><img src={logo1} className="App-logo" alt="logo" /></h3></div>
                <div><h3><img src={logo2} className="App-logo" alt="logo" /></h3></div>
                <div><h3><img src={logo3} className="App-logo" alt="logo" /></h3></div>
                <div><h3><img src={logo4} className="App-logo" alt="logo" /></h3></div>
            </Carousel>
        )
    }
}


export default ImageScroll