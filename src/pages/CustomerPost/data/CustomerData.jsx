import React from 'react';
import { Button, Popconfirm, Table } from 'antd';
import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const CustomerData = ({ customerData, openEditModal, handleDelete }) => {
  const navigate = useNavigate();
  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    {
      title: 'Text',
      dataIndex: 'text',
      key: 'text',
      align: 'center',
    },
    {
      title: 'Phone number',
      dataIndex: 'phone_number',
      key: 'phone_number',
      align: 'center',
      render: (phone_number) => (
        <a href={'tel:' + phone_number}>{phone_number}</a>
      ),
    },
    {
      title: 'Price',
      key: 'price',
      dataIndex: 'price',
      align: 'center',
      render: (price)=>(
        <p>${price}</p>
      )
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

          <Button
            color="primary"
            variant="link"
            onClick={() => navigate('/customer/' + record.id)}
          >
            <MoreOutlined />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Table
      className="mt-6"
      columns={columns}
      dataSource={customerData}
      key={'1'}
      pagination={false}
    />
  );
};
export default CustomerData;
