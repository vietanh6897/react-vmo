import React from "react";
import { useState, useEffect } from "react";
import productApi from "../../../../api/productApi";
import { Table } from "antd";
import "./styles.scss";

ProductListPage.propTypes = {};
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 200,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Price",
    dataIndex: "salePrice",
    key: "salePrice",
    width: 200,
    render: (value) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(value);
    },
  },
];
function ProductListPage(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 5,
      };
      const productList = await productApi.getAll(params);
      setData(
        productList.map((item) => {
          item.key = item.id;
          return item;
        })
      );
    };
    fetchProducts();
  }, []);
  return (
    <Table
      columns={columns}
      dataSource={data}
      className="table-container"
      bordered
      pagination={false}
      rowKey="id"
      style={{ backgroundColor: "white" }}
    />
  );
}

export default ProductListPage;
