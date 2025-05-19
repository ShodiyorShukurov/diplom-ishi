import Admin from '../../components/Admin';
import AdminCategoryModal from './components/AdminCategoryModal';
import { Button } from 'antd';
import AdminCategoryProductData from './data/AdminCategoryProductData';
import useAdminCategoryProduct from '../../hooks/useAdminCategoryProduct';

const AdminCategoryProductPage = () => {
  const {
    isModal,
    setIsModal,
    categoryProductData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminProductCategory,
    setSelectedItem,
  } = useAdminCategoryProduct();

  return (
    <Admin>
      <Button color="primary" onClick={() => setIsModal(true)}>
        Create Category
      </Button>

      <AdminCategoryProductData
        categoryProductData={categoryProductData}
        handleDelete={handleDelete}
        openEditModal={openEditModal}
      />
      <AdminCategoryModal
        isModal={isModal}
        setIsModal={setIsModal}
        selectedItem={selectedItem}
        getAdminProductCategory={getAdminProductCategory}
        setSelectedItem={setSelectedItem}
      />
    </Admin>
  );
};

export default AdminCategoryProductPage;
