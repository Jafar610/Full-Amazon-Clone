import axios from 'axios'
import  { useEffect, useState } from 'react'
import ProductCard from '../Pages/ProductCard'
function Product() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products')
                setProducts(response.data)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }
        fetchProducts()
    }, [])

  return (
    <div>
        {
            products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))
        }
    </div>
  )
}

export default Product