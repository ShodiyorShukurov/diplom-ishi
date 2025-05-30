import React from 'react';
import { Button, Popconfirm, Table, Image } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const AdminProductData = ({ productData, handleDelete, openEditModal }) => {
  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: 'Price',
      key: 'price',
      dataIndex: 'price',
      align: 'center',
      render: (price) => <p>${price}</p>,
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      align: 'center',
      render: (text) => (
        <Image
          src={text}
          alt="product"
          style={{ width: '50px', height: '50px', borderRadius: '5px' }}
        />
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      align: 'center',
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      render: (_, record) => (
        <div className="flex gap-4 items-center justify-center">
          <Button
            color="primary"
            variant="solid"
            onClick={() => openEditModal(record)}
          >
            <EditOutlined />
          </Button>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button color="danger" variant="solid">
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <Table
      className="mt-6"
      columns={columns}
      dataSource={productData}
      key={'1'}
      pagination={false}
    />
  );
};
export default AdminProductData;
