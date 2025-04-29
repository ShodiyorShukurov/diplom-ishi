import React from 'react';
import Api from '../api';
import { message } from 'antd';

const useAdminProduct = () => {
  const [productData, setProductData] = React.useState([]);
  const [isModal, setIsModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const getAdminProduct = async () => {
    try {
      const res = await Api.get('/all-products/');
      setProductData(res.data);
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
      await Api.delete('/delete-product/' + id + '/');
      getAdminProduct();
      message.success('Success delete');
    } catch (error) {
      console.log(error);
      message.error('error');
    }
  };

  React.useEffect(() => {
    getAdminProduct();
  }, []);

  return {
    isModal,
    setIsModal,
    productData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminProduct,
    setSelectedItem,
  };
};

export default useAdminProduct;
