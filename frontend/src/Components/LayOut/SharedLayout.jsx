import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Cart from '../../pages/cart'
import Orders from '../../pages/orders'
import Signup from '../../Pages/Auth/Signup'
function SharedLayout() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="cart" element={<Cart/>} />
          <Route path="orders" element={<Orders/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default SharedLayout