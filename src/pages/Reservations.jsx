import { useState } from 'react';
import { useReservations } from '../context/ReservationsContext';
import { Calendar, Clock, Users, CheckCircle, Phone, Mail } from 'lucide-react';
import './Reservations.css';

const Reservations = () => {
    const { addReservation } = useReservations();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2'
    });
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [confirmedReservation, setConfirmedReservation] = useState(null);

    const timeSlots = [
        '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
        '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
        '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
        '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
        '9:00 PM', '9:30 PM'
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields
        if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() ||
            !formData.date || !formData.time) {
            alert('Please fill in all fields');
            return;
        }

        // Create reservation
        const reservation = addReservation({
            ...formData,
            dateTime: `${formData.date} ${formData.time}`
        });

        setConfirmedReservation(reservation);
        setShowConfirmation(true);

        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            guests: '2'
        });
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Get minimum date (today)
    const today = new Date().toISOString().split('T')[0];
    const thirtyDaysFromNow = new Date(new Date().setDate(new Date().getDate() + 30)).toISOString().split('T')[0];

    return (
        <div className="reservations-page">
            <div className="container">
                <div className="reservations-header">
                    <h1>Make a Reservation</h1>
                    <p className="reservations-subtitle">Reserve your table for an unforgettable dining experience</p>
                </div>

                <div className="reservations-content">
                    {/* Reservation Form */}
                    <div className="reservation-form-section glass-card">
                        <form onSubmit={handleSubmit} className="reservation-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="name">
                                        Full Name *
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="input-field"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="email">
                                        <Mail size={14} /> Email *
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="input-field"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="phone">
                                    <Phone size={14} /> Phone Number *
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    className="input-field"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="(555) 123-4567"
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="date">
                                        <Calendar size={14} /> Date *
                                    </label>
                                    <input
                                        id="date"
                                        name="date"
                                        type="date"
                                        className="input-field"
                                        value={formData.date}
                                        onChange={handleChange}
                                        min={today}
                                        max={thirtyDaysFromNow}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="time">
                                        <Clock size={14} /> Time *
                                    </label>
                                    <select
                                        id="time"
                                        name="time"
                                        className="input-field"
                                        value={formData.time}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select time</option>
                                        {timeSlots.map((slot) => (
                                            <option key={slot} value={slot}>{slot}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="guests">
                                        <Users size={14} /> Guests *
                                    </label>
                                    <select
                                        id="guests"
                                        name="guests"
                                        className="input-field"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        required
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                            <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary">
                                <CheckCircle size={18} />
                                Confirm Reservation
                            </button>
                        </form>
                    </div>

                    {/* Info Section */}
                    <div className="info-section">
                        <div className="glass-card info-card">
                            <h3>Reservation Policy</h3>
                            <ul className="info-list">
                                <li>Reservations can be made up to 30 days in advance</li>
                                <li>Please arrive within 15 minutes of your reservation time</li>
                                <li>For parties of 8 or more, please call us directly</li>
                                <li>Cancellations should be made at least 24 hours in advance</li>
                            </ul>
                        </div>

                        <div className="glass-card info-card">
                            <h3>Opening Hours</h3>
                            <div className="hours-list">
                                <div className="hours-item">
                                    <span>Monday - Friday</span>
                                    <span>11:00 AM - 10:00 PM</span>
                                </div>
                                <div className="hours-item">
                                    <span>Saturday - Sunday</span>
                                    <span>10:00 AM - 11:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Confirmation Modal */}
            {showConfirmation && confirmedReservation && (
                <div className="overlay" onClick={() => setShowConfirmation(false)}>
                    <div className="modal confirmation-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="confirmation-icon">
                            <CheckCircle size={60} />
                        </div>
                        <h2>Reservation Confirmed!</h2>
                        <p className="confirmation-message">
                            Thank you, {confirmedReservation.name}! Your table has been reserved.
                        </p>

                        <div className="confirmation-details">
                            <div className="detail-item">
                                <Calendar size={20} />
                                <span>{formatDate(confirmedReservation.date)}</span>
                            </div>
                            <div className="detail-item">
                                <Clock size={20} />
                                <span>{confirmedReservation.time}</span>
                            </div>
                            <div className="detail-item">
                                <Users size={20} />
                                <span>{confirmedReservation.guests} {confirmedReservation.guests === '1' ? 'Guest' : 'Guests'}</span>
                            </div>
                        </div>

                        <p className="confirmation-note">
                            A confirmation email has been sent to {confirmedReservation.email}
                        </p>

                        <button className="btn btn-primary" onClick={() => setShowConfirmation(false)}>
                            Got it!
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Reservations;
