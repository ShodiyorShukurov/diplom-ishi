import Admin from '../../components/Admin';
import { Button } from 'antd';
import AdminMemoriesModal from './components/AdminMemoriesModal';
import useAdminMemories from '../../hooks/useAdminMemories';
import AdminMemoriesData from './data/AdminMemoriesData';

const AdminMemoriesPage = () => {
  const {
       isModal,
    setIsModal,
    memoriesData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminMemories,
    setSelectedItem,
  } = useAdminMemories();
  return (
    <Admin>
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Keys Dashboard
      </h1>
      <Button type="primary" onClick={() => setIsModal(true)} className="mb-4">
        <span className="flex items-center gap-2">Add Memories</span>
      </Button>

      <AdminMemoriesData
        memoriesData={memoriesData}
        handleDelete={handleDelete}
        openEditModal={openEditModal}
      />

      <AdminMemoriesModal
        isModal={isModal}
        setIsModal={setIsModal}
        selectedItem={selectedItem}
        getAdminMemories={getAdminMemories}
        setSelectedItem={setSelectedItem}
      />
    </Admin>
  );
};

export default AdminMemoriesPage;
