import Admin from '../../components/Admin';
import { AppstoreOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import AdminAccessorsData from './data/AdminAccessorsData';
import AdminWifiModal from './components/AdminWifiModal';
import useAdminWifi from '../../hooks/useAdminWifi';

const AdminWifiPage = () => {
  const {
    isModal,
    setIsModal,
    wifiData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminWifi,
    setSelectedItem,
  } = useAdminWifi();
  return (
    <Admin>
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Accessories Dashboard
      </h1>
      <Button type="primary" onClick={() => setIsModal(true)} className="mb-4">
        <AppstoreOutlined />
        <span className="flex items-center gap-2">Add wifi</span>
      </Button>

      <AdminAccessorsData
        wifiData={wifiData}
        handleDelete={handleDelete}
        openEditModal={openEditModal}
      />

      <AdminWifiModal
        isModal={isModal}
        setIsModal={setIsModal}
        selectedItem={selectedItem}
        getAdminWifi={getAdminWifi}
        setSelectedItem={setSelectedItem}
      />
    </Admin>
  );
};

export default AdminWifiPage;
