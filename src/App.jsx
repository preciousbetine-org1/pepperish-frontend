import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import LandingPage from './views/LandingPage';
import Header from './components/Header';
import IntroText from './components/IntroText';
import Menu from './components/Menu';
import Styles from './App.module.css';
import ProductsPage from './views/ProductsPage';
import CustomPackagePage from './views/CustomPackagePage';
import EventsPage from './views/EventsPage';
import CartPage from './views/CartPage';
import CartSummary from './components/CartSummary';
import CheckoutPage from './views/CheckoutPage';
import CheckoutSummary from './components/CheckoutSummary';
import ReceiptPage from './views/ReceiptPage';
import ReturnHome from './components/ReturnHome';
import { useEffect, useState } from 'react';
import { getCustomPackageFromLocalStorage, getItemsFromLocalStorage, getProductsFromLocalStorage } from './data';
import ApplicationContext from './data/applicationContext'

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

    if (location.pathname != "/") {
      document.getElementById("divider").scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [location.pathname]);

  return (
    <div className={Styles.page}>
      <ApplicationContext.Provider value={{
        products,
        items,
        customPackage,
        setProducts,
        setItems,
        setCustomPackage,
      }}>
        <section className={Styles['left-section']}>
          <Header />
          <IntroText />
          <hr />
          <Routes>
            <Route path="/receipt" element={<ReturnHome />} />
            <Route path="/cart" element={<CartSummary />} />
            <Route path="/checkout" element={<CheckoutSummary />} />
            <Route path="*" element={<Menu />} />
          </Routes>
        </section>
        <div className={Styles['right-section']}>
          <div id="divider" />
          <Routes>
            <Route path="/receipt" element={<ReceiptPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/for-events" element={<EventsPage />} />
            <Route path="/custom-package" element={<CustomPackagePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </ApplicationContext.Provider>
    </div>
  )
}

export default App
