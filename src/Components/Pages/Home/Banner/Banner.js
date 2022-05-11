import React from 'react';
import './Banner.css'
import chair from "../../../../assets/images/chair.png"

const Banner = () => {
      return (
            <div className="banner container mx-auto">
                  <div className='py-56'>
                        <div class="hero-content flex-col lg:flex-row-reverse">
                              <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="Banner" />
                              <div>
                                    <h1 class="text-5xl font-bold">Your New Smile Starts Here!</h1>
                                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button class="btn btn-primary text-white">Get Started</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;