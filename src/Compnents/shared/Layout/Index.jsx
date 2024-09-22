import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;

const menus = [
  {
    key: '1',
    icon: <PieChartOutlined />,
    label: 'Dashboard',
  },
  {
    key: '2',
    icon: <BarChartOutlined />,
    label: 'Analytics',
  },
  {
    key: '3',
    icon: <ShoppingCartOutlined />,
    label: 'Inventry',
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
  const [collapsed, setCollapsed] = useState(true);
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
          defaultSelectedKeys={['1']}
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