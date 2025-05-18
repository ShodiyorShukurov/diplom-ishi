import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
  PlusCircleOutlined,
  ThunderboltOutlined,
  DesktopOutlined,
  DatabaseOutlined,
  PoweroffOutlined,
  AppstoreOutlined,
  CloudOutlined,
  VideoCameraOutlined,
  KeyOutlined,
  CloudServerOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Avatar, Dropdown } from 'antd';
import useUserData from '../../hooks/useUserData';
import { API_ROLE, API_TOKEN } from '../../utils/constants';
import { useLocation, useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const Admin = ({ children }) => {
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
          label: `Role: Admin`,
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
    if (location.pathname === '/admin') return '1';
    if (location.pathname === '/admin-product') return '2';
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
              label: "Kompyuter qo'shish ",
              onClick: () => navigate('/admin'),
            },
            {
              key: '2',
              icon: <ThunderboltOutlined />,
              label: "Cpu qo'shish",
              onClick: () => navigate('/admin-cpu'),
            },
            {
              key: '3',
              icon: <DesktopOutlined />,
              label: "MotherBoard qo'shish",
              onClick: () => navigate('/admin-motherboard'),
            },
            {
              key: '4',
              icon: <DatabaseOutlined />,
              label: "Qo'shimchalar qo'shish",
              onClick: () => navigate('/admin-other'),
            },
            {
              key: '5',
              icon: <PoweroffOutlined />,
              label: "BlokPitaniya qo'shish",
              onClick: () => navigate('/admin-block'),
            },
            {
              key: '6',
              icon: <PoweroffOutlined />,
              label: "Socket qo'shish",
              onClick: () => navigate('/admin-socket'),
            },
            {
              key: '7',
              icon: <AppstoreOutlined />,
              label: "Accessorlar qo'shish",
              onClick: () => navigate('/admin-accessors'),
            },
            {
              key: '8',
              icon: <CloudOutlined />,
              label: "Collers qo'shish",
              onClick: () => navigate('/admin-collers'),
            },
            {
              key: '9',
              icon: <VideoCameraOutlined />,
              label: "Gpu qo'shish",
              onClick: () => navigate('/admin-gpus'),
            },
            {
              key: '10',
              icon: <KeyOutlined/>,
              label: "Keys qo'shish",
              onClick: () => navigate('/admin-keys'),
            },
            {
              key: '11',
              icon: <CloudServerOutlined/>,
              label: "Memories qo'shish",
              onClick: () => navigate('/admin-memories'),
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
export default Admin;
