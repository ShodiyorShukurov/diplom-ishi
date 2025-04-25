import React from 'react';
import { Form, Input, Button, message } from 'antd';
import 'antd/dist/reset.css';
import Api from '../api';
import { useNavigate } from 'react-router-dom';
import { API_ROLE, API_TOKEN } from '../utils/constants';

const Login = () => {

  const navigate = useNavigate()

  const onFinish = async (values) => {
    const fullData = {
      email: values.email,
      password: values.password,
    };

    try {
      const res = await Api.post('/login/', fullData);

      localStorage.setItem(API_TOKEN, res.data.access);
      localStorage.setItem(API_ROLE, res.data.role);
      message.success('Form submitted successfully!');
      if(res.data.role == "customer"){
        navigate('/customer')
      }else if(res.data.role == "seller"){
        navigate('/seller')
      }
    } catch (error) {
      message.error('Failed to submit the form!');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password autoComplete="current-password" />
          </Form.Item>
          <Form.Item>
            <div className="text-center">
              <span>Not registered? </span>
              <a href="/sign-up">Sign up</a>
            </div>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
