import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/sign-up';
import CustomerPost from './pages/CustomerPost';
import SellerPage from './pages/Seller';
import SellerCommentPage from './pages/SellerComment/SellerCommentPage';
import MorePostInfo from './pages/MorePostInfo';
import AdminLogin from './pages/AdminLogin';
import PrivateRoute from './utils/PrivateRoute';
import AdminCategoryPage from './pages/AdminCategory';
import AdminProductPage from './pages/AdminProduct/AdminProductPage';
import CompyuterPage from './pages/Compyuter/CompyuterPage';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/admin-login" element={<AdminLogin />} />

      <Route path="/" element={<PrivateRoute />}>
        <Route path="/customer" element={<CustomerPost />} />
        <Route path="/customer/:id" element={<MorePostInfo />} />
        <Route path="/customer-compyuter" element={<CompyuterPage />} />
        <Route path="/seller" element={<SellerPage />} />
        <Route path="/seller-comment" element={<SellerCommentPage />} />
        <Route path="/admin" element={<AdminCategoryPage />} />
        <Route path="/admin-product" element={<AdminProductPage />} />
      </Route>
      {/* <Route path="/customer-post" element={< />} /> */}
    </Routes>
  );
};

export default App;
