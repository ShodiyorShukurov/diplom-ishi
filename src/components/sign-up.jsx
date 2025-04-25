import React, { useState } from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import Api from '../api';
import { API_ROLE, API_TOKEN } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const SignUp = () => {
  const navigate = useNavigate();
  const [roleVisible, setRoleVisible] = useState(false);
  const [storedValues, setStoredValues] = useState({});
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    if (!roleVisible) {
      const { firstName, lastName, email, password } = values;

      if (!firstName || !lastName || !email || !password) {
        message.error("Iltimos barcha maydonlarni to'ldiring");
        console.log('kdjals');
        return;
      }

      setStoredValues({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      });
      setRoleVisible(true);
      return;
    }

    const fullData = {
      ...storedValues,
      role: values.role,
    };

    try {
      const res = await Api.post('/register/', fullData);
      if (res) {
        await onFinish(storedValues.email, storedValues.password);
        form.resetFields();
        setRoleVisible(false);
        setStoredValues({});
      }
    } catch (error) {
      console.log(error.response?.data?.email);
      if (error.response?.data?.email) {
        message.error('Bunday foydalanuvchi allaqachon mavjud');
      } else {
        message.error('Ro‘yxatdan o‘tishda xatolik yuz berdi!');
      }
    }
  };

  const onFinish = async (email, password) => {
    try {
      const res = await Api.post('/login/', {
        email: email,
        password: password,
      });

      message.success('Form submitted successfully!');
      localStorage.setItem(API_TOKEN, res.data.access);
      localStorage.setItem(API_ROLE, res.data.role);
      if (res.data.role == 'customer') {
        navigate('/customer');
      } else if (res.data.role == 'seller') {
        navigate('/seller');
      }
    } catch (error) {
      message.error('Failed to submit the form!');
    }
  };

  const handleFailedSubmit = () => {
    message.error('Please fill in all required fields!');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          onFinishFailed={handleFailedSubmit}
        >
          {!roleVisible && (
            <>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: 'Please enter your first name!' },
                ]}
              >
                <Input placeholder="Enter your first name" />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  { required: true, message: 'Please enter your last name!' },
                ]}
              >
                <Input placeholder="Enter your last name" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email!' },
                  { type: 'email', message: 'Please enter a valid email!' },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Please enter your password!' },
                ]}
              >
                <Input.Password
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
              </Form.Item>
            </>
          )}

          {roleVisible && (
            <Form.Item
              label="Role"
              name="role"
              rules={[{ required: true, message: 'Please select your role!' }]}
            >
              <Select placeholder="Select your role">
                <Option value="seller">Seller</Option>
                <Option value="customer">Customer</Option>
              </Select>
            </Form.Item>
          )}

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              {roleVisible ? 'Submit' : 'Next'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
