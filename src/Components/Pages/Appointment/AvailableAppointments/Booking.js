import React from 'react';
import BookingModal from './BookingModal';

const Booking = ({ service }) => {
      let { _id, name, slots } = service;

      const setTreatment = (service) => {
            console.log(service);
            <BookingModal key={_id} name={name}></BookingModal>
      }

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
                                    onClick={() => setTreatment(service)}
                                    htmlFor="bookingModal"
                                    className="btn btn-primary modal-button"
                              >open modal</label>
                        </div>
                  </div>
            </div>
      );
};

export default Booking;