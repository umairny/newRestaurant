import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-page">
            <div className="container">
                <div className="contact-header">
                    <h1>Contact Us</h1>
                    <p className="contact-subtitle">We'd love to hear from you</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-card glass-card">
                        <div className="contact-icon">
                            <MapPin />
                        </div>
                        <h3>Location</h3>
                        <p>123 Culinary Boulevard</p>
                        <p>Gourmet District</p>
                        <p>New York, NY 10001</p>
                    </div>

                    <div className="contact-card glass-card">
                        <div className="contact-icon">
                            <Phone />
                        </div>
                        <h3>Phone</h3>
                        <p>(555) 123-4567</p>
                        <p>Mon - Fri: 10 AM - 10 PM</p>
                        <p>Sat - Sun: 9 AM - 11 PM</p>
                    </div>

                    <div className="contact-card glass-card">
                        <div className="contact-icon">
                            <Mail />
                        </div>
                        <h3>Email</h3>
                        <p>info@tastebudterrace.com</p>
                        <p>reservations@tastebudterrace.com</p>
                        <p>events@tastebudterrace.com</p>
                    </div>

                    <div className="contact-card glass-card">
                        <div className="contact-icon">
                            <Clock />
                        </div>
                        <h3>Hours</h3>
                        <p><strong>Lunch:</strong> 11 AM - 3 PM</p>
                        <p><strong>Dinner:</strong> 5 PM - 10 PM</p>
                        <p><strong>Weekend Brunch:</strong> 10 AM - 2 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
