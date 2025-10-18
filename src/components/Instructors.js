import React, { useState } from 'react';
import 'react-lightbox-component/build/css/index.css';
import './Instructors.css';

const instructors = [
    {
        name: 'Master Nicholas Houghton 6th Dan',
        picture: '/images/nic.png',
        bio: [
            'President - Worldwide Tang Soo(Soo Bahk) Do Union(WTSDU)',
            '',
            'Master Nicholas Houghton, 6th Dan, is a seasoned martial artist with over 35 years of experience in Tang Soo Do, having begun his training in 1989. He is the President and founder of the Worldwide Tang Soo(Soo Bahk) Do Union(WTSDU), an organisation established to preserve and grow the traditional values and techniques of Tang Soo(Soo Bahk) Do throughout the UK and internationally.',
            '',
            'A former student of the late Grandmaster U K Lee, Master Houghton also trained under Master P.V.M.Chin, President of the International Tang Soo Do Federation(ITSDF), before recently stepping away from the organisation to establish the WTSDU.With this distinguished lineage and decades of research, Master Houghton has developed an exciting, fuller syllabus that remains rooted in tradition while evolving to meet the needs of modern practitioners.',
            '',
            'Through the WTSDU, Master Houghton is dedicated to uniting martial artists across the globe under a shared commitment to technical excellence, discipline, and the enduring spirit of Tang Soo(Soo Bahk) Do.',
        ],
    },
    {
        name: "Chris Ward 3rd Dan",
        picture: '/images/chris.png',
        bio: [
            'Began training in Tang Soo Do in 1990 and teaching in the Oxford area since 2023, Kyo Sa Ward is England\'s senior instructor for the WTSDU. National champion from 2016 to 2024 and international competition gold and silver medallist in the 2025 ITSDF World Championship.',
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
            'Tom represented the United Kingdom in the 2025 ITSDF World Championships.'
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
        picture: '/images/stuart.png',
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