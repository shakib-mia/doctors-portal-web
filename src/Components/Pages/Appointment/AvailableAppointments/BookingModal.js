import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
      const { name } = treatment

      const handleBooking = event => {
            event.preventDefault();
            const slot = event.target.slot.value;
            console.log(name, slot);
            setTreatment(null)
      }

      if (treatment) {
            return (
                  <div>
                        {treatment ? <div>
                              <input type="checkbox" id="bookingModal" className="modal-toggle" />
                              <div className="modal">
                                    <form onSubmit={handleBooking} className="modal-box relative">
                                          <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                          <h3 className="text-lg font-bold">{treatment?.name}</h3>
                                          <input className='input w-full shadow-md my-5' type="text" value={date} disabled />
                                          <select name='slot' className='input w-full shadow-md' id="slots">
                                                {treatment?.slots?.map(slot => <option key={Math.random()} value={slot}>{slot}</option>)}
                                          </select>
                                          <input className='input w-full my-5 shadow-md' type="text" name='name' placeholder='Full Name' />
                                          <input className='input w-full my-5 shadow-md' type="text" name='phone' placeholder='Phone Number' />
                                          <input className='input w-full my-5 shadow-md' type="email" name='email' placeholder='Email' />
                                          <input className='input w-full my-5 shadow-md btn bg-zinc-800' type="submit" value="SUBMIT" />
                                    </form>
                              </div>
                        </div> : ""}
                  </div>
            );
      }
};

export default BookingModal;