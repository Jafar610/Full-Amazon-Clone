import axios from 'axios'
import  { useEffect, useState } from 'react'
import ProductCard from '../../Pages/ProductCard'
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-5">
        {
            products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))
        }
    </div>
  )
}

export default Product