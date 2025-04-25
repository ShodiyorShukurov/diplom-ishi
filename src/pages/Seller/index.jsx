import React from 'react';
import Seller from '../../components/Seller';
import useSeller from '../../hooks/useSeller';
import SellerData from './data/SellerData';

const SellerPage = () => {
  const { postData } = useSeller();

  return (
    <Seller>
      <SellerData data={postData} />
    </Seller>
  );
};

export default SellerPage;
