import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  PieChartOutlined,
  BarChartOutlined,
  MenuFoldOutlined,
  ShoppingCartOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MailOutlined,
  BellOutlined,
  SettingOutlined,
  LogoutOutlined,
  HomeOutlined,
  DeploymentUnitOutlined,
  InboxOutlined,
  GiftOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;

const menus = [
  {
    key: '/admin',
    icon: <PieChartOutlined />,
    label: <Link to="/admin">Dashboad</Link>,
  },
  {
    key: '/admin/analytics',
    icon: <BarChartOutlined />,
    label: <Link to="/admin/analytics">Analytics</Link>,
  },
  {
    key: '/admin/inventry',
    icon: <ShoppingCartOutlined />,
    label: <Link to="/admin/inventry">Inventry</Link>,
  },
  {
    key: '/admin/branding',
    icon: <HomeOutlined />,
    label: <Link to="/admin/branding">Branding</Link>,
  },
  {
    key: '/admin/category',
    icon: <DeploymentUnitOutlined />,
    label: <Link to="/admin/category">Category</Link>,
  },
  {
    key: '/admin/brand',
    icon: <InboxOutlined />,
    label: <Link to="/admin/brand">Brand</Link>,
  },
  {
    key: '/admin/products',
    icon: <ShoppingOutlined />,
    label: <Link to="/admin/products">Products</Link>,
  },
  {
    key: '/admin/area',
    icon: <GiftOutlined />,
    label: <Link to="/admin/area">Delivery Area</Link>,
  },
]

const items = [
  {
    key : '1',
    label : (
      <Link to='#' className='flex items-center gap-x-2'>
        <UserOutlined />
        Profile
      </Link>
    )
  },
  {
    key : '2',
    label : (
      <Link to='#' className='flex items-center gap-x-2'>
        <SettingOutlined />
        Settings
      </Link>
    )
  },
  {
    key : '3',
    label : (
      <Link to='#' className='flex items-center gap-x-2'>
        <LogoutOutlined />
        Logout
      </Link>
    )
  },
]

const LayoutEl = (data) => {
  // reading pathname
  const location = useLocation();
  const {pathname} = location;
  

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider 
      theme='light'
      className='min-h-screen'
      trigger={null} 
      collapsible
      collapsed={collapsed}>
        <div className="demo-logo-vertical flex justify-center mt-1">
          {
            collapsed ? 
            <img className='ms-2' style={{height : '50px'}} src='/public/logo.svg'></img> : 
            <div className='flex items-center	mt-1'>
              <img style={{height : '50px'}} src='/public/logo.svg'></img>
              <h1 className='font-bold text-3xl text-zinc-500'>QuickCart</h1>
            </div>
          }
        </div>
        <Menu
        className='font-semibold mt-3'
          theme="light"
          mode="inline"
          selectedKeys={[pathname]}
          items={menus}
        />
      </Sider>
      <Layout>
        <Header
          className='flex justify-between items-center'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
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
          <div className='flex gap-x-3 mx-4'>
            <Button
            icon={<MailOutlined/>}
            type="text"
            shape='circle'
            className='bg-green-100 text-green-600'
            />
            <Button
            icon={<BellOutlined/>}
            type="text"
            shape='circle'
            className='bg-rose-100 text-rose-600'
            />
            <Dropdown
            className='cursor-pointer'
            menu={{items}}
            arrow
            placement='bottomRight'
            >
              <Avatar className='bg-grey-500 text-white fontt-bold cursor-default'>
                A
              </Avatar>
            </Dropdown>
          </div>
        </Header>
        <Content
          className='shadow-md'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflowY: 'auto',
            overflowX: 'hidden',
            maxHeight: 'calc(100vh - 112px)'
          }}
        >
          {data.children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutEl;