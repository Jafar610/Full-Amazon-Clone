import { ProductUrl } from "../API/endpoint";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`${ProductUrl}/${id}`).then((res) => {
      setProduct([res.data]);
      console.log(res.data);
    });
  }, [id]);

  return (
    <>
      <div className="font-bold text-lg text-gray-600 py-3 px-4">
        <h2>{product[0]?.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {product.map((items) => (
            <ProductCard key={items.id} product={items} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
