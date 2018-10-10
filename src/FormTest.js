import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './FormTest.css';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  values = {
    name: null,
    email: null
  }

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
    this.values.name = getFieldValue('name');
    this.values.email = getFieldValue('email');

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your name!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Name" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
        <br />
        <div className="login-form-text"><b>Name:</b> { this.values.name }</div>
        <br />
        <div className="login-form-text"><b>Email:</b> { this.values.email }</div>
      </Form>
    );
  }
}

const FormTest = Form.create()(NormalLoginForm);

export default FormTest
