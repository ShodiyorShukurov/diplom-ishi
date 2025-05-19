import React from 'react';
import { Button, Popconfirm, Table, Image } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const AdminCategoryProductData = ({ categoryProductData, handleDelete, openEditModal }) => {
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
      title: "Image",
      dataIndex: "image",
      key: "image",
      align: "center",
      render: (text) => (
        <Image
          src={text}
          style={{ width: "50px", height: "50px", borderRadius: "5px" }}
        />
      ),
      
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
      dataSource={categoryProductData}
      key={'1'}
      pagination={false}
    />
  );
};
export default AdminCategoryProductData;
