import {UserOutlined,VideoCameraOutlined} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import {Link}from 'react-router-dom'

const {  Sider, Content  } = Layout;
interface INavigation {
    children?: React.ReactNode;
}

export default function Navigation ({children }:INavigation) : React.ReactElement  {
    return (
    <Layout hasSider>
      <Sider trigger={null} collapsible style={{ padding: 0  ,backgroundColor:'white'}}>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'home',
              onClick :() => <Link to="/page/home" />
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'about',
              onClick :() => <Link to="/page/about" />
            },
          ]}
        />
      </Sider>
      <Layout className="w-full h-full" style={{backgroundColor:'white'}}>
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
    )
}
