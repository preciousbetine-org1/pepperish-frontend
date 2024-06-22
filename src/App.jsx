import {
  Routes,
  Route,
} from 'react-router-dom';
import LandingPage from './views/LandingPage';
import CartPage from './views/CartPage';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getCustomPackageFromLocalStorage, getItemsFromLocalStorage, getProductsFromLocalStorage } from './data';
import ApplicationContext from './data/applicationContext'
import OrderPage from './views/OrderPage';

function App() {
  const [products, setProducts] = useState(getProductsFromLocalStorage());
  const [items, setItems] = useState(getItemsFromLocalStorage());
  const [customPackage, setCustomPackage] = useState(getCustomPackageFromLocalStorage());

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById('root').scrollTo(0, 0);
  }, [pathname]);


  return (
    <div>
      <ApplicationContext.Provider value={{
        products,
        items,
        customPackage,
        setProducts,
        setItems,
        setCustomPackage,
      }}>
        <Routes>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </ApplicationContext.Provider>
    </div>
  )
}

export default App
