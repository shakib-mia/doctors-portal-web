import React from 'react';

const Service = ({ image, imageAlt, title, desc }) => {
      return (
            <div className='shadow-lg px-5 py-4'>
                  <img src={image} alt={imageAlt} className='mx-auto' />
                  <h5 className='text-xl font-bold'>{title}</h5>
                  <p>{desc}</p>
            </div>

      );
};

export default Service;