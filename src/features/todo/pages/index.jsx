import React from "react";
import { Outlet } from "react-router-dom";

function TodoFeature(props) {
  return (
    <div>
      <h2>Todo Management</h2>
      <Outlet></Outlet>
    </div>
  );
}

export default TodoFeature;
