import React from 'react';
import Admin from '../../components/Admin';
import useAdminSockets from '../../hooks/useAdminSockets';
import AdminSocketData from './data/AdminSocketData';
import { Button } from 'antd';
import { ApiOutlined } from '@ant-design/icons';
import AdminSocketModal from './components/AdminSocketModal';

const AdminSocketPage = () => {
  const {
    isModal,
    setIsModal,
    soketData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminSokets,
    setSelectedItem,
  } = useAdminSockets();

  return (
    <Admin>
      <Button type="primary" onClick={() => setIsModal(true)} className="mb-4">
        <span className="flex items-center gap-2">
          <ApiOutlined />
          Add Socket
        </span>
      </Button>

      <AdminSocketData
        soketData={soketData}
        handleDelete={handleDelete}
        openEditModal={openEditModal}
      />

      <AdminSocketModal
        isModal={isModal}
        setIsModal={setIsModal}
        selectedItem={selectedItem}
        getAdminSokets={getAdminSokets}
        setSelectedItem={setSelectedItem}
        />
    </Admin>
  );
};

export default AdminSocketPage;
