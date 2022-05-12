import React from 'react';
import "./testimonial.css";
import person from "../../../../assets/images/people1.png"

const Testimonial = () => {
      return (
            <div className="relative testimonial">
                  <div className='pt-36 bg-white w-full -top-48'>
                        <div className="container mx-auto">
                              <h6 className='text-primary font-bold text-xl'>Testimonial</h6>
                              <h3 className="text-4xl">What Our Patients Say</h3>
                              <div className='hero-content justify-between flex-col lg:flex-row py-16'>
                                    <div className='shadow-lg p-5'>
                                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking as its layout. The point of using Lorem Ipsum that it has a more-or-less normal distribution of letters, as opposed to using Content here,</p>
                                          <div className="hero-content justify-start">
                                                <img className='rounded-full p-1 border-sky-500 border-2' src={person} alt="" />
                                                <div>
                                                      <p>Winson Herry</p>
                                                      <p>California</p>
                                                </div>
                                          </div>
                                    </div>

                                    <div className='shadow-lg p-5'>
                                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking as its layout. The point of using Lorem Ipsum that it has a more-or-less normal distribution of letters, as opposed to using Content here,</p>
                                          <div className="hero-content justify-start">
                                                <img className='rounded-full p-1 border-sky-500 border-2' src={person} alt="" />
                                                <div>
                                                      <p>Winson Herry</p>
                                                      <p>California</p>
                                                </div>
                                          </div>
                                    </div>

                                    <div className='shadow-lg p-5'>
                                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking as its layout. The point of using Lorem Ipsum that it has a more-or-less normal distribution of letters, as opposed to using Content here,</p>
                                          <div className="hero-content justify-start">
                                                <img className='rounded-full p-1 border-sky-500 border-2' src={person} alt="" />
                                                <div>
                                                      <p>Winson Herry</p>
                                                      <p>California</p>
                                                </div>
                                          </div>
                                    </div>


                              </div>
                        </div>
                  </div>

            </div>
      );
};

export default Testimonial;