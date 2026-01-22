import { createContext, useContext, useState, useEffect } from 'react';

const ReservationsContext = createContext();

export const useReservations = () => {
    const context = useContext(ReservationsContext);
    if (!context) {
        throw new Error('useReservations must be used within ReservationsProvider');
    }
    return context;
};

export const ReservationsProvider = ({ children }) => {
    const [reservations, setReservations] = useState(() => {
        const saved = localStorage.getItem('reservations');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('reservations', JSON.stringify(reservations));
    }, [reservations]);

    const addReservation = (reservation) => {
        const newReservation = {
            ...reservation,
            id: Date.now().toString(),
            createdAt: new Date().toISOString()
        };
        setReservations((prev) => [newReservation, ...prev]);
        return newReservation;
    };

    const getUpcomingReservations = () => {
        const now = new Date();
        return reservations.filter((res) => {
            const resDate = new Date(res.date);
            return resDate >= now;
        }).sort((a, b) => new Date(a.date) - new Date(b.date));
    };

    const cancelReservation = (id) => {
        setReservations((prev) => prev.filter((res) => res.id !== id));
    };

    return (
        <ReservationsContext.Provider
            value={{
                reservations,
                addReservation,
                getUpcomingReservations,
                cancelReservation
            }}
        >
            {children}
        </ReservationsContext.Provider>
    );
};
