import React, { Component } from 'react';
import './App.css';
import Registration from './Registration.js';
import About from './About.js';
import Sponsors from './Sponsors.js';
import Home from './Home.js';
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
        current: "registration",
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
                        defaultSelectedKeys={[this.state.current]}
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

                <Content style={{ padding: '0 50px 0 50px', minHeight: '100vh'}}>
                  <div>
                    {Object.keys(pages).map((name) => {
                       return(
                         <Route exact path={"/" + name} component={pages[name]} key={name} />
                       )
                    })}
                  </div>
                  <div>
                      <Route exact path={"/"} component={Registration} key={"default"} />
                  </div>

                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Whitman College Copyright ©2018 Nelson Hayes, Melissa Kohl, Kirk Lange, and Jack Stewart
                </Footer>
            </Layout>
          </Router>
        );
    }
}

export default App;
