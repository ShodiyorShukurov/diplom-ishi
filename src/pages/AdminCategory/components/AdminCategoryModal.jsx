import React, { useState } from 'react';
import { Modal, Form, Input, InputNumber, Button, message } from 'antd';
import Api from '../../../api';

const AdminCategoryModal = ({
  isModal,
  setIsModal,
  selectedItem,
  getAdminCategory,
  setSelectedItem
}) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (isModal && selectedItem) {
      form.setFieldsValue({
        name: selectedItem.name || '',
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
      name: values.name,
      email: 'admin@gmail.com',
    };

    try {
      if (selectedItem && selectedItem.id) {
        const res = await Api.put(
          '/edit-category/' + selectedItem.id + '/',
          fullData
        );

        if (res.data) {
          message.success('Form submitted successfully!');
          getAdminCategory();
          setIsModal(false);
          form.resetFields();
          setSelectedItem(null)
        }
      } else {
        const res = await Api.post('/create-category/', fullData);
        if (res.data) {
          message.success('Form submitted successfully!');
          getAdminCategory();
          setIsModal(false);
          form.resetFields();
          setSelectedItem(null)
        }
      }
    } catch (error) {
      message.error('Failed to submit the form!');
    }
  };

  return (
    <Modal
      title="Category Form"
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
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter name!' }]}
        >
          <Input placeholder="Enter name here" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AdminCategoryModal;
