import React, { useState } from 'react';
import Api from '../api';
import { message } from 'antd';

const useCompyuter = () => {
  const [categoriesData, setCategoriedData] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [cpuData, setCpuData] = useState([]);
  const [motherBoardId, setMotherBoardId] = useState(null);
  const [motherBoardData, setMotherBoardData] = useState([]);
  const [otherData, setOtherData] = useState([]);
  const [otherDataId, setOtherDataId] = useState(null);
  const [powerunit, setPowerUnit]= useState([])

  const getCompyuter = async () => {
    try {
      const res = await Api.get('/all-categories/');
      setCategoriedData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategoryId = async () => {
    if (!categoryId) return;
    try {
      const res = await Api.get(`/cpu/${categoryId}/`);
      setCpuData(res.data);

      if (res?.data?.length === 0) {
        message.error('Tanlagan Kompyuter uchun qismlar mavjud emas');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMotherBoardId = async () => {
    if (!motherBoardId) return;
    try {
      const res = await Api.get(`/motherboards-by-cpu/${motherBoardId}/`);
      setMotherBoardData(res.data);
      if (res?.data?.length === 0) {
        message.error('Tanlagan Cpu uchun qismlar mavjud emas');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getOtherData = async () => {
    if (!otherDataId) return;
    try {
      const res = await Api.get(`/others-by-category/${otherDataId}/`);
      setOtherData(res.data);
      if (res?.data?.length === 0) {
        message.error('Tanlagan MotherBoard uchun qismlar mavjud emas');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPowerUnit = async (power, vidoe) => {
    if (!otherDataId) return;
    try {
      const res = await Api.post(`/powerunit/`, {
        cpu_power: power,
        videocard_power: vidoe,
      });
      setPowerUnit(res.data);
      if (res?.data?.length === 0) {
        message.error('Tanlagan MotherBoard uchun qismlar mavjud emas');
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getCompyuter();
  }, []);

  React.useEffect(() => {
    getCategoryId();
  }, [categoryId]);

  React.useEffect(() => {
    getMotherBoardId();
  }, [motherBoardId]);

  React.useEffect(() => {
    getOtherData();
  }, [otherDataId]);

  React.useEffect(() => {
    getPowerUnit();
  }, []);

  return {
    categoriesData,
    setCategoryId,
    cpuData,
    setMotherBoardId,
    motherBoardData,
    setOtherDataId,
    otherData,
    powerunit,
    getPowerUnit
  };
};

export default useCompyuter;
