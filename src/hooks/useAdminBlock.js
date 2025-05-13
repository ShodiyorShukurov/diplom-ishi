import React from 'react';
import Api from '../api';
import { message } from 'antd';

const useAdminBlock = () => {
  const [blockData, setBlockData] = React.useState([]);
  const [isModal, setIsModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const getAdminBlock = async () => {
    try {
      const res = await Api.get('/powerunits/');
      setBlockData(res.data);
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
      await Api.delete('/powerunits/' + id + '/');
      getAdminBlock();
      message.success('Success delete');
    } catch (error) {
      console.log(error);
      message.error('error');
    }
  };

  React.useEffect(() => {
    getAdminBlock();
  }, []);

  return {
    isModal,
    setIsModal,
    blockData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminBlock,
    setSelectedItem,
  };
};

export default useAdminBlock;
