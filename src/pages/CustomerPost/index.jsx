import { Button } from 'antd';
import React from 'react';
import Customer from '../../components/Customer';
import useCustomer from '../../hooks/useCustomer';
import CustomerModal from './components/CustomerModal';
import CustomerData from './data/CustomerData';

const CustomerPost = () => {
  const {
    isModal,
    setIsModal,
    customerData,
    selectedItem,
    setSelectedItem,
    openEditModal,
    getCustomer,
    handleDelete
  } = useCustomer();

  return (
    <Customer>
      <Button color="primary" variant="solid" onClick={() => setIsModal(true)}>
        Post qo'shish
      </Button>

      <CustomerData customerData={customerData} openEditModal={openEditModal} handleDelete={handleDelete}/>
      <CustomerModal
        isModal={isModal}
        setIsModal={setIsModal}
        selectedItem={selectedItem}
        getCustomer={getCustomer}
      />
    </Customer>
  );
};

export default CustomerPost;
