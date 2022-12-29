import React, { Component } from 'react';
import './../App.css';
import pic1 from './../grex_images/Perron_Julie.jpg';
import pic2 from './../grex_images/rachel_salt.jpg';
import pic3 from './../grex_images/salt_books.jpg';
import { WEBTEXT, WEBTEXT_ADD_CALLBACK } from '../components/SheetUtil';
import brochureEn from './../brochures/GE2022En.pdf';
import brochureEs from './../brochures/GE2022Es.pdf';

class Keynote extends Component {

    state = {
        text: []
    }

    componentDidMount() {
        WEBTEXT_ADD_CALLBACK(this.updateText.bind(this));
        this.updateText();
    }

    updateText() {
        this.setState({ text: WEBTEXT });
    }

    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div className="App-header-text">
                <p className="App-text">
                    <center style={{ fontSize: '1.25vw', color: 'black', fontWeight: '200'}}>
                <a target="_blank" href={brochureEn}>English Brochure Download</a>
                {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                <a target="_blank" href={brochureEs}>Descargar Folleto en Español</a>
                </center>
                </p>
                    <p className="App-header-text">
                        {this.state.text[76]}
                    </p>

                    <p className="App-header-text-2">
                        <center>{this.state.text[77]}<br/>{this.state.text[78]}</center>
                    </p>

                    <div><h3><img src={pic1} height="300px" alt="logo" /></h3></div>
                    <p className="App-text">
                    {/*<center><span class="picture">{this.state.text[79]}</span><br/><br/></center>*/}
                    {this.state.text[81]}<br/><br/>
                    {this.state.text[82]}<br/><br/>
                    {this.state.text[83]}<br/><br/>
                    </p>
                    {/*<div><h3><img src={pic2} height="350px" alt="logo" /></h3></div>*/}
                    {/*<p className="picture">{this.state.text[79]}</p>*/}

                    {/*  secondary heading for special guest */}
                    <p className="App-header-text-2">
                        <center>{this.state.text[84]}</center>
                    </p>
                    <div><h3><img src={pic2} height="300px" alt="logo" /></h3></div>
                    <p className="App-text">
                    {this.state.text[85]}<br/><br/>
                    {this.state.text[125]}<br/><br/>
                    {this.state.text[126]}<br/><br/>
                    </p>
                    {<div><h3><img src={pic3} height="350px" alt="logo" /></h3></div>}
                </div>
            </div>

        )
    }
}

export default Keynote;
