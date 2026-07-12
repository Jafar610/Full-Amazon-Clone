import { useParams } from "react-router-dom"
import { ProductUrl } from "../API/endpoint"
import { useState, useEffect } from "react";
import ProductCard from "../Pages/ProductCard";
import axios from "axios";
function ProductCategory() {
    const { categoryName } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        axios.get(`${ProductUrl}/category/${categoryName}`).then((res)=>{
            setProduct(res.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    }, [categoryName]);


  return (
    <>
    <div>
        <h2 className="font-bold text-lg text-gray-600 py-3 px-4">Category/{categoryName}</h2>
        <hr className="mb-3 text-gray-300"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {product.map((items) => (
        <ProductCard key={items.id} product={items} />
      ))}
        </div> 
    </div>
    </>
  )
}

export default ProductCategory