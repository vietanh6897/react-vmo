import { Layout, Menu, Button, theme } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Navigate, Route, Routes } from "react-router-dom";
import TodoFeature from "./features/todo/pages";
import AlbumFeature from "./features/album/pages";
import TodoListPage from "./features/todo/pages/ListPage";
import TodoDetailPage from "./features/todo/pages/DetailPage";
import "./i18n";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ProductFeature from "./features/products/pages";
import ProductListPage from "./features/products/pages/ListPage";
import ProductDetailPage from "./features/products/pages/DetailPage";
import Logo from "./logo.svg";
import LogoNoText from "./logoNoText.svg";
import "./index.css";

const { Header, Content, Sider } = Layout;

function App() {
  const navigate = useNavigate();
  const handleMenuClick = (e) => {
    navigate(e);
  };
  const menuItems = [
    {
      key: "/todos",
      icon: <UserOutlined />,
      label: "TODO LIST",
      children: [
        {
          key: "/todos-child",
          icon: <UserOutlined />,
          label: "TODO child 1",
          children: [],
        },
      ],
    },
    {
      key: "/albums",
      icon: <VideoCameraOutlined />,
      label: "ALBUMS",
    },
    {
      key: "/products",
      icon: <UploadOutlined />,
      label: "PRODUCTS",
    },
  ];

  const [current, setCurrent] = useState("");
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    setCurrent(pathname);
  }, [location]);
  const [collapsed, setCollapsed] = useState(false);
  const [logoImage, setLogoImage] = useState(Logo);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const toggleSider = () => {
    setCollapsed(!collapsed);
    setLogoImage(logoImage === Logo ? LogoNoText : Logo);
  };

  return (
    <Layout style={{ minHeight: "100vh" }} hasSider>
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
          boxShadow: "2px 0 6px rgba(0, 21, 41, 0.35)",
        }}
        width={220}
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
          items={menuItems}
          onClick={(info) => handleMenuClick(info.key)}
        ></Menu>
      </Sider>

      <Layout
        className="site-layout"
        style={{ marginLeft: collapsed ? "80px" : "220px" }}
      >
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
        <Content
          style={{
            padding: 24,
            overflow: "initial",
          }}
        >
          <Routes>
            <Route path="todos" element={<TodoFeature />}>
              <Route path="" element={<TodoListPage></TodoListPage>} />
              <Route
                path="todo-detail/:id"
                element={<TodoDetailPage></TodoDetailPage>}
              />
              {/* <Route path="*" element={<Navigate to="" replace></Navigate>} /> */}
            </Route>
            <Route path="products" element={<ProductFeature />}>
              <Route path="" element={<ProductListPage></ProductListPage>} />
              <Route
                path="product-detail/:id"
                element={<ProductDetailPage></ProductDetailPage>}
              />
              {/* <Route path="*" element={<Navigate to="" replace></Navigate>} /> */}
            </Route>
            <Route path="albums" element={<AlbumFeature />} />
            <Route
              path="*"
              element={<Navigate to="todos" replace></Navigate>}
            />
          </Routes>
        </Content>
        {/* <Footer
          style={{
            position: "fixed",
            left: 0,
            bottom: 0,
            width: "100%",
            backgroundColor: "#001529",
            color: "#fff",
            textAlign: "center",
          }}
        >
          My Company &copy;2021
        </Footer> */}
      </Layout>
    </Layout>
  );
}

export default App;
