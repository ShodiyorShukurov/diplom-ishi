import React from 'react';
import { Modal, Form, Input, Button, message, InputNumber, Select, } from 'antd';
import Api from '../../../api';
import useAdminCategory from '../../../hooks/useAdminCategory';


const { Option } = Select;

const AdminCollersModal = ({
  isModal,
  setIsModal,
  selectedItem,
  getAdminCollers,
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
    };
    try {
      if (selectedItem && selectedItem.id) {
        fullData.category = values.category_id;
        const res = await Api.put('/collers/' + selectedItem.id + '/', fullData);

        if (res.data) {
          message.success('Form submitted successfully!');
          getAdminCollers();
          setIsModal(false);
          form.resetFields();
          setSelectedItem(null);
        }
      } else {
        const res = await Api.post(
          '/collers/',
          fullData
        );
        if (res.data) {
          message.success('Form submitted successfully!');
          getAdminCollers();
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

      </Form>
    </Modal>
  );
};

export default AdminCollersModal;
