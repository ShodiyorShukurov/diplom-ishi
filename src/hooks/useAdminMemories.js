import React from 'react';
import Api from '../api';
import { message } from 'antd';

const useAdminMemories = () => {
  const [memoriesData, setMemoriesData] = React.useState([]);
  const [isModal, setIsModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const getAdminMemories = async () => {
    try {
      const res = await Api.get('/memories/');
      setMemoriesData(res.data);
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
      await Api.delete('/memories/' + id + '/');
      getAdminMemories();
      message.success('Success delete');
    } catch (error) {
      console.log(error);
      message.error('error');
    }
  };

  React.useEffect(() => {
    getAdminMemories();
  }, []);

  return {
    isModal,
    setIsModal,
    memoriesData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminMemories,
    setSelectedItem,
  };
};

export default useAdminMemories;
