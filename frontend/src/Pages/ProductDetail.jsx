import { ProductUrl } from "../API/endpoint";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import LoaderSpinner from "../Components/Loader/LoaderSpinner";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${ProductUrl}/${id}`);
        setProduct([res.data]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <div className="font-bold text-lg text-gray-600 py-3 px-4">
          <h2 className="max-w-100 mb-4">{product[0]?.title}</h2>
          <div className="flex flex-col gap-4">
            {product.map((items) => (
              <ProductCard key={items.id} product={items} flex={true} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
