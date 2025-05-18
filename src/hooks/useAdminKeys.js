import React from 'react';
import Api from '../api';
import { message } from 'antd';

const useAdminKeys = () => {
  const [keysData, setKeysData] = React.useState([]);
  const [isModal, setIsModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const getAdminKeys = async () => {
    try {
      const res = await Api.get('/keys/');
      setKeysData(res.data);
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
      await Api.delete('/keys/' + id + '/');
      getAdminKeys();
      message.success('Success delete');
    } catch (error) {
      console.log(error);
      message.error('error');
    }
  };

  React.useEffect(() => {
    getAdminKeys();
  }, []);

  return {
    isModal,
    setIsModal,
    keysData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminKeys,
    setSelectedItem,
  };
};

export default useAdminKeys;
