import Admin from '../../components/Admin';
import { AppstoreOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import useAccessors from '../../hooks/useAccessors';
import AdminAccessorsData from './data/AdminAccessorsData';
import AdminAccessorsModal from './components/AdminAccessorsModal';

const AdminAccessorsPage = () => {
  const {
    isModal,
    setIsModal,
    accessorsData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminAccessors,
    setSelectedItem,
  } = useAccessors();
  return (
    <Admin>
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Accessories Dashboard
      </h1>
      <Button type="primary" onClick={() => setIsModal(true)} className="mb-4">
        <AppstoreOutlined/>
        <span className="flex items-center gap-2">Add Accessories</span>
      </Button>

      <AdminAccessorsData
        accessorsData={accessorsData}
        handleDelete={handleDelete}
        openEditModal={openEditModal}
      />

      <AdminAccessorsModal
        isModal={isModal}
        setIsModal={setIsModal}
        selectedItem={selectedItem}
        getAdminAccessors={getAdminAccessors}
        setSelectedItem={setSelectedItem}
      />
    </Admin>
  );
};

export default AdminAccessorsPage;
