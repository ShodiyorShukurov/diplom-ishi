import Admin from '../../components/Admin';
import useAdminBlock from '../../hooks/useAdminBlock';
import AdminBlockData from './data/AdminBlockData';
import { PoweroffOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import AdminBlockModal from './components/AdminBlockModal';

const AdminBlockPage = () => {
  const {
    isModal,
    setIsModal,
    blockData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminBlock,
    setSelectedItem,
  } = useAdminBlock();
  return (
    <Admin>
      <Button type="primary" onClick={() => setIsModal(true)} className="mb-4">
        <span className="flex items-center gap-2">
          <PoweroffOutlined />
          Add Block
        </span>
      </Button>

      <AdminBlockData
        blockData={blockData}
        handleDelete={handleDelete}
        openEditModal={openEditModal}
      />

      <AdminBlockModal
        isModal={isModal}
        setIsModal={setIsModal}
        selectedItem={selectedItem}
        getAdminBlock={getAdminBlock}
        setSelectedItem={setSelectedItem}
        />
    </Admin>
  );
};

export default AdminBlockPage;
