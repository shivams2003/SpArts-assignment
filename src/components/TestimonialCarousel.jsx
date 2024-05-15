import React, { useEffect, useState } from 'react';
import "../styles/TestimonialCarousel.css";

function TestimonialCarousel() {
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
        handleResize(); // Initial call to set the correct number of items per view

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>(prevIndex + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1));
    };

    return (
        <div className='testimonial__container'>
            <h2>Happy Kids, Satisfied Parents!</h2>
            <div className="testimonialCarousel">
                <div className="testimonialCarousel__items" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}>
                    {academies.map((academy, index) => (
                        <div key={index} className="testimonialCarousel__item">
                            <i className="fas fa-user-circle testimonialCarousel__avatar"></i>
                            <p className="testimonialCarousel__testimonial">"{academy.testimonial}"</p>
                            <p className="testimonialCarousel__academy">- {academy.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button className="testimonialCarouselButton" onClick={handlePrev} disabled={currentIndex<=0}>&#10094;</button>
            <button className="testimonialCarouselButton" onClick={handleNext}disabled={currentIndex>=academies.length - (itemsPerView-1)}>&#10095;</button>
        </div>
    );
}

export default TestimonialCarousel;
