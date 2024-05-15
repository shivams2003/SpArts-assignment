import React, { useEffect, useState } from 'react';
import "../styles/AcademyCarousel.css";

function AcademyCarousel() {
    const [academies, setAcademies] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(5);

    useEffect(() => {
        fetch('https://sparts-backend-production.up.railway.app/api/academies')
            .then(response => response.json())
            .then(data => setAcademies(data))
            .catch(error => console.error('Error fetching data:', error));
        
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setItemsPerView(2);
            } else if (window.innerWidth <= 768) {
                setItemsPerView(3);
            } else if (window.innerWidth <= 1024) {
                setItemsPerView(4);
            } else {
                setItemsPerView(5);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1));
    };

    return (
        <div className='academy__container'>
            <h2 className='academyCarouselHeading'>Explore Our Top Academies</h2>
            <div className="academyCarousel">
                <div className="academyCarousel__items" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}>
                    {academies.map((academy, index) => (
                        <div key={index} className="academyCarousel__item">
                            <img src={academy.imageUrl} alt={`${academy.name} logo`} className="academyCarousel__image" />
                            <div className="academyCarousel__text">
                                <h3>{academy.name}</h3>
                                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                    {academy.services.map((service, i) => (
                                        <li key={i}>{service}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="academyCarouselButton" onClick={handlePrev} disabled={currentIndex <= 0}>&#10094;</button>
            <button className="academyCarouselButton" onClick={handleNext} disabled={currentIndex >= academies.length - (itemsPerView-1)}>&#10095;</button>
        </div>
    );
}

export default AcademyCarousel;
