import React from 'react';
import Api from '../api';
import { message } from 'antd';

const useAdminOther = () => {
  const [otherData, setOtherData] = React.useState([]);
  const [isModal, setIsModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const getAdminOther = async () => {
    try {
      const res = await Api.get('/others/');
      setOtherData(res.data);
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
      await Api.delete('/others/' + id + '/');
      getAdminOther();
      message.success('Success delete');
    } catch (error) {
      console.log(error);
      message.error('error');
    }
  };

  React.useEffect(() => {
    getAdminOther();
  }, []);

  return {
    isModal,
    setIsModal,
    otherData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminOther,
    setSelectedItem,
  };
};

export default useAdminOther;
