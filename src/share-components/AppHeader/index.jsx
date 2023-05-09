import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import { Layout, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
const { Header } = Layout;

AppHeader.propTypes = {
  toggleSider: PropTypes.func,
};
function AppHeader({ toggleSider, colorBgContainer, collapsed }) {
  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => toggleSider()}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
    </Header>
  );
}

export default AppHeader;
