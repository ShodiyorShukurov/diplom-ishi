import React from 'react';
import Api from '../api';
import { message } from 'antd';

const useCollers = () => {
  const [collersData, setCollersData] = React.useState([]);
  const [isModal, setIsModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const getAdminCollers = async () => {
    try {
      const res = await Api.get('/collers/');
      setCollersData(res.data);
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
      await Api.delete('/collers/' + id + '/');
      getAdminCollers();
      message.success('Success delete');
    } catch (error) {
      console.log(error);
      message.error('error');
    }
  };

  React.useEffect(() => {
    getAdminCollers();
  }, []);

  return {
    isModal,
    setIsModal,
    collersData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminCollers,
    setSelectedItem,
  };
};

export default useCollers;
