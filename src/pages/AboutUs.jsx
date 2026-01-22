import { ChefHat, Heart, Award } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-page">
            <div className="container">
                <div className="about-header">
                    <h1>About Tastebud Terrace</h1>
                    <p className="about-subtitle">Where Every Dish Tells a Story</p>
                </div>

                <div className="about-content">
                    <div className="about-story glass-card">
                        <h2>Our Story</h2>
                        <p>
                            Founded in 2020, Tastebud Terrace was born from a passion for exceptional cuisine and memorable dining experiences.
                            Our journey began with a simple vision: to create a space where every meal becomes an unforgettable moment.
                        </p>
                        <p>
                            We believe that great food brings people together. Each dish on our menu is crafted with care,
                            using the finest locally-sourced ingredients and time-honored culinary techniques passed down through generations.
                        </p>
                    </div>

                    <div className="about-values">
                        <div className="value-card glass-card">
                            <div className="value-icon">
                                <ChefHat size={40} />
                            </div>
                            <h3>Culinary Excellence</h3>
                            <p>Our chefs bring decades of experience, combining traditional techniques with modern innovation to create extraordinary dishes.</p>
                        </div>

                        <div className="value-card glass-card">
                            <div className="value-icon">
                                <Heart size={40} />
                            </div>
                            <h3>Passion & Quality</h3>
                            <p>We are committed to using only the finest ingredients, sourced sustainably from local farms and trusted suppliers.</p>
                        </div>

                        <div className="value-card glass-card">
                            <div className="value-icon">
                                <Award size={40} />
                            </div>
                            <h3>Award-Winning</h3>
                            <p>Recognized for our exceptional service and cuisine, we've earned the trust and praise of food critics and diners alike.</p>
                        </div>
                    </div>

                    <div className="about-team glass-card">
                        <h2>Meet Our Team</h2>
                        <p>
                            Led by Executive Chef Maria Rodriguez, our culinary team consists of talented chefs and staff dedicated to
                            delivering an exceptional dining experience. With expertise spanning French, Italian, and contemporary fusion cuisine,
                            we create dishes that delight all the senses.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
