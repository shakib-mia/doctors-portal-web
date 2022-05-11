import clock from "../../../../assets/icons/clock.svg";
import phone from "../../../../assets/icons/phone.svg";
import marker from "../../../../assets/icons/marker.svg";
import React from 'react';

const Infos = () => {
      return (

            <div className="hero bg-base-500">
                  <div className="hero-content flex-col lg:flex-row">
                        <div className='flex bg-gradient-to-r from-secondary to-primary rounded py-4'>
                              <img className='px-6' src={clock} alt="clock" />
                              <div className='my-auto px-6 text-white'>
                                    <p className='font-bold text-xl'>Opening Hours</p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, itaque!</p>
                              </div>
                        </div>
                        <div className='flex bg-zinc-800 rounded py-4'>
                              <img className='px-6' src={marker} alt="clock" />
                              <div className='my-auto px-6 text-white'>
                                    <p className='font-bold text-xl'>Visit Our Location</p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, itaque!</p>
                              </div>
                        </div>
                        <div className='flex bg-gradient-to-r from-secondary to-primary rounded py-4'>
                              <img className='px-6' src={phone} alt="clock" />
                              <div className='my-auto px-6 text-white'>
                                    <p className='font-bold text-xl'>Contact Us Now</p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, itaque!</p>
                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default Infos;