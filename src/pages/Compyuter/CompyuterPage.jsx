import React, { useState } from 'react';
import Customer from '../../components/Customer';
import useCompyuter from '../../hooks/useCompyuter';
import CompyuterPageData from './data/CompyuterPageData';
import CollectedPartsModal from '../../components/CollectedPartsModal';

const CompyuterPage = () => {
  const {
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
    powerunit,
    getPowerUnit,
    monitorData,
    getMonitor,
    wifiData,
    getWifi,
  } = useCompyuter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Customer>
      <CompyuterPageData
        categoriesData={categoriesData}
        setCategoryId={setCategoryId}
        cpuData={cpuData}
        setMotherBoardId={setMotherBoardId}
        motherBoardData={motherBoardData}
        setGpuDataId={setGpuDataId}
        gpuData={gpuData}
        ramData={ramData}
        setRamDataId={setRamDataId}
        memoriesData={memoriesData}
        getMemories={getMemories}
        setCollerDataId={setCollerDataId}
        collerData={collerData}
        setKeysDataId={setKeysDataId}
        keysData={keysData}
        powerunit={powerunit}
        getPowerUnit={getPowerUnit}
        monitorData={monitorData}
        getMonitor={getMonitor}
        setIsModalOpen={setIsModalOpen}
        wifiData={wifiData}
        getWifi={getWifi}
      />

      <CollectedPartsModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Customer>
  );
};

export default CompyuterPage;
