import React, { useState } from 'react';
import BookingModal from './BookingModal';

const Booking = ({ service }) => {
      let { name, slots } = service;
      // console.log(name)
      const [spService, setSpService] = useState()

      return (
            <div className="card w-96 bg-base-100 mx-auto shadow-xl">
                  <div className="card-body">
                        <h2 className="card-title text-secondary">{name}</h2>
                        <p>
                              {
                                    slots.length ?
                                          <span>{slots[0]}</span> :
                                          <span className='text-red-500'>no spaces available</span>
                              }
                        </p>
                        <p>{slots.length} {slots.length > 1 ? "spaces available" : "space available. Try Another Day"}</p>
                        <div className="card-actions justify-center">
                              <label
                                    htmlFor="bookingModal"
                                    className="btn btn-primary modal-button"
                                    disabled={slots.length === 0}
                                    onClick={() => setSpService(service)}
                              >Book a slot</label>
                        </div>
                  </div>
                  <BookingModal service={spService}></BookingModal>
            </div>
      );
};

export default Booking;