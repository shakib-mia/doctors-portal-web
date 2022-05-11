import React from 'react';
import fluoride from "../../../../assets/images/fluoride.png";
import cavity from "../../../../assets/images/cavity.png";
import whitening from "../../../../assets/images/whitening.png";
import Service from './Service';


const Services = () => {
      return (
            <div className='py-20'>
                  <div className='py-10'>
                        <h1 className='text-3xl text-center text-primary'>Our Services</h1>
                        <h1 className='text-xl text-center'>Services We Provide</h1>
                  </div>
                  <div className='hero'>
                        <div className='hero-content flex-col lg:flex-row gap-6 text-center'>
                              <Service image={fluoride} title="Fluoride Treatment" desc="lorem ipsum is simply dummy text"></Service>
                              <Service image={cavity} title="Cavity Filling" desc="lorem ipsum is simply dummy text"></Service>
                              <Service image={whitening} title="Teeth Whitening" desc="lorem ipsum is simply dummy text"></Service>
                        </div>
                  </div>
            </div>
      );
};

export default Services;