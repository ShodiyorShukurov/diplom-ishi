import { Table, Tag, Button, Popconfirm, Card, Typography } from 'antd';
import { DeleteOutlined, EditOutlined, AppstoreOutlined } from '@ant-design/icons';

const { Title } = Typography;

const AdminAccessorsData = ({ accessorsData, openEditModal, handleDelete }) => {
  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      key: 'id',
      render: (_, __, index) => (
        <span className="font-medium text-gray-700">{index + 1}</span>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <span className="text-blue-600 font-semibold">{text}</span>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text) => (
        <Tag color="green" className="text-sm">
          ${text}
        </Tag>
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
   <Card
      title={
        <Title level={4}>
          <AppstoreOutlined style={{ marginRight: 8 }} />
          Accessories Inventory
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
        dataSource={accessorsData}
        rowKey="id" // Unique key for each row
        pagination={null} // Add pagination (5 items per page)
        bordered
        size="middle" // Compact table size
        scroll={{ x: true }} // Enable horizontal scroll for small screens
      />
    </Card>
  );
};

export default AdminAccessorsData;
