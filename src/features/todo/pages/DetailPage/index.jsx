import React from "react";
import { useParams } from "react-router-dom";

function TodoDetailPage(props) {
  const { id } = useParams();
  console.log(id);
  return <div>Todo DetailPage</div>;
}

export default TodoDetailPage;
