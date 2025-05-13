import React from 'react';
import Api from '../api';
import { message } from 'antd';

const useAdminCpu = () => {
  const [cpuData, setCpuData] = React.useState([]);
  const [isModal, setIsModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const getAdminCpu = async () => {
    try {
      const res = await Api.get('/cpus/');
      setCpuData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const openEditModal = (item) => {
    setSelectedItem(item);
    setIsModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await Api.delete('/cpus/' + id + '/');
      getAdminCpu();
      message.success('Success delete');
    } catch (error) {
      console.log(error);
      message.error('error');
    }
  };

  React.useEffect(() => {
    getAdminCpu();
  }, []);

  return {
    isModal,
    setIsModal,
    cpuData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminCpu,
    setSelectedItem,
  };
};

export default useAdminCpu;
