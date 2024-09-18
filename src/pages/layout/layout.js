import React, { useState } from "react";
// 图标
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import "./layout.scss";
const { Header, Sider, Content } = Layout;
const layout = () => {
  // 左侧菜单栏
  const items2 = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "账户管理",
      children: [
        {
          key: "1-1",
          label: "角色管理",
        },
        {
          key: "1-2",
          label: "用户管理",
        },
      ],
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "客房管理",
      children: [
        {
          key: "2-1",
          label: "房型管理",
        },
        {
          key: "2-2",
          label: "房间管理",
        },
        {
          key: "2-3",
          label: "营业管理",
        },
      ],
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "客户管理",
    },
  ];
  // 顶部菜单栏列表
  const items = [
    {
      label: "首页",
      key: "home",
      icon: <MailOutlined />,
    },
    {
      label: "通知",
      key: "mail",
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: "邮件",
      key: "noti",
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: "个人中心",
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        {
          key: "1",
          label: "个人信息",
        },
        {
          key: "2",
          label: "修改密码",
        },
        {
          key: "3",
          label: "退出登录",
        },
      ],
    },
  ];
  const [current, setCurrent] = useState("mail");
  // 侧边栏折叠状态
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">
          {collapsed ? "系统" : "后台管理系统"}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items2}
        />
      </Sider>
      <Layout>
        <Header
          className="header"
          style={{
            padding: 0,
            background: "#ffffff",
          }}
        >
          <Button
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              border: "transparent",
            }}
          />
          <Menu
            className="headermenu"
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </Header>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
};
export default layout;
