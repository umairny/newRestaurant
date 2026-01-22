import { useState } from 'react';
import { useReviews } from '../context/ReviewsContext';
import { getAllMenuItems } from '../data/menuData';
import { Star, Send } from 'lucide-react';
import './Reviews.css';

const Reviews = () => {
    const { reviews, addReview, getAverageRating } = useReviews();
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [selectedDish, setSelectedDish] = useState('');

    const menuItems = getAllMenuItems();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating === 0 || !name.trim() || !comment.trim()) {
            alert('Please fill in all fields and select a rating');
            return;
        }

        addReview({
            rating,
            name: name.trim(),
            comment: comment.trim(),
            dish: selectedDish
        });
        setRating(0);
        setName('');
        setComment('');
        setSelectedDish('');
        alert('Thank you for your review!');
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const renderStars = (count, interactive = false) => {
        return (
            <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        size={interactive ? 28 : 20}
                        fill={star <= (interactive ? (hoverRating || rating) : count) ? 'var(--accent-gold)' : 'transparent'}
                        stroke={star <= (interactive ? (hoverRating || rating) : count) ? 'var(--accent-gold)' : 'var(--text-muted)'}
                        className={interactive ? 'star interactive' : 'star'}
                        onClick={interactive ? () => setRating(star) : undefined}
                        onMouseEnter={interactive ? () => setHoverRating(star) : undefined}
                        onMouseLeave={interactive ? () => setHoverRating(0) : undefined}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="reviews-page">
            <div className="container">
                {/* Header with Average Rating */}
                <div className="reviews-header">
                    <h1>Ratings & Reviews</h1>
                    {reviews.length > 0 && (
                        <div className="average-rating glass-card">
                            <div className="rating-number">{getAverageRating()}</div>
                            {renderStars(Math.round(getAverageRating()))}
                            <p className="rating-count">Based on {reviews.length} review{reviews.length !== 1 ? 's' : ''}</p>
                        </div>
                    )}
                </div>

                <div className="reviews-content">
                    {/* Review Form */}
                    <div className="review-form-section">
                        <div className="glass-card">
                            <h2>Share Your Experience</h2>
                            <form onSubmit={handleSubmit} className="review-form">
                                <div className="form-group">
                                    <label className="form-label">Your Rating *</label>
                                    {renderStars(rating, true)}
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="name">Your Name *</label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="input-field"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="dish">Dish (Optional)</label>
                                    <select
                                        id="dish"
                                        className="input-field"
                                        value={selectedDish}
                                        onChange={(e) => setSelectedDish(e.target.value)}
                                    >
                                        <option value="">Select a dish...</option>
                                        {menuItems.map((item) => (
                                            <option key={item.id} value={item.name}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="comment">Your Review *</label>
                                    <textarea
                                        id="comment"
                                        className="input-field"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        placeholder="Tell us about your experience..."
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    <Send size={18} />
                                    Submit Review
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Reviews List */}
                    <div className="reviews-list-section">
                        <h2>Customer Reviews</h2>
                        {reviews.length === 0 ? (
                            <div className="glass-card">
                                <p className="no-reviews">No reviews yet. Be the first to share your experience!</p>
                            </div>
                        ) : (
                            <div className="reviews-list">
                                {reviews.map((review) => (
                                    <div key={review.id} className="review-card glass-card">
                                        <div className="review-header">
                                            <div className="review-author">
                                                <div className="author-avatar">
                                                    {review.name.charAt(0).toUpperCase()}
                                                </div>
                                                <div>
                                                    <h4>{review.name}</h4>
                                                    <div className="review-meta">
                                                        <span className="review-date">{formatDate(review.date)}</span>
                                                        {review.dish && (
                                                            <span className="review-dish">• Reviewed: {review.dish}</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            {renderStars(review.rating)}
                                        </div>
                                        <p className="review-comment">{review.comment}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
