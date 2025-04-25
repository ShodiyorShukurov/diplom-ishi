import React, { useState } from 'react';
import { Modal, Form, Input, InputNumber, Button, message } from 'antd';
import Api from '../../../api';

const CustomerModal = ({ isModal, setIsModal, selectedItem, getCustomer }) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (isModal && selectedItem) {
      form.setFieldsValue({
        text: selectedItem.text || '',
        price: Number(selectedItem.price) || '',
        phone_number: selectedItem.phone_number || '',
      });
    }
  }, [isModal, selectedItem, form]);

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        onFinish(values);
        // form.resetFields();
        // onClose();
      })
      .catch((info) => {
        console.log('Validation Failed:', info);
      });
  };

  const onFinish = async (values) => {
    const fullData = {
      text: values.text,
      price: values.price,
      phone_number: values.phone_number,
    };

    try {
      if (selectedItem && selectedItem.id) {
        const res = await Api.put(
          '/edit-post/' + selectedItem.id + '/',
          fullData
        );

        if (res.data) {
          message.success('Form submitted successfully!');
          getCustomer();
          setIsModal(false);
        }
      } else {
        const res = await Api.post('/create-post/', fullData);
        if (res.data) {
          message.success('Form submitted successfully!');
          getCustomer();
          setIsModal(false);
        }
      }
    } catch (error) {
      message.error('Failed to submit the form!');
    }
  };

  return (
    <Modal
      title="Customer Form"
      open={isModal}
      onOk={handleOk}
      onCancel={() => setIsModal(false)}
      footer={[
        <Button key="back" onClick={() => setIsModal(false)}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Submit
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="text"
          label="Text"
          rules={[{ required: true, message: 'Please enter text!' }]}
        >
          <Input.TextArea rows={4} placeholder="Enter text here" />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[
            { required: true, message: 'Please enter a price!' },
            {
              type: 'number',
              min: 0,
              message: 'Price cannot be negative!',
            },
          ]}
        >
          <InputNumber style={{ width: '100%' }} placeholder="Enter price" />
        </Form.Item>

        <Form.Item
          name="phone_number"
          label="Phone Number"
          rules={[
            { required: true, message: 'Please enter a phone number!' },
            {
              pattern: /^\+998(9[0-9]|3[3]|7[1-5])[0-9]{7}$/,
              message:
                "To'g'ri O'zbekiston telefon raqamini kiriting! (masalan, +998901234567)",
            },
          ]}
        >
          <Input placeholder="998901234567" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CustomerModal;
