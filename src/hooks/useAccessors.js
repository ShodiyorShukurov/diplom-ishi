import React from 'react';
import Api from '../api';
import { message } from 'antd';

const useAccessors = () => {
  const [accessorsData, setAccessorsData] = React.useState([]);
  const [isModal, setIsModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const getAdminAccessors = async () => {
    try {
      const res = await Api.get('/accessors/');
      setAccessorsData(res.data);
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
      await Api.delete('/accessors/' + id + '/');
      getAdminAccessors();
      message.success('Success delete');
    } catch (error) {
      console.log(error);
      message.error('error');
    }
  };

  React.useEffect(() => {
    getAdminAccessors();
  }, []);

  return {
    isModal,
    setIsModal,
    accessorsData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminAccessors,
    setSelectedItem,
  };
};

export default useAccessors;
