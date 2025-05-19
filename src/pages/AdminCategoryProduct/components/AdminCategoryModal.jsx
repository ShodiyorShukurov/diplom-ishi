import React, { useState } from 'react';
import { Modal, Form, Input, Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Api from '../../../api';

const AdminCategoryModal = ({
  isModal,
  setIsModal,
  selectedItem,
  getAdminProductCategory,
  setSelectedItem
}) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

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
      })
      .catch((info) => {
        console.log('Validation Failed:', info);
      });
  };

  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append('name', values.name);

    if (fileList.length > 0) {
      formData.append('image', fileList[0].originFileObj);
    }

    try {
      if (selectedItem && selectedItem.id) {
        const res = await Api.patch(
          '/category-product/' + selectedItem.id + '/',
          formData,
  
        );

        if (res.data) {
          message.success('Form updated successfully!');
          getAdminProductCategory();
          setIsModal(false);
          form.resetFields();
          setFileList([]);
          setSelectedItem(null);
        }
      } else {
        const res = await Api.post('/category-product/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (res.data) {
          message.success('Form created successfully!');
          getAdminProductCategory();
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
      title="Category Form"
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

        <Form.Item label="Category Image">
          <Upload
            beforeUpload={() => false} // prevent auto upload
            fileList={fileList}
            onChange={({ fileList }) => setFileList(fileList)}
            accept="image/*"
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Upload Image</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AdminCategoryModal;
