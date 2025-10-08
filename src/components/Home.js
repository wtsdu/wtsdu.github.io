import React, { useEffect, useState } from 'react';
import logo from '../wtsdu-badge.png';
import './Home.css';
import About from './About'; 

function Home() {
    const [backgroundClass, setBackgroundClass] = useState('initial-bg');

    useEffect(() => {
        // Change background after 2 seconds
        const timer = setTimeout(() => {
            setBackgroundClass('final-bg');
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {/* Call-to-action section */}
            <div
                className={`App-content ${backgroundClass}`}
            >
                <div className="cta-container">
                    <img src={logo} className="App-logo animate-logo" alt="logo" />
                    <div className="text-container animate-text">
                        <h1 className="cta-heading">Worldwide Tang Soo (Soo Bahk) Do Union</h1>
                        <p className="cta-subtext">Join us and discover the benefits of training today!</p>
                    </div>
                </div>
            </div>
            <About/>
        </div>
    );
}

export default Home;
