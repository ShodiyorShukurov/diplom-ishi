import React from 'react';
import Admin from '../../components/Admin';
import useAdminCategory from '../../hooks/useAdminCategory';
import { Button } from 'antd';
import AdminProductData from './data/AdminProductData';
import AdminProductModal from './components/AdminProductModal';
import useAdminProduct from '../../hooks/useAdminProduct';

const AdminProductPage = () => {
  const {
    isModal,
    setIsModal,
    productData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminProduct,
    setSelectedItem
  } = useAdminProduct();

  return (
    <Admin>
      <Button color="primary" variant="solid" onClick={() => setIsModal(true)}>
        Product qo'shish
      </Button>

      <AdminProductData
        productData={productData}
        handleDelete={handleDelete}
        openEditModal={openEditModal}
      />
      <AdminProductModal
        isModal={isModal}
        setIsModal={setIsModal}
        selectedItem={selectedItem}
        getAdminProduct={getAdminProduct}
        setSelectedItem={setSelectedItem}
      />
    </Admin>
  );
};

export default AdminProductPage;
