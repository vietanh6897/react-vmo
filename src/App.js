import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
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

const { Header, Content, Footer } = Layout;

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
    console.log(pathname);
    setCurrent(pathname);
  }, [location]);

  return (
    <Layout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[current]}
          items={menuItems}
          onClick={(info) => handleMenuClick(info.key)}
        ></Menu>
      </Header>
      <Content style={{ padding: "20px" }}>
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
          <Route path="*" element={<Navigate to="todos" replace></Navigate>} />
        </Routes>
      </Content>
      <Footer
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
      </Footer>
    </Layout>
  );
}

export default App;
