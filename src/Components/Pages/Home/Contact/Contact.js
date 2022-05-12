import React from 'react';
import "./Contact.css"

const Contact = () => {
      return (
            <div className='contact-container py-20'>
                  <div className="container mx-auto">
                        <div className='contact-heading'>
                              <h5 className='text-primary font-bold text-center'>Contact Us</h5>
                              <h2 className='text-white text-5xl text-center'>Stay Connected with us</h2>
                        </div>

                        <form className="contact-body mx-auto w-11/12 lg:w-2/3 text-center py-6">
                              <input className='form-control w-full my-3 px-4 py-4 rounded-md' type="email" placeholder='Email Address' />
                              <input className='form-control w-full my-3 px-4 py-4 rounded-md' type="text" placeholder='Subject' />
                              <textarea rows="10" className='form-control w-full my-3 px-4 py-4 rounded-md' placeholder='Your Message'></textarea>
                              <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Submit</button>
                        </form>
                  </div>
            </div>
      );
};

export default Contact;