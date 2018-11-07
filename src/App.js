import React, { Component } from 'react';
import './App.css';
import EmbedForm from './EmbedForm.js';
import WorkshopGrid from './Grid.js';
import ImageScroll from './ImageScroll.js';

import { Layout, Menu} from 'antd';

const { Header, Content, Footer } = Layout;

class App extends Component {





    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                        onClick={this.handleClick}
                    >
                        <Menu.Item key="1">About</Menu.Item>
                        <Menu.Item key="2">Register Now!</Menu.Item>
                        <Menu.Item key="3">Sponsors</Menu.Item>
                    </Menu>
                </Header>

                <Content style={{ padding: '0 50px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <div className="App-header-text">
                            <p>
                                <ImageScroll />
                            </p>
                            <p className="App-header-text">
                                Welcome to Great Explorations!
                            </p>
                            <center>
                            <p className="App-text">
                                A Science, Technology, Engineering and Math conference for 5th thru 8th grade girls.<br></br>
                                March 9th, 2019 - Whitman College
                            </p>
                            </center>
                            <p className="App-text">
                                Below you will find all of the 2019 workshops.
                            </p>
                            <p>
                                <WorkshopGrid />
                            </p>
                            <p>
                                <EmbedForm />
                            </p>
                        </div>

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Whitman College ©2018 Created by Nelson Hayes, Melissa Kohl, Kirk Lange, and Jack Stewart
                </Footer>
            </Layout>
        );
    }
}

export default App;
