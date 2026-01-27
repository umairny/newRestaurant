import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ReviewsProvider } from './context/ReviewsContext';
import { ReservationsProvider } from './context/ReservationsContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reviews from './pages/Reviews';
import Reservations from './pages/Reservations';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <CartProvider>
        <ReviewsProvider>
          <ReservationsProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/reservations" element={<Reservations />} />
              </Routes>
            </Layout>
          </ReservationsProvider>
        </ReviewsProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
