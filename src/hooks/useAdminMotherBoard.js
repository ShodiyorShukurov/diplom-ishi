import React from 'react';
import Api from '../api';
import { message } from 'antd';

const useAdminMotherBoard = () => {
  const [motherboardsData, setMotherboardsData] = React.useState([]);
  const [isModal, setIsModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const getAdminMotherboards = async () => {
    try {
      const res = await Api.get('/motherboards/');
      setMotherboardsData(res.data);
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
      await Api.delete('/motherboards/' + id + '/');
      getAdminMotherboards();
      message.success('Success delete');
    } catch (error) {
      console.log(error);
      message.error('error');
    }
  };

  React.useEffect(() => {
    getAdminMotherboards();
  }, []);

  return {
    isModal,
    setIsModal,
    motherboardsData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminMotherboards,
    setSelectedItem,
  };
};

export default useAdminMotherBoard;
