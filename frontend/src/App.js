import './App.css';
import Header from './componets/header/header';
import Home from './componets/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import Cart from './componets/page/cart';
import Shop from './componets/shop/shop';
import ShopDetail from './componets/shopdetail/shopdetail';
import Login from './componets/Forme/login';
import Footer from './componets/Footer/footer';
import DataMap from './componets/vegetable/DataMap';
import DataMapAll from './componets/vegetable/DataMapAll';
import SigIn from './componets/Forme/sigin';
import { useState } from 'react';



function App() {
  const [token,setToken] = useState(localStorage.getItem("token"))

  return (
    <div className='app'>

      <CartProvider>
      <Header /> 
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home token={token}/>}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/shop' element={<Shop />}></Route>
            <Route path='/shopdetail' element={<ShopDetail />}></Route>
            <Route path='/allproduct' element={<DataMapAll pro="all"/>}></Route>
            <Route path='/vegetable' element={<DataMap typ="vegetable"/>}></Route>
            <Route path='/fruit' element={<DataMap typ="fruit"/>}></Route>
            <Route path='/brand' element={<DataMap typ="brand"/>}></Route>
            <Route path='/login' element={<Login setToken={setToken} />}></Route> 
            <Route path='/sigin' element={<SigIn />}></Route> 
            
          </Routes>
         
        </BrowserRouter>
        <Footer />
      </CartProvider>


    </div>

  );
}

export default App;
