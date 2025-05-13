import React from 'react';
import { Modal, Form, Input, Button, message,  Select } from 'antd';
import Api from '../../../api';

const { Option } = Select;

const AdminSocketModal = ({
  isModal,
  setIsModal,
  selectedItem,
  getAdminSokets,
  setSelectedItem,
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
    };
    try {
      if (selectedItem && selectedItem.id) {
        const res = await Api.put(
          '/sokets/' + selectedItem.id + '/',
          fullData
        );

        if (res.data) {
          message.success('Form edit successfully!');
          getAdminSokets();
          setIsModal(false);
          form.resetFields();
          setSelectedItem(null);
        }
      } else {
        const res = await Api.post('/sokets/', fullData);
        if (res.data) {
          message.success('Form submitted successfully!');
          getAdminSokets();
          setIsModal(false);
          form.resetFields();
          setSelectedItem(null);
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      message.error('Failed to submit the form!');
    }
  };

  return (
    <Modal
      title="Product Form"
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

export default AdminSocketModal;
