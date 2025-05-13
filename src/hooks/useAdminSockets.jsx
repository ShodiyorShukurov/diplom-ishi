import React from 'react';
import Api from '../api';
import { message } from 'antd';

const useAdminSokets = () => {
  const [soketData, setSoketData] = React.useState([]);
  const [isModal, setIsModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const getAdminSokets = async () => {
    try {
      const res = await Api.get('/sokets/');
      setSoketData(res.data);
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
      await Api.delete('/sokets/' + id + '/');
      getAdminSokets();
      message.success('Success delete');
    } catch (error) {
      console.log(error);
      message.error('error');
    }
  };

  React.useEffect(() => {
    getAdminSokets();
  }, []);

  return {
    isModal,
    setIsModal,
    soketData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminSokets,
    setSelectedItem,
  };
};

export default useAdminSokets;
