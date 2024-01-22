import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import LandingPage from './views/LandingPage';
import CartPage from './views/CartPage';
import { useEffect, useState } from 'react';
import { getCustomPackageFromLocalStorage, getItemsFromLocalStorage, getProductsFromLocalStorage } from './data';
import ApplicationContext from './data/applicationContext'
import OrderPage from './views/OrderPage';

function App() {
  const [products, setProducts] = useState(getProductsFromLocalStorage());
  const [items, setItems] = useState(getItemsFromLocalStorage());
  const [customPackage, setCustomPackage] = useState(getCustomPackageFromLocalStorage());

  const location = useLocation();

  useEffect(() => {
    let elements = document.querySelectorAll(".hidden");

    const interSectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, {
      threshold: 0.3,
    });

    elements.forEach((element) => {
      interSectionObserver.observe(element);
    });

    elements = document.querySelectorAll(".left-hidden");

    const interSectionObserver2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("left-to-right");
        }
      });
    }, {
      threshold: 0.3,
    });

    elements.forEach((element) => {
      interSectionObserver2.observe(element);
    });

    window.scrollTo(0, 0);
  }, [location.pathname]);

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
