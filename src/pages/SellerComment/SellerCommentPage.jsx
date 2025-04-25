import React from 'react';
import Seller from '../../components/Seller';
import useSeller from '../../hooks/useSeller';
import CommentCards from './data/CommentCards';

const SellerCommentPage = () => {
  const { commentData } = useSeller();

  console.log(commentData);
  return (
    <Seller>
      <CommentCards commentData={commentData}/>
    </Seller>
  );
};

export default SellerCommentPage;
