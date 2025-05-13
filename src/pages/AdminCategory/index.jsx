import React from 'react';
import Admin from '../../components/Admin';
import useAdminCategory from '../../hooks/useAdminCategory';
import AdminCategoryModal from './components/AdminCategoryModal';
import { Button } from 'antd';
import AdminCategoryData from './data/AdminCategoryData';

const AdminCategoryPage = () => {
  const {
    isModal,
    setIsModal,
    categoryData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminCategory,
    setSelectedItem
  } = useAdminCategory();

  return (
    <Admin>
      <AdminCategoryData
        categoryData={categoryData}
        handleDelete={handleDelete}
        openEditModal={openEditModal}
      />
      <AdminCategoryModal
        isModal={isModal}
        setIsModal={setIsModal}
        selectedItem={selectedItem}
        getAdminCategory={getAdminCategory}
        setSelectedItem={setSelectedItem}
      />
    </Admin>
  );
};

export default AdminCategoryPage;
