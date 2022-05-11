import React from 'react';

const Card = ({ img, title, desc, styles }) => {
      return (
            <div className={styles}> {/* 'flex bg-gradient-to-r from-secondary to-primary rounded py-4' */}
                  <img className='px-6' src={img} alt="clock" />
                  <div className='my-auto px-6 text-white'>
                        <p className='font-bold text-xl'>{title}</p>
                        <p>{desc}</p>
                  </div>
            </div>
      );
};

export default Card;