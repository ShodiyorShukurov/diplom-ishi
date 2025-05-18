import React from 'react';
import Api from '../api';
import { message } from 'antd';

const useAdminWifi = () => {
  const [wifiData, setWifiData] = React.useState([]);
  const [isModal, setIsModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const getAdminWifi = async () => {
    try {
      const res = await Api.get('/wifi/');
      setWifiData(res.data);
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
      await Api.delete('/wifi/' + id + '/');
      getAdminWifi();
      message.success('Success delete');
    } catch (error) {
      console.log(error);
      message.error('error');
    }
  };

  React.useEffect(() => {
    getAdminWifi();
  }, []);

  return {
    isModal,
    setIsModal,
    wifiData,
    handleDelete,
    openEditModal,
    selectedItem,
    getAdminWifi,
    setSelectedItem,
  };
};

export default useAdminWifi;
