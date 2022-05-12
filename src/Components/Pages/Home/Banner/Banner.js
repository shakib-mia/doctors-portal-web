import React from 'react';
import './Banner.css'
import chair from "../../../../assets/images/chair.png"

const Banner = () => {
      return (
            <div className="banner container mx-auto">
                  <div className='py-20 lg:py-56'>
                        <div className="hero-content flex-col lg:flex-row">
                              <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="Banner" />
                              <div>
                                    <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
                                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;