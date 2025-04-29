import React from 'react';
import Seller from '../../components/Seller';
import useSeller from '../../hooks/useSeller';
import CommentCards from './data/CommentCards';

const SellerCommentPage = () => {
  const { commentData,getCommentsData } = useSeller();

  return (
    <Seller>
      <CommentCards commentData={commentData} getCommentsData={getCommentsData}/>
    </Seller>
  );
};

export default SellerCommentPage;
