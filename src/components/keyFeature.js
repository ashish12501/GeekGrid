import React from 'react'
import './keyFeatures.css'
import card1 from '../assets/images/card1.png'
import card2 from '../assets/images/card2.png'
import card3 from '../assets/images/card3.png'



export function KeyFeature() {
    return (
        <div className='keyFeature'>
            <div className="keyContainer">
                <h2>Key Features of Us</h2>
                <p>Our Curriculum is designed to provide students with a high quality and effectivelearning experience. It features emerging and interactive content to keep students engaged and motivated.</p>
                <div className="keyCardContainer">
                    <div className='keyCard'>
                        <div className='keyCard-Top'>
                            <img src={card1} alt="" />
                        </div>
                        <div className='keyCard-Bottom'>

                        </div>
                        <h3>Blending Learning</h3>
                    </div>
                    <div className='keyCard'>
                        <div className='keyCard-Top'>
                            <img src={card2} alt="" />

                        </div>
                        <div className='keyCard-Bottom'>

                        </div>
                        <h3>Adaptive Learning</h3>
                    </div>
                    <div className='keyCard'>
                        <div className='keyCard-Top'>
                            <img src={card3} alt="" />

                        </div>
                        <div className='keyCard-Bottom'>

                        </div>
                        <h3>Social Learning</h3>
                    </div>
                </div>
            </div>
        </div >
    )
}

