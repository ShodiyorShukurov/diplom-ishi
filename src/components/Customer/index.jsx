import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LoginOutlined,
  LogoutOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import {
  Button,
  Layout,
  Menu,
  theme,
  Avatar,
  Popconfirm,
  Dropdown,
} from 'antd';
import useUserData from '../../hooks/useUserData';
import { API_ROLE, API_TOKEN } from '../../utils/constants';
import { useLocation, useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const Customer = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { userData } = useUserData();

  const logOut = () => {
    localStorage.clear(API_TOKEN);
    localStorage.clear(API_ROLE);
    navigate('/login');
  };

  const profileMenu = (
    <Menu
      items={[
        {
          key: '0',
          label: `${userData?.first_name} ${userData?.last_name}`,
          disabled: true,
        },
        {
          type: 'divider',
        },
        {
          label: <a href={userData.email}>Email: {userData.email}</a>,
          key: '1',
        },
        {
          label: `Role: ${userData.role}`,
          key: '2',
        },
        {
          label: 'Chiqish',
          key: '3',
          icon: <LogoutOutlined />,
          onClick: () => logOut(),
        },
      ]}
    />
  );

  const selectedKey = (() => {
    if (location.pathname === '/customer') return '1';
    if (location.pathname === '/customer-compyuter') return '2';
    return '';
  })();

  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          mode="inline"
          className="h-full"
          selectedKeys={[selectedKey]}
          items={[
            {
              key: '1',
              icon: <PlusCircleOutlined />,
              label: "Post qo'shish ",
              onClick: () => navigate('/customer'),
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: "Kompyuter yig'ish",
              onClick: () => navigate('/customer-compyuter'),
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: "Rasmlar yig'ish",
              onClick: () => navigate('/customer-picture'),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{ paddingLeft: 0, background: colorBgContainer }}
          className="flex justify-between items-center"
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />

          <Dropdown
            overlay={profileMenu}
            placement="bottomRight"
            trigger={['click']}
          >
            <Avatar
              src={
                userData?.attachmentId
                  ? baseURL + '/file/photo/' + userData.attachmentId
                  : undefined
              }
              icon={!userData?.attachmentId ? <UserOutlined /> : null}
              // className={styles.admin_layout__profile_icon}
              size={40}
            />
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Customer;
