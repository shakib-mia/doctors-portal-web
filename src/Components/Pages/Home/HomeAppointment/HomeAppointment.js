import React from 'react';
import doctor from "../../../../assets/images/doctor.png"
import "./HomeAppointment.local.css"

const HomeAppointment = () => {
      return (
            <section className='my-48 appointment'>
                  <div className='hero-content mx-auto'>
                        <div className="container relative hidden lg:block">
                              <img src={doctor} alt="" className='absolute' />
                        </div>
                        <div className="container py-10">
                              <h6 className='text-primary font-bold text-lg'>Appointment</h6>
                              <h1 className='my-7 text-4xl font-bold text-white'>Make an Appointment Today</h1>
                              <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking as its layout. The point of using Lorem Ipsum that it has a more-or-less normal distribution of letters, as opposed to using Content here, making it look like readable English. Many desktop publishing packages and web pages.</p>
                              <button className="btn btn-primary text-white my-4 font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                        </div>
                  </div>
            </section>
      );
};

export default HomeAppointment;