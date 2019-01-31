import React, { Component } from 'react';
import './App.css';
import Registration from './pages/Registration.js';
import About from './pages/About.js';
import Sponsors from './pages/Sponsors.js';
import Payment from './pages/Payment.js';
import FAQ from './pages/FAQ.js';
import Keynote from './pages/Keynote.js';
import Contact from './pages/Contact.js';
import Schedule from './pages/Schedule.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Menu} from 'antd';

const { Header, Content, Footer } = Layout;

const pages = {
  about: About,
  schedule: Schedule,
  registration: Registration,
  payment: Payment,
  sponsors: Sponsors,
  keynote: Keynote
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
                        <Menu.Item key={"faq"}>
                             <Link to={"/faq"}>
                               {"FAQs"}
                             </Link>
                           </Menu.Item>
                        <Menu.Item key={"contact"}>
                             <Link to={"/contact"}>
                               {"Contact Us"}
                             </Link>
                           </Menu.Item>
                    </Menu>
                </Header>

                <Content style={{ padding: '0 3vw 0 3vw', minHeight: '100vh'}}>
                  <div>
                    {Object.keys(pages).map((name) => {
                       return(
                         <Route exact path={"/" + name} component={pages[name]} key={name} />
                       )
                    })}
                  </div>
                  <div>
                      <Route exact path={"/faq"} component={FAQ} key={"faq"} />
                  </div>
                  <div>
                      <Route exact path={"/contact"} component={Contact} key={"contact"} />
                  </div>
                  <div>
                      <Route exact path={"/"} component={Registration} key={"default"} />
                  </div>

                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Whitman College Copyright ©2019 Melissa Kohl, Kirk Lange, and Jack Stewart
                </Footer>
            </Layout>
          </Router>
        );
    }
}

export default App;
