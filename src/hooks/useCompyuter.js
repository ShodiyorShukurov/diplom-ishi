import React, { useState } from 'react';
import Api from '../api';
import { message } from 'antd';

const useCompyuter = () => {
  const [categoriesData, setCategoriedData] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [cpuData, setCpuData] = useState([]);
  const [motherBoardId, setMotherBoardId] = useState(null);
  const [motherBoardData, setMotherBoardData] = useState([]);
  const [gpuData, setGpuData] = useState([]);
  const [gpuDataId, setGpuDataId] = useState(null);
  const [ramData, setRamData] = useState([]);
  const [ramDataId, setRamDataId] = useState(null);
  const [memoriesData, setMemoriesData] = useState([]);
  const [collerDataId, setCollerDataId] = useState(null);
  const [collerData, setCollerData] = useState([]);
  const [keysDataId, setKeysDataId] = useState(null);
  const [keysData, setKeysData] = useState([]);
  const [monitorData, setMonitorData] = useState([]);
  const [powerunit, setPowerUnit] = useState([]);
  const [wifiData, setWifiData] = useState([]);

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

  const getGpusData = async () => {
    if (!gpuDataId) return;
    try {
      const res = await Api.get(`/gpus-customer/${gpuDataId}/`);
      setGpuData(res.data);
      if (res?.data?.length === 0) {
        message.error('Tanlagan MotherBoard uchun qismlar mavjud emas');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRamsData = async () => {
    if (!ramDataId) return;
    try {
      const res = await Api.get(`/rams-customer/${ramDataId}/`);
      setRamData(res.data);
      if (res?.data?.length === 0) {
        message.error('Tanlagan MotherBoard uchun qismlar mavjud emas');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMemories = async () => {
    try {
      const res = await Api.get(`/memories-customer/`);
      setMemoriesData(res.data);
      if (res?.data?.length === 0) {
        message.error('Tanlagan MotherBoard uchun qismlar mavjud emas');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getColler = async () => {
    try {
      const res = await Api.get(`/collers-customer/${collerDataId}/`);
      setCollerData(res.data);
      if (res?.data?.length === 0) {
        message.error('Tanlagan MotherBoard uchun qismlar mavjud emas');
      }
    } catch (error) {
      console.log(error);
    }
  };

   const getKeys = async () => {
    try {
      const res = await Api.get(`/keys-customer/${keysDataId}/`);
      setKeysData(res.data);
      if (res?.data?.length === 0) {
        message.error('Tanlagan MotherBoard uchun qismlar mavjud emas');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPowerUnit = async (power, vidoe) => {
    // if (!otherDataId) return;
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

   const getMonitor = async () => {
    try {
      const res = await Api.get(`/monitors-customer/`);
      setMonitorData(res.data);
      if (res?.data?.length === 0) {
        message.error('Tanlagan MotherBoard uchun qismlar mavjud emas');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getWifi = async () => {
    try {
      const res = await Api.get(`/wifi-customer/`);
      setWifiData(res.data);
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
    getGpusData();
  }, [gpuDataId]);

  React.useEffect(() => {
    getRamsData();
  }, [ramDataId]);

  React.useEffect(() => {
    getColler();
  }, [collerDataId]);

  React.useEffect(() => {
    getKeys();
  }, [keysDataId]);

  React.useEffect(() => {
    getPowerUnit();
  }, []);

  return {
    categoriesData,
    setCategoryId,
    cpuData,
    setMotherBoardId,
    motherBoardData,
    setGpuDataId,
    gpuData,
    ramData,
    setRamDataId,
    memoriesData,
    getMemories,
    setCollerDataId,
    collerData,
    setKeysDataId,
    keysData,
    monitorData,
    getMonitor,
    powerunit,
    getPowerUnit,
    wifiData,
    getWifi,
  };
};

export default useCompyuter;
