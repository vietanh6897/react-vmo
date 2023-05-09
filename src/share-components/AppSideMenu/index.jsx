import { Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SignOut from "../../assets/icon/SignOut.svg";
import Icon from "@ant-design/icons";
const { Sider } = Layout;
function AppSideMenu({ menuItems, userRole, logoImage, collapsed }) {
  const filteredMenuItems = menuItems.filter(
    (menuItem) => menuItem.role === userRole
  );

  const navigate = useNavigate();

  const [current, setCurrent] = useState("");
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    setCurrent(pathname);
  }, [location]);

  const handleMenuClick = (e) => {
    navigate(e);
  };

  const handleLogout = () => {
    // Perform logout logic here
    console.log("Log out");
  };

  const [openKeys, setOpenKeys] = useState([]);

  const handleMenuSelect = ({ keyPath }) => {
    const parentKey = keyPath?.[1];
    if (parentKey && !openKeys.includes(parentKey)) {
      setOpenKeys((prevOpenKeys) => [...prevOpenKeys, parentKey]);
    }
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme="light"
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        zIndex: 1,
      }}
      width={304}
    >
      <div className="logo">
        {
          <img
            src={logoImage}
            alt="Logo"
            style={{
              height: "32px",
              width: "auto",
              transition: "all 0.3s ease",
            }}
          />
        }
      </div>
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[current]}
        items={filteredMenuItems.map((menuItem) => ({
          key: menuItem.key,
          icon: menuItem.icon,
          label: menuItem.label,
          children: menuItem.children,
        }))}
        defaultOpenKeys={openKeys}
        onSelect={handleMenuSelect}
        onClick={(info) => handleMenuClick(info.key)}
      ></Menu>
      <Menu
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
        theme="light"
        mode="inline"
        items={[
          {
            key: "/login",
            icon: (
              <Icon component={() => <img src={SignOut} alt="SignOut" />} />
            ),
            label: "案件一覧",
          },
        ]}
        onClick={(info) => handleLogout(info.key)}
      ></Menu>
    </Sider>
  );
}

export default AppSideMenu;
