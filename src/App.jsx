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
import AdminCpuPage from './pages/AdminCpu/AdminCpuPage';
import AdminMotherBoard from './pages/AdminMotherBoard/AdminMotherBoard';
import AdminBlockPage from './pages/AdminBlock/AdminBlockPage';
import AdminSocketPage from './pages/AdminSocket/AdminSocketPage';
import AdminAccessorsPage from './pages/AdminAccessors/AdminAccessorsPage';
import AdminCollersPage from './pages/AdminCollers/AdminCollersPage';
import AdminGpusPage from './pages/AdminGpus/AdminGpusPage';
import AdminKeysPage from './pages/AdminKeys/AdminKeysPage';
import AdminMemoriesPage from './pages/AdminMemories/AdminMemoriesPage';
import AdminMonitorsPage from './pages/AdminMonitors/AdminMonitorsPage';
import AdminWifiPage from './pages/AdminWifi/AdminWifiPage';
import AdminRamsPage from './pages/AdminRams/AdminRamsPage';
import AdminCategoryProductPage from './pages/AdminCategoryProduct/AdminCategoryProductPage';
import PictureData from './pages/Picture/PictureData';

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
        <Route path="/admin-cpu" element={<AdminCpuPage />} />
        <Route path="/admin-motherboard" element={<AdminMotherBoard/>} />
        <Route path="/admin-block" element={<AdminBlockPage />} />
        <Route path="/admin-socket" element={<AdminSocketPage />} />
        <Route path="/admin-accessors" element={<AdminAccessorsPage />} />
        <Route path='/admin-collers' element={<AdminCollersPage/>} />
        <Route path='/admin-gpus' element={<AdminGpusPage/>} />
        <Route path='/admin-keys' element={<AdminKeysPage/>} />
        <Route path='/admin-memories' element={<AdminMemoriesPage/>} />
        <Route path='/admin-monitor' element={<AdminMonitorsPage/>} />
        <Route path='/admin-wifi' element={<AdminWifiPage/>} />
        <Route path='/admin-rams' element={<AdminRamsPage/>} />
        <Route path='/admin-category-product' element={<AdminCategoryProductPage/>} />
        <Route path='/customer-picture' element={<PictureData/>} />
      </Route>
      {/* <Route path="/customer-post" element={< />} /> */}
    </Routes>
  );
};

export default App;
