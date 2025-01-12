import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Checkbox } from 'antd';
import { SHEET_INFO, SHEET_LOAD, WEBTEXT, WEBTEXT_LOAD, WEBTEXT_ADD_CALLBACK, SWITCH_LANGUAGE } from './components/SheetUtil';
import { Link } from 'react-router';

const { Header, Content, Footer } = Layout;

class App extends Component {

    state = {
        current: "registration",
        text: [],
        language: "en" // Default language
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
                SHEET_LOAD();
            },
            () => {
                console.log("Error initializing Google API!");
        });
    }

    langSwitch = () => {
        SWITCH_LANGUAGE(); // Switch the language
        console.log("Language switched in App.js:", this.state.language);
        WEBTEXT_LOAD()     // Reload the web text in the new language
        SHEET_LOAD(() => {
            console.log("SHEET_LOAD called after language switch.");
        });
        // SHEET_LOAD();      // Reload the sheet data in the new language
        this.setState({ language: this.state.language === "en" ? "es" : "en" }); // Toggle language
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

                {/* <Content style={{ padding: '0 3vw 0 3vw', minHeight: '100vh'}}>
                  {this.props.children}
                </Content> */}
                <Content style={{ padding: '0 3vw 0 3vw', minHeight: '100vh' }}>
                    {React.cloneElement(this.props.children, { language: this.state.language })}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    {this.state.text[1]}
                </Footer>
            </Layout>
        );
    }
}

export default App;
