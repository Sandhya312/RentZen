
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
 import Home from './pages/home/Home';
import AllProducts from './pages/allProducts/AllProducts';
  import IndivudualPage from './pages/productPage/product';
import RentForm from './pages/rentForm/RentForm';
 import Cart from './pages/cart/Cart';
import Payment from './pages/payment/Payment';
import ErrorPage from './pages/errorPage/ErrorPage';
import SharedLayout from './pages/sharedLayout/SharedLayout';

function App() {

  return (
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path="products" element={<AllProducts />} />
          <Route path='products/:productId' element={<IndivudualPage />} />
          {/* <Route path="product/1" element={<IndivudualPage />} /> */}
          <Route path="rent" element={<RentForm />} />
          <Route path="cart" element={<Cart />} />
          <Route path="payment" element={<Payment />} />
          <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
 
      </div>
   
  )
}

export default App
