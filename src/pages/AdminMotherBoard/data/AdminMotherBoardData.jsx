import React from 'react';
import { Table, Card, Typography, Button, Popconfirm } from 'antd';
import {
  DeleteOutlined,
  DesktopOutlined,
  EditOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

const AdminMotherBoardData = ({
  motherboardsData,
  openEditModal,
  handleDelete,
}) => {
  // Define columns for the Ant Design Table
  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      key: 'id',
      render: (text, record, index) => index + 1, // Display row number
    },

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
      title: 'Socket',
      dataIndex: 'soket',
      key: 'soket',
      render: (soket) => `${soket}`, // Display as "Socket X"
      sorter: (a, b) => a.soket - b.soket,
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
          <DesktopOutlined style={{ marginRight: 8 }} />
          Motherboard Inventory
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
        dataSource={motherboardsData}
        rowKey="id" // Unique key for each row
        bordered
        size="middle" // Compact table size
      />
    </Card>
  );
};

export default AdminMotherBoardData;
