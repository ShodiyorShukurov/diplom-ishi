import React from 'react';
import Api from '../api';
import { message } from 'antd';

const useAdminMonitors = () => {
  const [monitorsData, setMonitorsData] = React.useState([]);
  const [isModal, setIsModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const getAdminMonitors = async () => {
    try {
      const res = await Api.get('/monitors/');
      setMonitorsData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const openEditModal = (item) => {
    setSelectedItem(item);
    setIsModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await Api.delete('/monitors/' + id + '/');
      getAdminMonitors();
      message.success('Success delete');
    } catch (error) {
      console.log(error);
      message.error('error');
    }
  };

  React.useEffect(() => {
    getAdminMonitors();
  }, []);

  return {
    isModal,
    setIsModal,
    monitorsData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminMonitors,
    setSelectedItem,
  };
};

export default useAdminMonitors;
