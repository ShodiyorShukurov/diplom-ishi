import React from 'react';
import Api from '../api';
import { message } from 'antd';

const usePicture = () => {
  const [pictureData, setPictureData] = React.useState([]);
  const [getProductData, setGetProductData] = React.useState([]);

  const getPicture = async () => {
    try {
      const res = await Api.get('/category-product/');
      setPictureData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPictureById = async (id) => {
    try {
      const res = await Api.get('/categoryp-product/' + id + '/');
      setGetProductData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getPicture();
  }, []);

  return {
    pictureData,
    getPictureById,
    getProductData,
  };
};

export default usePicture;
