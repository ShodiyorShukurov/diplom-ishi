import React, { useState } from 'react';
import {
  Modal,
  Form,
  Input,
  Button,
  message,
  InputNumber,
  Select,
  Upload,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Api from '../../../api';
import useAdminCategory from '../../../hooks/useAdminCategory';
import useAdminCategoryProduct from '../../../hooks/useAdminCategoryProduct';

const { Option } = Select;

const AdminProductModal = ({
  isModal,
  setIsModal,
  selectedItem,
  getAdminProduct,
  setSelectedItem,
}) => {
  const [form] = Form.useForm();
  const { categoryProductData } = useAdminCategoryProduct();
  const [fileList, setFileList] = useState([]);

  React.useEffect(() => {
    if (isModal && selectedItem) {
      form.setFieldsValue({
        name: selectedItem.name || '',
        text: selectedItem.text || '',
        price: selectedItem.price || '',
        category_id: selectedItem.category || '',
      });
     
      if (selectedItem.image) {
        setFileList([
          {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: selectedItem.image,
          },
        ]);
      }
    }
  }, [isModal, selectedItem, form]);

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        onFinish(values);
      })
      .catch((info) => {
        console.log('Validation Failed:', info);
      });
  };

  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('price', values.price);
    formData.append('text', values.text || '');
    formData.append('category', values.category_id);
    if (fileList.length && fileList[0].originFileObj) {
      formData.append('image', fileList[0].originFileObj);
    }

    try {
      if (selectedItem && selectedItem.id) {
        const res = await Api.patch(
          '/product/' + selectedItem.id + '/',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        if (res.data) {
          message.success('Product updated successfully!');
          getAdminProduct();
          setIsModal(false);
          form.resetFields();
          setFileList([]);
          setSelectedItem(null);
        }
      } else {
        const res = await Api.post(
          '/product/',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        if (res.data) {
          message.success('Product created successfully!');
          getAdminProduct();
          setIsModal(false);
          form.resetFields();
          setFileList([]);
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
          name="text"
          label="Text"
          rules={[{ required: true, message: 'Please enter Text!' }]}
        >
          <Input placeholder="Enter text here" />
        </Form.Item>

        <Form.Item
          name="category_id"
          label="Category"
          rules={[{ required: true, message: 'Please choose category!' }]}
        >
          <Select placeholder="Choose category">
            {categoryProductData.map((item) => (
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
          <InputNumber placeholder="Enter price here" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item label="Image">
          <Upload
            beforeUpload={() => false}
            fileList={fileList}
            onChange={({ fileList }) => setFileList(fileList)}
            accept="image/*"
            maxCount={1}
            listType="picture"
          >
            <Button icon={<UploadOutlined />}>Upload Image</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AdminProductModal;
