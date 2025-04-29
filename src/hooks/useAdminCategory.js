import React from 'react';
import Api from '../api';
import { message } from 'antd';

const useAdminCategory = () => {
  const [categoryData, setCategoryData] = React.useState([]);
  const [isModal, setIsModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const getAdminCategory = async () => {
    try {
      const res = await Api.get('/all-categories/');
      setCategoryData(res.data);
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
      await Api.delete('/delete-category/' + id + '/');
      getAdminCategory();
      message.success('Success delete');
    } catch (error) {
      console.log(error);
      message.error('error');
    }
  };

  React.useEffect(() => {
    getAdminCategory();
  }, []);

  return {
    isModal,
    setIsModal,
    categoryData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminCategory,
    setSelectedItem
  };
};

export default useAdminCategory;
