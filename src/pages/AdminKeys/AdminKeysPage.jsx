import Admin from '../../components/Admin';
import { Button } from 'antd';
import useCollers from '../../hooks/useCollers';
import AdminKeysData from './data/AdminKeysData';
import AdminKeysModal from './components/AdminKeysModal';
import useAdminKeys from '../../hooks/useAdminKeys';

const AdminKeysPage = () => {
  const {
    isModal,
    setIsModal,
    keysData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminKeys,
    setSelectedItem,
  } = useAdminKeys();
  return (
    <Admin>
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Keys Dashboard
      </h1>
      <Button type="primary" onClick={() => setIsModal(true)} className="mb-4">
        <span className="flex items-center gap-2">Add Keys</span>
      </Button>

      <AdminKeysData
        keysData={keysData}
        handleDelete={handleDelete}
        openEditModal={openEditModal}
      />

      <AdminKeysModal
        isModal={isModal}
        setIsModal={setIsModal}
        selectedItem={selectedItem}
        getAdminKeys={getAdminKeys}
        setSelectedItem={setSelectedItem}
      />
    </Admin>
  );
};

export default AdminKeysPage;
