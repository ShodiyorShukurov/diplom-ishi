import React from 'react';
import { Modal, Form, Input, Button, message, InputNumber, Select } from 'antd';
import Api from '../../../api';
import useAdminSokets from '../../../hooks/useAdminSockets';

const { Option } = Select;

const AdminMotherBoardModal = ({
  isModal,
  setIsModal,
  selectedItem,
  getAdminMotherboards,
  setSelectedItem,
}) => {
  const [form] = Form.useForm();
  const { soketData } = useAdminSokets();

  React.useEffect(() => {
    if (isModal && selectedItem) {
      form.setFieldsValue({
        name: selectedItem.name || '',
        price: selectedItem.price || '',
        soket: selectedItem.soket || '',
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
      soket: values.soket,
    };
    try {
      if (selectedItem && selectedItem.id) {
        const res = await Api.put(
          '/motherboards/' + selectedItem.id + '/',
          fullData
        );

        if (res.data) {
          message.success('Form edit successfully!');
          getAdminMotherboards();
          setIsModal(false);
          form.resetFields();
          setSelectedItem(null);
        }
      } else {
        const res = await Api.post('/motherboards/', fullData);
        if (res.data) {
          message.success('Form submitted successfully!');
          getAdminMotherboards();
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

        <Form.Item
          name="soket"
          label="Soket"
          rules={[{ required: true, message: 'Please choose soket!' }]}
        >
          <Select placeholder="Choose category">
            {soketData?.map((item) => (
              <Option key={item.id} value={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
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

export default AdminMotherBoardModal;
