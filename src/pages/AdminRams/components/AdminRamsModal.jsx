import React from 'react';
import { Modal, Form, Input, Button, message, InputNumber, Select } from 'antd';
import Api from '../../../api';
import useAdminCategory from '../../../hooks/useAdminCategory';

const { Option } = Select;

const AdminRamsModal = ({
  isModal,
  setIsModal,
  selectedItem,
  getAdminRams,
  setSelectedItem,
}) => {
  const [form] = Form.useForm();
  const { categoryData } = useAdminCategory();

  React.useEffect(() => {
    if (isModal && selectedItem) {
      form.setFieldsValue({
        name: selectedItem.name || '',
        price: selectedItem.price || '',
        category_id: selectedItem.category || '',
        power: selectedItem.power || '',
        type: selectedItem.type || '',
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
      category: values.category_id,
      power: values.power,
      type: values.type,
    };
    try {
      if (selectedItem && selectedItem.id) {
        fullData.category = values.category_id;
        const res = await Api.put('/rams/' + selectedItem.id + '/', fullData);

        if (res.data) {
          message.success('Form submitted successfully!');
          getAdminRams();
          setIsModal(false);
          form.resetFields();
          setSelectedItem(null);
        }
      } else {
        const res = await Api.post('/rams/', fullData);
        if (res.data) {
          message.success('Form submitted successfully!');
          getAdminRams();
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

        <Form.Item
          name="power"
          label="Power"
          rules={[{ required: true, message: 'Please enter power!' }]}
        >
          <InputNumber
            placeholder="Enter power here"
            style={{ width: '100%' }}
          />
        </Form.Item>

        <Form.Item
          name="category_id"
          label="Category"
          rules={[{ required: true, message: 'Please choose category!' }]}
        >
          <Select placeholder="Choose category">
            {categoryData.map((item) => (
              <Option key={item.id} value={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="type"
          label="Type"
          rules={[{ required: true, message: 'Please choose type!' }]}
        >
          <Select placeholder="Choose type">
            <Option key="1" value="ddr4">
              DDR4
            </Option>

            <Option key="2" value="ddr5">
              DDR5
            </Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AdminRamsModal;
