import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/sign-up';
import Customer from './components/Customer';
import CustomerPost from './pages/CustomerPost';
import SellerPage from './pages/Seller';
import SellerCommentPage from './pages/SellerComment/SellerCommentPage';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/customer" element={<CustomerPost />} />
      <Route path="/seller" element={<SellerPage />} />
      <Route path="/seller-comment" element={<SellerCommentPage />} />
      {/* <Route path="/customer-post" element={< />} /> */}
    </Routes>
  );
};

export default App;
