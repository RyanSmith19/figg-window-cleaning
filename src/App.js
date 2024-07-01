import React from 'react';
import './App.css';
import WipeAnim from './Components/WipeAnim';

function App() {
    const phoneNumber = '(805) 539-5649';

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
                <h2>About Us</h2>
                <p>Providing Professional Window Cleaning Services to the Central Coast Since 2017</p>
            </section>
            <section id="services" className="section">
                <h2>Our Services</h2>
                <ul className="services-list">
                    <li>Exterior/Interior Windows</li>
                    <li>Window Tracks</li>
                    <li>Screens</li>
                    <li>Multi-story</li>
                    <li>Gutters</li>
                    <li>Blinds</li>
                    <li>Solar Panels</li>
                </ul>
            </section>
            <section id="contact" className="section">
                <h2>Contact Us</h2>
                <p>Get in touch with us to schedule your window cleaning appointment.</p>
                <p>Call or Text Today!</p>
                <div className="phone-number">
                    <i className="fas fa-phone"></i>
                    {phoneNumber}
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
