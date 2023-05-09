import { Layout, theme } from "antd";
import Icon from "@ant-design/icons";
import { Navigate, Route, Routes } from "react-router-dom";
import TodoFeature from "./features/todo/pages";
import AlbumFeature from "./features/album/pages";
import TodoListPage from "./features/todo/pages/ListPage";
import TodoDetailPage from "./features/todo/pages/DetailPage";
import "./i18n";
import React, { useState } from "react";
import ProductFeature from "./features/products/pages";
import ProductListPage from "./features/products/pages/ListPage";
import ProductDetailPage from "./features/products/pages/DetailPage";
import Logo from "./logo.svg";
import LogoNoText from "./logoNoText.svg";
import FileText from "./assets/icon/FileText.svg";
import Notification from "./assets/icon/Notification.svg";
import SignOut from "./assets/icon/SignOut.svg";
import UserList from "./assets/icon/UserList.svg";
import "./index.css";
import AppSideMenu from "./share-components/AppSideMenu";
import AppHeader from "./share-components/AppHeader";

const { Content } = Layout;

function App() {
  // const navigate = useNavigate();
  // const handleMenuClick = (e) => {
  //   navigate(e);
  // };
  const menuItems = [
    {
      key: "/",
      icon: <Icon component={() => <img src={FileText} alt="1" />} />,
      label: "案件一覧",
      role: "all",
      children: [
        {
          key: "/todos",
          icon: <Icon component={() => <img src={Notification} alt="2" />} />,
          label: "テンプレート一覧",
        },
      ],
    },
    {
      key: "/albums",
      icon: <Icon component={() => <img src={SignOut} alt="3" />} />,
      label: "マスター管理",
      role: "all",
    },
    {
      key: "/products",
      icon: <Icon component={() => <img src={UserList} alt="4" />} />,
      label: "アカウント一覧",
      role: "all",
    },
  ];

  // const [current, setCurrent] = useState("");
  // const location = useLocation();

  // useEffect(() => {
  //   const pathname = location.pathname;
  //   setCurrent(pathname);
  // }, [location]);
  const [collapsed, setCollapsed] = useState(false);
  const [logoImage, setLogoImage] = useState(Logo);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const toggleSider = () => {
    setCollapsed(!collapsed);
    if (logoImage === LogoNoText) {
      setTimeout(function () {
        setLogoImage(logoImage === Logo ? LogoNoText : Logo);
      }, 100);
    } else {
      setLogoImage(logoImage === Logo ? LogoNoText : Logo);
    }
  };
  const userRole = "all";
  return (
    <Layout style={{ minHeight: "100vh" }} hasSider>
      {/* <Sider
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
      </Sider> */}
      <AppSideMenu
        menuItems={menuItems}
        collapsed={collapsed}
        userRole={userRole}
        logoImage={logoImage}
      ></AppSideMenu>
      <Layout
        className="site-layout"
        style={{
          marginLeft: collapsed ? "80px" : "304px",
          transition: "all 0.2s,background 0s",
        }}
      >
        {/* <Header
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
        </Header> */}
        <AppHeader
          toggleSider={toggleSider}
          colorBgContainer={colorBgContainer}
          collapsed={collapsed}
        ></AppHeader>
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
