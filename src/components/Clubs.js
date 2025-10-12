import React, { useEffect } from 'react'
import './About.css'

const Clubs = () => {

    const clubs = [
        {
            name: "United Kingdom",
            description: "The Worldwide (UK) Tang Soo (Soo Bahk) Do Union now serves as the UK branch and foundation of the broader WTSDU network, welcoming other clubs and countries into a partnership based on respect, autonomy, and excellence.",
            logo: "images/uk-badge.png"
        },
    ];

    useEffect(() => {
        const sections = document.querySelectorAll('.section');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            {
                threshold: 0.2, // triggers when 20% of section is visible
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="sectionPage">
            {clubs.map((club, index) => (
                <div
                    key={index}
                    className={`section ${index % 2 === 0 ? 'light-bg' : 'dark-bg'}`}
                >
                    <div className="section-image">
                        <img src={club.logo} alt={club.name} />
                    </div>
                    <h2 className="section-title">{club.name}</h2>
                    <p className="section-content">{club.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Clubs