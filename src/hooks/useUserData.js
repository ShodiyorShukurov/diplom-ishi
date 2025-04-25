import React from 'react';
import Api from '../api';

const useUserData = () => {
  const [userData, setUserData] = React.useState([]);

  const getuserData = async () => {
    try {
      const res = await Api.get('/profile/');
      setUserData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(()=>{
    getuserData()
  },[])

  return {userData};
};

export default useUserData;
