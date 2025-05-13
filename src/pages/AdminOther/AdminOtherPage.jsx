import Admin from '../../components/Admin';
import useAdminOther from '../../hooks/useAdminOther';
import AdminOtherData from './data/AdminOtherData';
import AdminOtherModal from './components/AdminOtherModal';
import { Button } from 'antd';
import { DatabaseOutlined } from '@ant-design/icons';

const AdminOtherPage = () => {
  const {
    isModal,
    setIsModal,
    otherData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminOther,
    setSelectedItem,
  } = useAdminOther();
  return (
    <Admin>
     <Button type="primary" onClick={() => setIsModal(true)} className="mb-4">
        <span className="flex items-center gap-2">
          <DatabaseOutlined />
          Add Other
        </span>
      </Button>

      <AdminOtherData
        otherData={otherData}
        handleDelete={handleDelete}
        openEditModal={openEditModal}
      />

      <AdminOtherModal
        isModal={isModal}
        setIsModal={setIsModal}
        selectedItem={selectedItem}
        getAdminOther={getAdminOther}
        setSelectedItem={setSelectedItem}
      />
    </Admin>
  );
};

export default AdminOtherPage;
