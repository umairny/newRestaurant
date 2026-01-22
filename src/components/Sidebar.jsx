import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Utensils, Menu as MenuIcon, Star, Phone, Info, Calendar, X, Home } from 'lucide-react';
import logo from '../assets/images/restaurant_logo.png';
import './Sidebar.css';

const Sidebar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const menuItems = [
        { path: '/', icon: Home, label: 'Home' },
        { path: '/menu', icon: Utensils, label: 'Menu' },
        { path: '/reviews', icon: Star, label: 'Ratings & Reviews' },
        { path: '/contact', icon: Phone, label: 'Contact Us' },
        { path: '/about', icon: Info, label: 'About Us' },
        { path: '/reservations', icon: Calendar, label: 'Reservations' }
    ];

    return (
        <>
            <button className="mobile-toggle" onClick={toggleSidebar}>
                {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
            <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}></div>
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-logo">
                    <Link to="/" onClick={() => setIsOpen(!isOpen)}>
                        <img src={logo} alt="Tastebud" className="logo-image" />
                    </Link>
                    <h2 className="logo-text">Tastebud</h2>
                    <p className="logo-subtitle">WHERE EVERY DISH TELLS A STORY</p>
                </div>

                <nav className="sidebar-nav">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`nav-item ${isActive ? 'active' : ''}`}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <Icon size={20} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
