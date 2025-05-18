import React from 'react';
import Api from '../api';
import { message } from 'antd';

const useAdminGpu = () => {
  const [gpuData, setGpuData] = React.useState([]);
  const [isModal, setIsModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const getAdminGpu = async () => {
    try {
      const res = await Api.get('/gpus/');
      setGpuData(res.data);
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
      await Api.delete('/gpus/' + id + '/');
      getAdminGpu();
      message.success('Success delete');
    } catch (error) {
      console.log(error);
      message.error('error');
    }
  };

  React.useEffect(() => {
    getAdminGpu();
  }, []);

  return {
    isModal,
    setIsModal,
    gpuData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminGpu,
    setSelectedItem,
  };
};

export default useAdminGpu;
