import Admin from '../../components/Admin';
import useAdminMotherBoard from '../../hooks/useAdminMotherBoard';
import { Button } from 'antd';
import { DesktopOutlined } from '@ant-design/icons';
import AdminMotherBoardData from './data/AdminMotherBoardData';
import AdminMotherBoardModal from './components/AdminMotherBoardModal';

const AdminMotherBoard = () => {
  const {
    isModal,
    setIsModal,
    motherboardsData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminMotherboards,
    setSelectedItem,
  } = useAdminMotherBoard();
  return (
    <Admin>
      <Button type="primary" onClick={() => setIsModal(true)} className="mb-4">
        <span className="flex items-center gap-2">
          <DesktopOutlined />
          Add Motherboard
        </span>
      </Button>

      <AdminMotherBoardData
        motherboardsData={motherboardsData}
        handleDelete={handleDelete}
        openEditModal={openEditModal}
      />

      <AdminMotherBoardModal
        isModal={isModal}
        setIsModal={setIsModal}
        selectedItem={selectedItem}
        getAdminMotherboards={getAdminMotherboards}
        setSelectedItem={setSelectedItem}
      />
    </Admin>
  );
};

export default AdminMotherBoard;
