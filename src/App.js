import React from 'react';
import './App.css';
import WipeAnim from './Components/WipeAnim';

function App() {
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
            <section id="services" className="section">
                <h2>Our Services</h2>
                <p>We provide professional window cleaning services for residential and commercial properties.</p>
            </section>
            <section id="about" className="section">
                <h2>About Us</h2>
                <p>Learn more about our company and our commitment to providing excellent service.</p>
            </section>
            <section id="contact" className="section">
                <h2>Contact Us</h2>
                <p>Get in touch with us to schedule your window cleaning appointment.</p>
            </section>
            {/* <footer className="footer">
                <p>&copy; 2024 Figg Window Cleaning. All rights reserved.</p>
            </footer> */}
            <WipeAnim />
        </div>
    );
}

export default App;
