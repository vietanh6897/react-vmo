import React from "react";
import { Outlet } from "react-router-dom";

function ProductFeature(props) {
  return (
    <div>
      <h2>Product Management</h2>
      <Outlet></Outlet>
    </div>
  );
}

export default ProductFeature;
