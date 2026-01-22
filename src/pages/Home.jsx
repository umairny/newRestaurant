import { Link } from 'react-router-dom';
import { Utensils, ArrowRight } from 'lucide-react';
import { getFeaturedItems } from '../data/menuData';
import './Home.css';

import logo from '../assets/images/restaurant_logo.png';
import reviewsImg from '../assets/images/pasta_dish_1768588173101.png';
import reservationsImg from '../assets/images/grilled_chicken_1768588186487.png';

const Home = () => {
    const featuredItems = getFeaturedItems();

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-icon">
                        <img src={logo} alt="Tastebud" className="logo-image-home" />
                    </div>

                    <h1 className="hero-title">Tastebud</h1>
                    <p className="hero-tagline">WHERE EVERY DISH TELLS A STORY</p>
                </div>
            </section>

            {/* Featured Menu */}
            <section className="featured-section">
                <div className="container">
                    <div className="section-header">
                        <h2>VIEW OUR FULL MENU</h2>
                        <div className="header-divider"></div>
                    </div>

                    <div className="featured-grid">
                        {featuredItems.map((item) => (
                            <div key={item.id} className="featured-card glass-card">
                                <div className="featured-image">
                                    <img src={item.image} alt={item.name} className="img-cover" />
                                </div>
                                <div className="featured-info">
                                    <h3>{item.name}</h3>
                                    <p className="featured-description">{item.description}</p>
                                    <p className="featured-price">${item.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cta-buttons">
                        <Link to="/menu" className="btn btn-primary">
                            View Full Menu <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Action Cards */}
            <section className="action-section">
                <div className="container">
                    <div className="action-grid">
                        <Link to="/reviews" className="action-card glass-card">
                            <div className="action-overlay">
                                <h3>SEE WHAT OTHERS ARE SAYING</h3>
                                <p>Read reviews from our delighted guests</p>
                            </div>
                            <img src={reviewsImg} alt="Reviews" className="img-cover" />
                        </Link>

                        <Link to="/reservations" className="action-card glass-card">
                            <div className="action-overlay">
                                <h3>MAKE A RESERVATION</h3>
                                <p>Book your table for an unforgettable experience</p>
                            </div>
                            <img src={reservationsImg} alt="Reservations" className="img-cover" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
