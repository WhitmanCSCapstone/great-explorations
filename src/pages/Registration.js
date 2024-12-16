import React, { Component } from 'react';
import { message, Button, Affix } from 'antd';
import './../App.css';
import EmbedForm from './../components/EmbedForm.js';
import WorkshopGrid from './../components/Grid.js';
import ImageScroll from './../components/ImageScroll.js';
import { WEBTEXT, WEBTEXT_ADD_CALLBACK } from '../components/SheetUtil';
import brochureEn from './../brochures/2023GE_EN_Mini.pdf';
import brochureEs from './../brochures/2023GE_ES_Mini.pdf';
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

    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
                <div>
                <p className="App-text">
                    <center style={{ fontSize: '1.25vw', color: 'black', fontWeight: '200'}}>
<a target="_blank" href={brochureEn}>English Brochure Download</a>
{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
<a target="_blank" href={brochureEs}>Descargar Folleto en Español</a>
</center>
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
                    {/* this floating button was for the embeded form */}
                    {/* <p align="right">
                        <Affix offsetTop={200}>
                            <Button type="primary"
                                onClick={() => {
                                  window.location.hash = "#registration";
                                }}>{this.state.text[115]}
                            </Button>
                        </Affix> */}
                        {/*<br></br>*/}
                        {/*<Affix offsetTop={255}>*/}
                        {/*    <Button type="danger"*/}
                        {/*        onClick={() => {*/}
                        {/*          window.location.hash = "#registration";*/}
                        {/*        }}>{this.state.text[114]}*/}
                        {/*    </Button>*/}
                        {/*</Affix>*/}
                    {/* </p> */}
                    {/* Only naming the hash after the page's name because anchors are behaving poorly with React's hash routing */}
                    {/* !!!!commenting out form until registration opens!!!! */}
                    {/* <p className="App-header-text" id="registration"> */}
                    
                    {/* changing registration from iframe embeded form to a link to new tab/window */}
                    {/* <p align="center">
                        <EmbedForm />
                    </p> */}

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
                    </i></p> <br></br>  

                    <p className="App-header-text-2">
                        <center> {this.state.text[130]} </center>
                        <center style={{ fontSize: '2vw', color: 'black', fontWeight: '400'}}>{this.state.text[14]}</center>
                    </p>  
                    
                    {/* Now that the registration is linked to the form, there
                        is no need for this extra button to confirm registration */}
                    {/* <p align="center">
                        <Button type="primary" onClick={this.success} ghost>
                           {this.state.text[117]}
                        </Button>
                    </p> 
                    <p className="App-text-small">
                      {this.state.text[15]}<br></br>
                    </p>
                    <p className="App-header-text">
                        <WorkshopGrid />
                    </p> */}
                </div>
            </div>
        )
    }
}

export default Registration;
