import React from 'react';
import "../styles/SubscribeSection.css";

function SubscribeSection() {
    return (
        <div className="subscribe__container">
            <h2>Stay Updated</h2>
            <p>Get the latest updates on academies near you!</p>
            <form className="subscribe__form">
                <input type="email" placeholder="E-mail" className="subscribe__input" required />
                <button type="submit" className="subscribe__button">Subscribe</button>
            </form>
        </div>
    );
}

export default SubscribeSection;
