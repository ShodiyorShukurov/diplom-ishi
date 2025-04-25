import React from 'react';
import Api from '../api';
import { message } from 'antd';

const useCustomer = () => {
  const [customerData, setCustomerData] = React.useState([]);
  const [isModal, setIsModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState({});

  const getCustomer = async () => {
    try {
      const res = await Api.get('post-list/');

      setCustomerData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const openEditModal = (item) => {
    console.log(item);
    setSelectedItem(item);
    setIsModal(true);
  };

  const handleDelete = async (id) => {
    console.log(id)
    try {
      const res = await Api.delete('delete-post/' + id + '/');
      if (res) {
        message.success('Delete successfuly');
        getCustomer()
      }
    } catch (error) {
      message.error("Error")
    }
  };

  React.useEffect(() => {
    getCustomer();
  }, []);

  return {
    isModal,
    setIsModal,
    customerData,
    selectedItem,
    setSelectedItem,
    openEditModal,
    getCustomer,
    handleDelete
  };
};

export default useCustomer;
