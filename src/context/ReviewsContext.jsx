import { createContext, useContext, useState, useEffect } from 'react';

const ReviewsContext = createContext();

export const useReviews = () => {
    const context = useContext(ReviewsContext);
    if (!context) {
        throw new Error('useReviews must be used within ReviewsProvider');
    }
    return context;
};

export const ReviewsProvider = ({ children }) => {
    const [reviews, setReviews] = useState(() => {
        const saved = localStorage.getItem('reviews');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }, [reviews]);

    const addReview = (review) => {
        const newReview = {
            ...review,
            id: Date.now().toString(),
            date: new Date().toISOString()
        };
        setReviews((prev) => [newReview, ...prev]);
    };

    const getAverageRating = () => {
        if (reviews.length === 0) return 0;
        const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
        return (sum / reviews.length).toFixed(1);
    };

    const getRatingDistribution = () => {
        const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        reviews.forEach((review) => {
            distribution[review.rating]++;
        });
        return distribution;
    };

    return (
        <ReviewsContext.Provider
            value={{
                reviews,
                addReview,
                getAverageRating,
                getRatingDistribution,
                getDishRating: (dishName) => {
                    const dishReviews = reviews.filter(r => r.dish === dishName);
                    if (dishReviews.length === 0) return null;
                    const sum = dishReviews.reduce((acc, review) => acc + review.rating, 0);
                    return (sum / dishReviews.length).toFixed(1);
                },
                getDishReviewCount: (dishName) => {
                    return reviews.filter(r => r.dish === dishName).length;
                }
            }}
        >
            {children}
        </ReviewsContext.Provider>
    );
};
