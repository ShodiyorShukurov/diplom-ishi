import Admin from '../../components/Admin';
import { Button } from 'antd';
import AdminMonitorsModal from './components/AdminMonitorsModal';
import AdminMonitorsData from './data/AdminMonitorsData';
import useAdminMonitors from '../../hooks/useAdminMonitors';

const AdminMonitorsPage = () => {
  const {
    isModal,
    setIsModal,
    monitorsData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminMonitors,
    setSelectedItem,
  } = useAdminMonitors();
  return (
    <Admin>
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Monitors Dashboard
      </h1>
      <Button type="primary" onClick={() => setIsModal(true)} className="mb-4">
        <span className="flex items-center gap-2">Add Monitors</span>
      </Button>

      <AdminMonitorsData
        monitorsData={monitorsData}
        handleDelete={handleDelete}
        openEditModal={openEditModal}
      />

      <AdminMonitorsModal
        isModal={isModal}
        setIsModal={setIsModal}
        selectedItem={selectedItem}
        getAdminMonitors={getAdminMonitors}
        setSelectedItem={setSelectedItem}
      />
    </Admin>
  );
};

export default AdminMonitorsPage;
