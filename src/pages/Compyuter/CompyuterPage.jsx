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
    setOtherDataId,
    otherData,
    powerunit,
    getPowerUnit
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
        setOtherDataId={setOtherDataId}
        otherData={otherData}
        powerunit={powerunit}
        getPowerUnit={getPowerUnit}
        setIsModalOpen={setIsModalOpen}
      />

      <CollectedPartsModal open={isModalOpen} onClose={()=>setIsModalOpen(false)}/>
    </Customer>
  );
};

export default CompyuterPage;
