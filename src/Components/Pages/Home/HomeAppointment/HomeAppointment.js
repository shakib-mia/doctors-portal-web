import React from 'react';
import doctor from "../../../../assets/images/doctor.png"
import "./HomeAppointment.local.css"

const HomeAppointment = () => {
      return (
            <section className='my-48'>
                  <div className='hero-content mx-auto'>
                        <div className="container relative hidden lg:block">
                              <img src={doctor} alt="" className='absolute' />
                        </div>
                        <div className="container my-10 lg:my-28">
                              <h6 className='text-primary font-bold text-lg'>Appointment</h6>
                              <h1 className='text-4xl font-bold text-white'>Make an Appointment Today</h1>
                              <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking as its layout. The point of using Lorem Ipsum that it has a more-or-less normal distribution of letters, as opposed to using Content here, making it look like readable English. Many desktop publishing packages and web pages.</p>
                        </div>
                  </div>
            </section>
      );
};

export default HomeAppointment;