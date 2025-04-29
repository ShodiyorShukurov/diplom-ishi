import React from 'react';
import Api from '../api';

const useSeller = () => {
  const [postData, setPostData] = React.useState([]);
  const [commentData, setCommentData] = React.useState([]);

  const getPostData = async () => {
    try {
      const res = await Api.get('/all-posts/');
      setPostData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCommentsData = async () => {
    try {
      const res = await Api.get('/comments/');
      setCommentData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getPostData();
    getCommentsData();
  }, []);

  return { postData, commentData,getCommentsData };
};

export default useSeller;
