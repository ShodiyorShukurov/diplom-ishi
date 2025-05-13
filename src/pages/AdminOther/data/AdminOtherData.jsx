import React from 'react';
import { Table, Card, Typography, Tag, Button, Popconfirm } from 'antd';
import {
  DatabaseOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

const AdminOtherData = ({ otherData, openEditModal, handleDelete }) => {
  // Define columns for the Ant Design Table
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name), // Enable sorting
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `$${parseFloat(price).toFixed(2)}`, // Format price with 2 decimal places
      sorter: (a, b) => parseFloat(a.price) - parseFloat(b.price), // Sort as numbers
    },
    {
      title: 'Power (W)',
      dataIndex: 'power',
      key: 'power',
      sorter: (a, b) => a.power - b.power,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type) => (
        <Tag
          color={type === 'ssd' ? 'blue' : type === 'hdd' ? 'green' : 'purple'}
        >
          {type.toUpperCase()}
        </Tag>
      ), // Display type as a colored tag
      sorter: (a, b) => a.type.localeCompare(b.type),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category) => `${category}`,
      sorter: (a, b) => a.category - b.category,
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
    <Card
      title={
        <Title level={4}>
          <DatabaseOutlined style={{ marginRight: 8 }} />
          Other Components Inventory
        </Title>
      }
      style={{
        margin: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Table
        columns={columns}
        dataSource={otherData}
        rowKey="id" // Unique key for each row
        bordered
        size="middle" // Compact table size
      />
    </Card>
  );
};

export default AdminOtherData;
