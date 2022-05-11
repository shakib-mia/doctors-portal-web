import React from 'react';
import fluoride from "../../../../assets/images/fluoride.png";
import cavity from "../../../../assets/images/cavity.png";
import whitening from "../../../../assets/images/whitening.png";


const Services = () => {
      return (
            <div className='py-20'>
                  <div className='py-10'>
                        <h1 className='text-3xl text-center text-primary'>Our Services</h1>
                        <h1 className='text-xl text-center'>Services We Provide</h1>
                  </div>
                  <div className='hero'>
                        <div className='hero-content flex-col lg:flex-row gap-6 text-center'>
                              <div className='shadow-lg px-5 py-4'>
                                    <img src={fluoride} alt="Fluoride" className='mx-auto' />
                                    <h5 className='text-xl font-bold'>Fluoride Treatment</h5>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, doloremque?</p>
                              </div>
                              <div className='shadow-lg px-5 py-4'>
                                    <img src={cavity} alt="Fluoride" className='mx-auto' />
                                    <h5 className='text-xl font-bold'>Cavity Filling</h5>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, doloremque?</p>
                              </div>
                              <div className='shadow-lg px-5 py-4'>
                                    <img src={whitening} alt="Fluoride" className='mx-auto' />
                                    <h5 className='text-xl font-bold'>Teeth Whitening</h5>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, doloremque?</p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Services;