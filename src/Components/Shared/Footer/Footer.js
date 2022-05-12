import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
      return (
            <div className='container mx-auto'>
                  <div className='py-10 flex flex-wrap justify-between px-4'>
                        <div className='py-3'>
                              <h3 className='text-2xl font-bold'>SERVICES</h3>
                              <Link className='block my-4' to="/">Emergency Checkup</Link>
                              <Link className='block my-4' to="/">Monthly Checkup</Link>
                              <Link className='block my-4' to="/">Weekly Checkup</Link>
                              <Link className='block my-4' to="/">Deep Checkup</Link>
                        </div>
                        <div className='py-3'>
                              <h3 className='text-2xl font-bold'>ORAL HEALTH</h3>
                              <Link className='block my-4' to="/">Fluoride Treatment</Link>
                              <Link className='block my-4' to="/">Cavity Filling</Link>
                              <Link className='block my-4' to="/">Teeth Whitening</Link>
                        </div>
                        <div className='py-3'>
                              <h3 className='text-2xl font-bold'>OUR ADDRESS</h3>
                              <Link className='block my-4' to="/">New York - 101010 Hudson</Link>
                        </div>

                  </div>
                  <p className='text-center py-3'>Copyright 2022 Alright Reserved</p>
            </div>
      );
};

export default Footer;