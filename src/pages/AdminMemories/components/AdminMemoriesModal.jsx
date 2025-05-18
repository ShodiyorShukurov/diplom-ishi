import React from 'react';
import { Modal, Form, Input, Button, message, InputNumber, Select, } from 'antd';
import Api from '../../../api';


const { Option } = Select;

const AdminMemoriesModal = ({
  isModal,
  setIsModal,
  selectedItem,
  getAdminMemories,
  setSelectedItem,
}) => {
  const [form] = Form.useForm();


  React.useEffect(() => {
    if (isModal && selectedItem) {
      form.setFieldsValue({
        name: selectedItem.name || '',
        price: selectedItem.price || '',
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
      price: values.price,
    };
    try {
      if (selectedItem && selectedItem.id) {
        fullData.category = values.category_id;
        const res = await Api.put('/memories/' + selectedItem.id + '/', fullData);

        if (res.data) {
          message.success('Form submitted successfully!');
          getAdminMemories();
          setIsModal(false);
          form.resetFields();
          setSelectedItem(null);
        }
      } else {
        const res = await Api.post(
          '/memories/',
          fullData
        );
        if (res.data) {
          message.success('Form submitted successfully!');
          getAdminMemories();
          setIsModal(false);
          form.resetFields();
          setSelectedItem(null);
        }
      }
    } catch (error) {
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

        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: 'Please enter price!' }]}
        >
          <InputNumber
            placeholder="Enter price here"
            style={{ width: '100%' }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AdminMemoriesModal;
