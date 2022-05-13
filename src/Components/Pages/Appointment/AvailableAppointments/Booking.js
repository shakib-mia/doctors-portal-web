import React from 'react';

const Booking = ({ service, setTreatment }) => {
      let { name, slots } = service;

      return (
            <div className="card w-96 bg-base-100 mx-auto shadow-xl text-center">
                  <div className="card-body">
                        <h2 className="text-xl font-bold text-secondary">{name}</h2>
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
                                    className="btn btn-primary btn-sm modal-button"
                                    disabled={slots.length === 0}
                                    onClick={() => {
                                          setTreatment(service)
                                    }}
                              >Book a slot</label>
                        </div>
                  </div>
            </div >
      );
};

export default Booking;