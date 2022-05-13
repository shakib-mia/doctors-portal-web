import React from 'react';

const BookingModal = ({ service }) => {
      if (service) {
            const selected = (option) => {
                  const select = document.getElementById('slots');
                  console.log(select.value)
            }

            return (
                  <div>
                        <input type="checkbox" id="bookingModal" className="modal-toggle" />
                        <div className="modal">
                              <div className="modal-box relative">
                                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h3 className="text-lg font-bold">{service.name}</h3>
                                    <select className='input w-full shadow-md' id="slots" onChange={selected}>
                                          {service.slots.map(slot => <option value={slot}>{slot}</option>)}
                                    </select>
                              </div>
                        </div>
                  </div>
            );
      }
};

export default BookingModal;