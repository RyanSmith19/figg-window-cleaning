import React from 'react';
import './App.css';
import WipeAnim from './Components/WipeAnim';

function App() {
    const phoneNumber = '(805) 539-5649';
    const phoneLink = `tel:${phoneNumber.replace(/[^0-9]/g, '')}`;
    const emailAddress = 'figgwindowcleaning@gmail.com';
    const emailLink = `mailto:${emailAddress}`;
    const facebookLink = 'https://www.facebook.com/profile.php?id=61560963135918&sk=about';

    return (
        <div className="App">
            <header className="header">
                <img src={`${process.env.PUBLIC_URL}/logoImage.png`} alt="Logo" className="logo" />
                {/* <h1>Figg's Window Cleaning</h1> */}
                {/* <nav>
                    <ul>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav> */}
            </header>
            <section id="about" className="section">
                <h2>About</h2>
                <p>Providing Professional Window Cleaning Services to the Central Coast Since 2017.</p>
                <p>At Figg Window Cleaning, we pride ourselves on delivering top-notch window cleaning services with unparalleled attention to detail. Our team of skilled professionals is dedicated to making your windows sparkle and shine, enhancing the beauty and clarity of your views.</p>
                {/* <p>We understand the importance of clean windows for both residential and commercial properties. Clean windows not only improve the appearance of your property but also allow more natural light to enter, creating a brighter and more inviting environment.</p> */}
            </section>
            <section id="services" className="section">
                <h2>Services</h2>
                <ul className="services-list">
                    <li>Exterior/Interior Windows</li>
                    <li>Window Tracks</li>
                    <li>Screens</li>
                    <li>Multi-story</li>
                    <li>Gutters</li>
                    <li>Blinds</li>
                    <li>Solar Panels</li>
                </ul>
                <p>Our comprehensive range of services ensures that every aspect of your windows is meticulously cleaned and maintained.</p>
            </section>
            <section id="contact" className="section">
                <h2>Contact Us</h2>
                <p>Get in touch with us to schedule your window cleaning appointment. We offer flexible scheduling options to accommodate your busy lifestyle.</p>
                <p>Call or Text Today!</p>
                <div className="contact-details">
                    <div className="phone-number">
                        <a href={phoneLink}>
                            <i className="fas fa-phone"></i>
                            {phoneNumber}
                        </a>
                    </div>
                    <div className="email-address">
                        <a href={emailLink}>
                            <i className="fas fa-envelope"></i>
                            {emailAddress}
                        </a>
                    </div>
                    <div className="social-media">
                        <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        {/* Add more social media links here if needed */}
                    </div>
                </div>
            </section>
            {/* <footer className="footer">
                <p>&copy; 2024 Figg Window Cleaning. All rights reserved.</p>
            </footer> */}
            <WipeAnim />
        </div>
    );
}

export default App;
