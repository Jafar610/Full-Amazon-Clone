import Rating from '@mui/material/Rating';
import CurrencyFormat from '../Components/CurrencyFormat/CurrencyFormat';
function ProductCard({ product }) {
  const {image, title, price, rating} = product
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div>
         <Rating defaultValue={rating.rate} precision={0.1} />
      {/* count */}
      <small>{rating.count}</small>
      </div>
      
      <p><CurrencyFormat amount={price} /></p>
      <button>Add to cart</button>
    </div>
  )
}

export default ProductCard