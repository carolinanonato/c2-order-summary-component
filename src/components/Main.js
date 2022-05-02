import React from 'react'
import hero from '../assets/images/illustration-hero.svg'
import music from '../assets/images/icon-music.svg'

function Main() {
    return (
        <div className='main-container'>
            <img src={hero} className="hero-image" alt="" />
            <p className="main-title">Order Summary</p>
            <p className='main-paragraph'>You can now listem to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            <div className="main-price">
                <img src={music} alt="" />
                <div className="main-plan">
                    <p className="plan-type">Annual Plan</p>
                    <p className='plan-price'>$59.99/year</p>
                </div>
                <a href="#">Change</a>
            </div>
            <button className="main-button">Proceed to Payment</button>
            <p>Cancel Order</p>
        </div >
    )
}

export default Main