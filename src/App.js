import React, { Component } from 'react';
import './App.css';
import Registration from './Registration.js';
import About from './About.js';
import Sponsors from './Sponsors.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Layout, Menu} from 'antd';

const { Header, Content, Footer } = Layout;

const pages = {
  about: About,
  registration: Registration,
  sponsors: Sponsors
}

class App extends Component {

    state = {
        current: null,
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
          <Router>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        SelectedKeys={[this.state.current]}
                        style={{ lineHeight: '64px' }}
                        onClick={this.handleClick}
                    >
                        {Object.keys(pages).map((name) => {
                             return(
                               <Menu.Item key={name}>
                                 <Link to={"/"+name}>
                                   {name.charAt(0).toUpperCase() + name.slice(1)}
                                 </Link>
                               </Menu.Item>
                             )
                          })}
                    </Menu>
                </Header>

                <Content style={{ padding: '0 50px' }}>
                    {Object.keys(pages).map((name) => {
                       return(
                         <Route exact path={"/" + name} component={pages[name]} key={name} />
                       )
                    })}

                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Whitman College ©2018 Created by Nelson Hayes, Melissa Kohl, Kirk Lange, and Jack Stewart
                </Footer>
            </Layout>
          </Router>
        );
    }
}

export default App;
