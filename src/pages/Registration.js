import React, { Component } from 'react';
import { message } from 'antd';
import './../App.css';
import WorkshopGrid from './../components/Grid.js';
import ImageScroll from './../components/ImageScroll.js';
import { WEBTEXT, WEBTEXT_ADD_CALLBACK } from '../components/SheetUtil';
import brochureEn from './../brochures/2025GE_EN.pdf';
import brochureEs from './../brochures/2025GE_ES.pdf';
class Registration extends Component {

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

    success = () => {
      window.location.replace("/#");
      message.success(this.state.text[118], 10);
    };
    
    // 2025: fixed security issue by adding rel="noreferrer noopener to all <a elements and adjusted for mobile devices"
    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div>
                {/* <p className="App-text"> 
                    <center style={{ fontSize: '1.25vw', color: 'black', fontWeight: '200'}}>
                        <a target="_blank" rel="noreferrer noopener" href={brochureEn}>English Brochure Download</a>
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                        <a target="_blank" rel="noreferrer noopener" href={brochureEs}>Descargar Folleto en Español</a>
                    </center>
        
                </p> */}
                    <p className="App-text" style={{ textAlign: 'center' }}> 
                        <a target="_blank" rel="noreferrer noopener" href={brochureEn} style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem) !important', fontWeight: '200 !important', whiteSpace: 'nowrap' }}>
                            English Brochure Download
                        </a>
                        <span style={{ padding: '0 15px' }}>&nbsp;</span> {/* Added spacing between the two links */}
                        <a target="_blank" rel="noreferrer noopener" href={brochureEs} style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem) !important', fontWeight: '200 !important', whiteSpace: 'nowrap' }}>
                            Descargar Folleto en Español
                        </a>
                    </p>
                    <p className="App-header-text">
                        <ImageScroll />
                    </p>

                    <p className="App-header-text">
                        {this.state.text[10]}<br></br>
                        <center style={{ fontSize: '2vw', color: 'black', fontWeight: '400'}}>{this.state.text[11]}</center>
                    </p>
                    <p className="App-text">
                        <center>{this.state.text[12]}<br></br></center>
                                <center style={{ fontStyle: 'oblique' , fontWeight: '600'}}>{this.state.text[13]}</center><br></br>
                                
                    </p>
                </div>
                <div >

                    <p className="App-header-text-2">
                        <center> {this.state.text[127]} </center>
                        <center style={{ fontSize: '2vw', color: 'black'}}>{this.state.text[128]}</center>
                    </p>
                    {/*} comment out the registration form until open
                    <p className="App-text">
                        <center> {this.state.text[129]} </center>
                        <center><a target="_blank" href='https://forms.gle/pXKxarLCetFkPxVN9' rel="noopener norefferer">
                         Great Explorations Pre-Registration Form.</a> <br></br></center>
                    </p> */}
                    {/* comment out the instructions and workshops until open
                    <p className="App-text-tiny"><i>
                      {this.state.text[16]}
                    </i></p> <br></br>  */}

                    <p className="App-header-text-2">
                        <center> {this.state.text[130]} </center>
                        <center style={{ fontSize: '2vw', color: 'black', fontWeight: '400'}}>{this.state.text[14]}</center>
                    </p>  

                    <p className="App-text-small">
                      {this.state.text[15]}<br></br>
                    </p>
                    <p className="App-header-text">
                        <WorkshopGrid language={this.props.language} />
                    </p> 
                </div>
            </div>
        )
    }
}

export default Registration;
