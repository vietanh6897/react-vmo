import React from "react";
import { useParams } from "react-router-dom";

function ProductDetailPage(props) {
  const { id } = useParams();
  console.log(id);
  return <div>Product DetailPage</div>;
}

export default ProductDetailPage;
