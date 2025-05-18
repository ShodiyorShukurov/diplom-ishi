import { Table, Tag, Button, Popconfirm, Card, Typography } from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  DesktopOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

const AdminMonitorsData = ({ monitorsData, openEditModal, handleDelete }) => {
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
      title: 'Pixel',
      dataIndex: 'pixel',
      key: 'pixel',
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
          Monitor Inventory
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
        dataSource={monitorsData}
        rowKey="id"
        pagination={null}
        bordered
        size="middle"
        scroll={{ x: true }}
      />
    </Card>
  );
};

export default AdminMonitorsData;
