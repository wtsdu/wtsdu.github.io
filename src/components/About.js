import React, { useEffect } from 'react';
import './About.css';

const About = () => {
    const sections = [
        {
            title: "What is Tang Soo (Soo Bhak) Do?",
            content: `Tang Soo Do is a Korean Martial Art much the same as karate and can include fighting principles from Tai Chi, Taekkyeon and Subak, as well as northern and southern Chinese martial arts. From its beginnings in 1944 to today, Tang Soo Do is used by some Kwans to identify their traditional Korean fusion of fighting styles.`,
        },
        {
            title: "Our Mission Statement",
            content: `"Two Badges, On Vision"

            The worldwide Tang Soo (Soo Bahk) Do Union (WTSDU) was founded on the principal of unity through diversity, evaolving from humbble beginings into a globbal martial arts community.

            Originally estabblished as Tang Soo Do Cymru, Master Houghton created the organisation to preserve and honor the legacy of his instructor, Master PVM Chin, while fostering a martial arts evironment free from political interference and organisational rigidity.

            The turning point came when Master Houghton was approached by an Egyptian colleauge in need of support for a club of special needs students. Recognising the value of structure and opppertunity, Master Houghton provided guidence and a syllabus that soon gained recognition and endorsement from the Egyptian governement - sparking interest from neighbbouring North African couontries. This international momentum, combbined with increasing interest from English practitioner seeking a professional and inclusive training environment, led to the formation of the WTSDU.

            Today, the WTSDU offers a dynamic platform where clubs from around the world can affiliate, grow, and train under a high-quality, standardised syllabus while maintaining their own governance and cultural identity. This is symbolised in the “Two Badges, One Vision” ethos: each club retains its own badge worn proudly on the left breast, alongside the WTSDU badge on the left arm—reflecting both local heritage and global unity.

            The Worldwide (UK) Tang Soo (Soo Bahk) Do Union now serves as the UK branch and foundation of the broader WTSDU network, welcoming other clubs and countries into a partnership based on respect, autonomy, and excellence.

            Our mission is to:

            Provide a high-standard, inclusive curriculum rooted in tradition and adapted for modern needs.

            Enable clubs to govern themselves while participating in shared grading, seminars, and competitions.

            Foster international collaboration and community without sacrificing individual identity or values.

            WTSDU stands not just as an organisation but as a family—united in purpose, diverse in culture, and committed to preserving the true spirit of Tang Soo (Soo Bahk) Do.

            In a nutshell,  the idea of the WTSDU is to foster a community of martial artists dedicated to personal growth, physical and mental wellbeing, and the preservation and advancement of martial arts traditions through education, competition and service.

            To be welcoming to all ages, abilities, and backgrounds.

            To provide opportunities for all members of the WTSDU to develop their skill through the provision of high-quality coaching and competitive opportunities.

            To create strong links with other clubs, countries, and WTSDU members.
            `,
        },
        {
            title: "United Kingdom History",
            content: `The Worldwide (UK) Tang Soo (Soo Bahk) Do Union now serves as the UK branch and foundation of the broader WTSDU network, welcoming other clubs and countries into a partnership based on respect, autonomy, and excellence.`,
        },
        {
            title: "Benefits of Training with us",
            content: `"I hear and I forget; I see, and I remember; I do, and I understand." 
            - Confucius.

            Self confidence

            Improve self-esteem.

            Self-empowerment.

            Physical fitness and self-improvement.

            Self defence.

            Peace of mind.

            Enhanced awareness.

            Betterment of health and longevity of life.`,
        },
        {
            title: "Our style - Joong Gan Ryu (Middle Way Style)",
            content: `Joong Gan Ryu (Middle Way Style) Utilises hard / soft, light / heavy, active, and passive types of movements. The softer / heavier movements are like the northern Chinese styles, where the lighter / active movements are like the Southern Chinese styles. All these factors make Soo Bahk Do a very versatile, challenging martial art.`,
        },
        {
            title: "Main aims and basic principles of the WTSDU",
            content: `1. Be loyal to your king and country.

                      2. Obedience to parents and elders.

                      3. Respect your instructor.

                      4. Self-control.

                      5. Never misuse your art.`,
        },
        {
            title: "Main Aims laid down by the WTSDU",
            content: `1. Foster goodwill and friendship among affiliated members.

                    2. Supervise and maintain the rules and regulations of Tang Soo Do.

                    3. Organise National and international events or championships.

                    4. Organise proper guidance on training programmes.

                    5. To assist in the formation of Tang Soo Do clubs in the United Kingdom.`,
        },
    ];

    useEffect(() => {
        const handleVisibility = () => {
            const elements = document.querySelectorAll('.section');
            elements.forEach((el) => {
                // const rect = el.getBoundingClientRect();
                // doesn't work for some reason??
                //if (rect.top < window.innerHeight) {
                //    el.classList.add('visible');
                //}
                el.classList.add('visible');
            });
        };

        // Check visibility on page load
        handleVisibility();

        // Add scroll event listener
        window.addEventListener('scroll', handleVisibility);

    }, []);

    return (
        <div className="About">
        <div className="sectionPage">
            {sections.map((section, index) => (
                <div
                    key={index}
                    className={`section ${index % 2 === 0 ? 'light-bg' : 'dark-bg'}`}
                >
                    <h2 className="section-title">{section.title}</h2>
                    <p className="section-content">{section.content}</p>
                </div>
            ))}
            </div>
        </div>
    );
};

export default About;
