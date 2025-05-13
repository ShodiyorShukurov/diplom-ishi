import React from 'react';
import Admin from '../../components/Admin';
import useAdminCpu from '../../hooks/useAdminCpu';
import AdminCpuData from './data/AdminCpuData';
import AdminCpuModal from './components/AdminCpuModal';
import { Button } from 'antd';
import { ThunderboltOutlined } from '@ant-design/icons';

const AdminCpuPage = () => {
  const {
    isModal,
    setIsModal,
    cpuData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminCpu,
    setSelectedItem,
  } = useAdminCpu();
  return (
    <Admin>
      <Button type="primary" onClick={() => setIsModal(true)} className="mb-4">
        <span className="flex items-center gap-2">
          <ThunderboltOutlined />
          Add CPU
        </span>
      </Button>

      <AdminCpuData
        cpuData={cpuData}
        handleDelete={handleDelete}
        openEditModal={openEditModal}
      />
      
      <AdminCpuModal
        isModal={isModal}
        setIsModal={setIsModal}
        selectedItem={selectedItem}
        getAdminCpu={getAdminCpu}
        setSelectedItem={setSelectedItem}
      />
    </Admin>
  );
};

export default AdminCpuPage;
