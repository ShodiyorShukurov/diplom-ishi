import React from 'react';
import Api from '../api';
import { message } from 'antd';

const useAdminCategoryProduct = () => {
  const [categoryProductData, setCategoryProductData] = React.useState([]);
  const [isModal, setIsModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const getAdminProductCategory = async () => {
    try {
      const res = await Api.get('/category-product/');
      setCategoryProductData(res.data);
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
      await Api.delete('/category-product/' + id + '/');
      getAdminProductCategory();
      message.success('Success delete');
    } catch (error) {
      console.log(error);
      message.error('error');
    }
  };

  React.useEffect(() => {
    getAdminProductCategory();
  }, []);

  return {
    isModal,
    setIsModal,
    categoryProductData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminProductCategory,
    setSelectedItem
  };
};

export default useAdminCategoryProduct;
