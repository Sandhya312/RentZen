
import './App.css'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

// import Home from './pages/home/Home';
// import AllProducts from './pages/allProducts/AllProducts';
// import IndivudualPage from './pages/productPage/product';
import RentForm from './pages/rentForm/RentForm';

function App() {

  return (
      <div>
         <Navbar />
     
      <div>
         {/* // <Home /> */}
      {/* <AllProducts /> */}
      {/* <IndivudualPage /> */}
      <RentForm />
      </div>
      <Footer />
      </div>
   
  )
}

export default App
