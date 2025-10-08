import React, { useState } from 'react';
import Lightbox from 'react-lightbox-component';
import 'react-lightbox-component/build/css/index.css';
import './Instructors.css';

const instructors = [
    {
        name: 'Master Nicholas Houghton 6th Dan',
        picture: '/images/nic.png',
        bio: [
            'As the lead instructor for South Wales, Master Houghton 6th Dan continues to pass down the knowledge from his instructor. Starting training in martial arts in 1988 beginning with Judo and boxing and continuing with Tang Soo Do in 1990.',
            'After relocating to South Wales 2004 he set up Tang Soo Do Cymru, with the help of his assistant instructors he runs 11 classes each week including after school clubs and ladies only sessions.',
            'Master Houghton had his first international trip in 1993, taking part in the United Kingdom demonstration team, also competing in the Greece National Championships winning second place.',
            'Master Houghton was encouraged to cross train and gain experience in many different combat styles of martial arts including Judo, Ninjutsu, Muay Thai, Boxing, MMA, Karate, krav maga and Jiujitsu.',
        ],
    },
    {
        name: "Chris Ward 3rd Dan",
        picture: '/images/chris.png',
        bio: [
            '',
        ],
    },
    {
        name: "Rhiannon O'Neil 3rd Dan",
        picture: '/images/rhix.jpeg',
        bio: [
            'Assistant Instructor for Tiny Tigers, Dragons and Mixed session.',
            'Rhix started Tang Soo Do in 2007 at the age of 12, taking part in world championships in Malaysia (2015), UK (2018), and competing again in the UK (2025).'
        ],
    },
    {
        name: 'Tom Jenkins-Welch 2nd Dan',
        picture: '/images/tom.png',
        bio: [
            'Dragons instructor and assistant in mixed sessions.',
            'Tom is preparing for his first world championships in the United Kingdom in September 2025.'
        ],
    },
    {
        name: 'David Shaw 3rd Dan',
        picture: '/images/david.png',
        bio: [
            'Assistant in the mixed sessions.',
            'David has taken part in the United Kingdom world championships in 2018, winning second place.'
        ],
    },
    {
        name: 'Emma Mudie 2nd Dan',
        picture: '/images/emma.jpeg',
        bio: [
            'Lead instructor for Tiny Tigers, safeguarding officer, Ladies class instructor and assistant for mixed sessions and Dragons.',
            'Emma first got involved in Tang Soo Do when her son Jack joined in 2015.',
            'Emma retired as a Police Officer after 30 years of service specialising in children and safeguarding.'
        ],
    },
    {
        name: 'Stuart Dimond 2nd Dan',
        picture: '/images/stuart.jpeg',
        bio: [
            '',
        ],
    },
    {
        name: 'Graham Keable 2nd Dan',
        picture: '/images/graham.png',
        bio: [
            '',
        ],
    },
];

const Instructors = () => {
    const [selectedInstructor, setSelectedInstructor] = useState(null);

    return (
        <div className="sectionPage">
            <h2 className="page-title">Our Instructors</h2>
            <div className="instructor-grid">
                {instructors.map((instructor, index) => (
                    <div
                        key={index}
                        className="instructor-card"
                        onClick={() => setSelectedInstructor(instructor)}
                    >
                        <img src={instructor.picture} alt={instructor.name} />
                        <h3>{instructor.name}</h3>
                    </div>
                ))}
            </div>

            {selectedInstructor && (
                <div className="lightbox-overlay" onClick={() => setSelectedInstructor(null)}>
                    <div
                        className="lightbox-content"
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                    >
                        <button className="lightbox-close" onClick={() => setSelectedInstructor(null)}>
                            &times;
                        </button>
                        <img
                            src={selectedInstructor.picture}
                            alt={selectedInstructor.name}
                            className="lightbox-image"
                        />
                        <div className="lightbox-bio">
                            {selectedInstructor.bio.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Instructors;