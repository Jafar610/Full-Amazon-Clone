import {Rating} from 'react-simple-star-rating'
function ProductCard() {
  return (
    <div>
      <img src="" alt="" />
      <h2>Product Name</h2>
      <Rating />

      {/* count */}
      <small></small>

      <p>Price</p>

      <button>Add to cart</button>

    </div>
  )
}

export default ProductCard