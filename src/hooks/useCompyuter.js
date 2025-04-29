import React, { useState } from 'react';
import Api from '../api';

const useCompyuter = () => {
  const [categoriesData, setCategoriedData] = useState([]);
  const getCompyuter = async () => {
    try {
      const res = await Api.get('/all-products-categories/');
      setCategoriedData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getCompyuter();
  }, []);

  return { categoriesData };
};

export default useCompyuter;

