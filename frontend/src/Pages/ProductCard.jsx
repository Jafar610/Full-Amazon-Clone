import Rating from "@mui/material/Rating";
import CurrencyFormat from "../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
function ProductCard({ product, display }) {
  const { image, title, price, rating, id } = product;
  return (
    <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden p-4 flex flex-col items-center">
      <Link to={`/product/${id}`}>
      <img src={image} alt={title}  className="w-full h-64 object-contain"/>
      </Link>
      <h2>{title}</h2>
      <div className="flex items-center gap-2">
        <Rating defaultValue={rating.rate} precision={0.1} />
        {/* count */}
        <small>{rating.count}</small>
      </div>

      <p className="text-lg font-semibold align-middle">
        <CurrencyFormat amount={price} />
      </p>
      <button className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 w-full mt-auto">
       <Link to = {`/product/${id}`}> Add to cart </Link>
      </button>
    </div>
  );
}

export default ProductCard;
