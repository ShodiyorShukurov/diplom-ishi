import Admin from '../../components/Admin';
import { Button } from 'antd';
import AdminGpusData from './data/AdminGpusData';
import useAdminGpu from '../../hooks/useAdminGpu';
import AdminGpusModal from './components/AdminGpusModal';

const AdminGpusPage = () => {
  const {
   isModal,
    setIsModal,
    gpuData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminGpu,
    setSelectedItem,
  } = useAdminGpu();
  return (
    <Admin>
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Gpu Dashboard
      </h1>
      <Button type="primary" onClick={() => setIsModal(true)} className="mb-4">
        <span className="flex items-center gap-2">Add Gpu</span>
      </Button>

      <AdminGpusData
        gpuData={gpuData}
        handleDelete={handleDelete}
        openEditModal={openEditModal}
      />

      <AdminGpusModal
        isModal={isModal}
        setIsModal={setIsModal}
        selectedItem={selectedItem}
        getAdminGpu={getAdminGpu}
        setSelectedItem={setSelectedItem}
      />
    </Admin>
  );
};

export default AdminGpusPage;
