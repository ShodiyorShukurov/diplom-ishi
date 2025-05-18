import React from 'react';
import Api from '../api';
import { message } from 'antd';

const useAdminRams = () => {
  const [ramsData, setRamsData] = React.useState([]);
  const [isModal, setIsModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const getAdminRams = async () => {
    try {
      const res = await Api.get('/rams/');
      setRamsData(res.data);
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
      await Api.delete('/rams/' + id + '/');
      getAdminRams();
      message.success('Success delete');
    } catch (error) {
      console.log(error);
      message.error('error');
    }
  };

  React.useEffect(() => {
    getAdminRams();
  }, []);

  return {
    isModal,
    setIsModal,
    ramsData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminRams,
    setSelectedItem,
  };
};

export default useAdminRams;
