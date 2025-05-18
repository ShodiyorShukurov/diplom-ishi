import Admin from '../../components/Admin';
import { Button } from 'antd';
import AdminRamsData from './data/AdminRamsData';
import AdminRamsModal from './components/AdminRamsModal';
import useAdminRams from '../../hooks/useAdminRams';

const AdminRamsPage = () => {
  const {
    isModal,
    setIsModal,
    ramsData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminRams,
    setSelectedItem,
  } = useAdminRams();
  return (
    <Admin>
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Rams Dashboard
      </h1>
      <Button type="primary" onClick={() => setIsModal(true)} className="mb-4">
        <span className="flex items-center gap-2">Add Rams</span>
      </Button>

      <AdminRamsData
        ramsData={ramsData}
        handleDelete={handleDelete}
        openEditModal={openEditModal}
      />

      <AdminRamsModal
        isModal={isModal}
        setIsModal={setIsModal}
        selectedItem={selectedItem}
        getAdminRams={getAdminRams}
        setSelectedItem={setSelectedItem}
      />
    </Admin>
  );
};

export default AdminRamsPage;
