import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useReviews } from '../context/ReviewsContext';
import { menuData, getAllMenuItems } from '../data/menuData';
import { ShoppingCart, Plus, Minus, Trash2, X, Star } from 'lucide-react';
import './Menu.css';

const Menu = () => {
    const { cartItems, addToCart, updateQuantity, removeFromCart, getTotal, getItemCount, clearCart } = useCart();
    const { getDishRating, getDishReviewCount } = useReviews();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showCart, setShowCart] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);

    const categories = ['all', 'starters', 'mains', 'pasta', 'desserts', 'beverages'];

    const getDisplayItems = () => {
        if (selectedCategory === 'all') {
            return getAllMenuItems();
        }
        return menuData[selectedCategory] || [];
    };

    const handleCheckout = () => {
        setShowCheckout(true);
        setShowCart(false);
    };

    const handleOrderConfirm = () => {
        alert(`Order confirmed! Total: $${getTotal().toFixed(2)}\n\nYour order will be ready for pickup in 30-45 minutes.`);
        clearCart();
        setShowCheckout(false);
    };

    return (
        <div className="menu-page">
            <div className="container">
                {/* Header */}
                <div className="menu-header">
                    <h1>Our Menu</h1>
                    <p className="menu-subtitle">Explore our curated selection of exquisite dishes</p>

                    {/* Cart Button */}
                    <button className="cart-button btn btn-primary" onClick={() => setShowCart(true)}>
                        <ShoppingCart size={20} />
                        <span>Cart ({getItemCount()})</span>
                    </button>
                </div>

                {/* Category Filter */}
                <div className="category-filter">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Menu Items Grid */}
                <div className="menu-grid">
                    {getDisplayItems().map((item) => {
                        const rating = getDishRating(item.name);
                        const reviewCount = getDishReviewCount(item.name);

                        return (
                            <div key={item.id} className="menu-item glass-card">
                                <div className="menu-item-image">
                                    <img src={item.image} alt={item.name} className="img-cover" />
                                </div>
                                <div className="menu-item-content">
                                    <div className="menu-item-header">
                                        <div className="menu-item-title-row">
                                            <h3>{item.name}</h3>
                                            <span className="menu-item-price">${item.price.toFixed(2)}</span>
                                        </div>
                                        {rating && (
                                            <div className="dish-rating">
                                                <Star size={14} fill="var(--accent-gold)" stroke="var(--accent-gold)" />
                                                <span className="rating-value">{rating}</span>
                                                <span className="rating-count">({reviewCount})</span>
                                            </div>
                                        )}
                                    </div>
                                    <p className="menu-item-description">{item.description}</p>
                                    <button className="btn btn-secondary" onClick={() => addToCart(item)}>
                                        <Plus size={18} />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Cart Sidebar */}
            {showCart && (
                <div className="overlay" onClick={() => setShowCart(false)}>
                    <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
                        <div className="cart-header">
                            <h2>Your Order</h2>
                            <button className="close-btn" onClick={() => setShowCart(false)}>
                                <X size={24} />
                            </button>
                        </div>

                        <div className="cart-items">
                            {cartItems.length === 0 ? (
                                <p className="empty-cart">Your cart is empty</p>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={item.id} className="cart-item">
                                        <img src={item.image} alt={item.name} />
                                        <div className="cart-item-info">
                                            <h4>{item.name}</h4>
                                            <p className="cart-item-price">${item.price.toFixed(2)}</p>
                                        </div>
                                        <div className="cart-item-controls">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                                <Minus size={16} />
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                        <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <div className="cart-footer">
                                <div className="cart-total">
                                    <span>Total:</span>
                                    <span className="total-amount">${getTotal().toFixed(2)}</span>
                                </div>
                                <button className="btn btn-primary" onClick={handleCheckout}>
                                    Proceed to Checkout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Checkout Modal */}
            {showCheckout && (
                <div className="overlay" onClick={() => setShowCheckout(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h2>Order for Pickup</h2>
                        <p className="text-muted">Please confirm your order details</p>

                        <div className="checkout-summary">
                            {cartItems.map((item) => (
                                <div key={item.id} className="checkout-item">
                                    <span>{item.name} x{item.quantity}</span>
                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                            <div className="divider"></div>
                            <div className="checkout-total">
                                <strong>Total:</strong>
                                <strong className="text-gold">${getTotal().toFixed(2)}</strong>
                            </div>
                        </div>

                        <div className="checkout-actions">
                            <button className="btn btn-secondary" onClick={() => setShowCheckout(false)}>
                                Cancel
                            </button>
                            <button className="btn btn-primary" onClick={handleOrderConfirm}>
                                Confirm Order
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menu;
