import React from 'react';
import './styles.css';

const App = () => {
    return (
        <div>
            <header className="navbar">
                <div className="logo">e-Learn</div>
                <nav>
                    <ul>
                        <li><a href="/courses" target="_blank">Courses</a></li>
                        <li><a href="/about" target="_blank">About</a></li>
                        <li><a href="/contact" target="_blank">Contact</a></li>
                        <li><a href="/login" target="_blank" className="btn">Login</a></li>
                    </ul>
                </nav>
            </header>
            
            <section className="hero">
                <h1>Welcome to e-Learn</h1>
                <p>Enhance your skills with our premium courses.</p>
                <a href="/courses" target="_blank" className="cta-button">Explore Courses</a>
            </section>
            
            <section className="features">
                <div className="feature-card">
                    <h2>Interactive Learning</h2>
                    <p>Engage with hands-on tutorials and exercises.</p>
                </div>
                <div className="feature-card">
                    <h2>Expert Instructors</h2>
                    <p>Learn from industry-leading professionals.</p>
                </div>
                <div className="feature-card">
                    <h2>Certifications</h2>
                    <p>Receive certificates to showcase your skills.</p>
                </div>
            </section>
            
            <footer className="footer">
                <p>&copy; 2025 e-Learn | All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default App;
