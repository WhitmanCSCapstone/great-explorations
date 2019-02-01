import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';
import { Layout, Menu} from 'antd';

const { Header, Content, Footer } = Layout;

class App extends Component {

    state = {
        current: this.props.location.pathname,
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
                        <Menu.Item key={"/about"}>
                             <Link to={"/about"}>
                               {"About"}
                             </Link>
                           </Menu.Item>
                        <Menu.Item key={"/schedule"}>
                             <Link to={"/schedule"}>
                               {"Schedule"}
                             </Link>
                           </Menu.Item>
                        <Menu.Item key={"/"}>
                             <Link to={"/registration"}>
                               {"Registration"}
                             </Link>
                           </Menu.Item>
                        <Menu.Item key={"/payment"}>
                             <Link to={"/payment"}>
                               {"Payment"}
                             </Link>
                           </Menu.Item>
                        <Menu.Item key={"/sponsors"}>
                             <Link to={"/sponsors"}>
                               {"Sponsors"}
                             </Link>
                           </Menu.Item>
                        <Menu.Item key={"/keynote"}>
                             <Link to={"/keynote"}>
                               {"Keynote"}
                             </Link>
                           </Menu.Item>
                        <Menu.Item key={"/faq"}>
                             <Link to={"/faq"}>
                               {"FAQs"}
                             </Link>
                           </Menu.Item>
                        <Menu.Item key={"/contact"}>
                             <Link to={"/contact"}>
                               {"Contact Us"}
                             </Link>
                           </Menu.Item>
                    </Menu>
                </Header>

                <Content style={{ padding: '0 3vw 0 3vw', minHeight: '100vh'}}>
                  {this.props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Whitman College Copyright ©2019 Melissa Kohl, Kirk Lange, and Jack Stewart
                </Footer>
            </Layout>
        );
    }
}

export default App;
