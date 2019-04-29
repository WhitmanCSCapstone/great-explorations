import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Checkbox } from 'antd';
import { SHEET_INFO, WEBTEXT, WEBTEXT_LOAD, WEBTEXT_ADD_CALLBACK, SWITCH_LANGUAGE } from './components/SheetUtil';
import { Link } from 'react-router';

const { Header, Content, Footer } = Layout;

class App extends Component {

    state = {
        current: "registration",
        text: []
    }

    componentDidMount() {
        window.gapi.load("client", this.initClient);
        WEBTEXT_ADD_CALLBACK(this.updateText.bind(this));
    }

    initClient = () => {
        window.gapi.client
            .init({
                apiKey: SHEET_INFO.apiKey,
                discoveryDocs: SHEET_INFO.discoveryDocs
            })
            .then(() => {
                WEBTEXT_LOAD();
            },
            () => {
                console.log("Error initializing Google API!");
        });
    }

    langSwitch = () => {
        SWITCH_LANGUAGE();
        WEBTEXT_LOAD();
    }

    updateText() {
        this.setState({ text: WEBTEXT });
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[this.state.current]}
                        style={{ lineHeight: '64px' }}
                        onClick={this.handleClick}
                    >
                        <Menu.Item key={"about"}>
                             <Link to={"/about"}>
{this.state.text[2]}
                             </Link>
                           </Menu.Item>
                        <Menu.Item key={"schedule"}>
                             <Link to={"/schedule"}>
{this.state.text[3]}
                             </Link>
                           </Menu.Item>
                        <Menu.Item key={"registration"}>
                             <Link to={"/registration"}>
{this.state.text[4]}
                             </Link>
                           </Menu.Item>
                        <Menu.Item key={"payment"}>
                             <Link to={"/payment"}>
{this.state.text[5]}
                             </Link>
                           </Menu.Item>
                        <Menu.Item key={"sponsors"}>
                             <Link to={"/sponsors"}>
{this.state.text[6]}
                             </Link>
                           </Menu.Item>
                        <Menu.Item key={"keynote"}>
                             <Link to={"/keynote"}>
{this.state.text[7]}
                             </Link>
                           </Menu.Item>
                        <Menu.Item key={"faq"}>
                             <Link to={"/faq"}>
{this.state.text[8]}
                             </Link>
                           </Menu.Item>
                        <Menu.Item key={"/contact"}>
                             <Link to={"/contact"}>
{this.state.text[9]}
                             </Link>
                           </Menu.Item>
                        {<Checkbox onChange={this.langSwitch} style={{ color: "#9fa7ae", marginLeft: "20px" }}>Español</Checkbox>}
                    </Menu>
                </Header>

                <Content style={{ padding: '0 3vw 0 3vw', minHeight: '100vh'}}>
                  {this.props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
{this.state.text[1]}
                </Footer>
            </Layout>
        );
    }
}

export default App;
