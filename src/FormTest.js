import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './FormTest.css';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
      
    const userNameField = getFieldValue('userName');
    
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox className="login-form-text">Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="https://duckduckgo.com/">Forgot password</a>
          <br />
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <br />
          <div className="login-form-text"> Username: { userNameField }</div>
          <br />
          <div className="login-form-text">Or <a href="https://duckduckgo.com/">register now!</a></div>
        </FormItem>
      </Form>
    );
  }
}

const FormTest = Form.create()(NormalLoginForm);

export default FormTest
