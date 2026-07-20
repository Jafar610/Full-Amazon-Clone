import Rating from "@mui/material/Rating";
import CurrencyFormat from "../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
function ProductCard({ product, flex }) {
  const { image, title, price, rating, id, description } = product;

  const shortTitle = title?.length > 30 ? `${title.slice(0, 30).trimEnd()}...` : title;
  const isHorizontal = Boolean(flex);

  return (
    <div
      className={`border border-gray-300 rounded-lg shadow-md overflow-hidden p-4 w-full ${
        isHorizontal ? "flex flex-col sm:flex-row items-start gap-4" : "flex flex-col items-center"
      }`}
    >
      <Link
        to={`/product/${id}`}
        className={`${isHorizontal ? "w-full sm:w-48 h-48 shrink-0" : "w-full h-60"} flex items-center justify-center`}
      >
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </Link>
      <div className={`w-full ${isHorizontal ? "flex flex-col justify-between flex-1 min-h-[180px]" : "mt-4 flex flex-col flex-1"}`}>
        <div>
          <h2 className={`min-h-[72px]mb-0 ${isHorizontal ? "text-lg font-semibold" : ""}`}>
            {shortTitle}
          </h2>
          {
            isHorizontal?<p className="mt-1 w-250 font-normal text-lg">{description}</p>:''
          }
          <div className="flex items-center gap-2 mt-2">
            <Rating defaultValue={rating.rate} precision={0.1} />
            <small>{rating.count}</small>
          </div>

          <p className="text-lg font-semibold align-middle mt-2">
            <CurrencyFormat amount={price} />
          </p>
        </div>
        <Link
          to={`/product/${id}`}
          className={`bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 ${isHorizontal ? 'w-50 mt-4 text-center flex items-center justify-center':'w-full mt-4'}`}
        >
          Add to cart
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
