import Admin from '../../components/Admin';
import { Button } from 'antd';
import useCollers from '../../hooks/useCollers';
import AdminCollersData from './data/AdminCollersData';
import AdminCollersModal from './components/AdminCollersModal';

const AdminCollersPage = () => {
  const {
    isModal,
    setIsModal,
    collersData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminCollers,
    setSelectedItem,
  } = useCollers();
  return (
    <Admin>
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Collers Dashboard
      </h1>
      <Button type="primary" onClick={() => setIsModal(true)} className="mb-4">
        <span className="flex items-center gap-2">Add Collers</span>
      </Button>

      <AdminCollersData
        collersData={collersData}
        handleDelete={handleDelete}
        openEditModal={openEditModal}
      />

      <AdminCollersModal
        isModal={isModal}
        setIsModal={setIsModal}
        selectedItem={selectedItem}
        getAdminCollers={getAdminCollers}
        setSelectedItem={setSelectedItem}
      />
    </Admin>
  );
};

export default AdminCollersPage;
