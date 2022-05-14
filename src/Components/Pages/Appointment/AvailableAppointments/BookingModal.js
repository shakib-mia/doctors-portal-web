import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../../firebase.init"
import { toast } from "react-toastify"

const BookingModal = ({ treatment, date, setTreatment }) => {
      const { _id, name, slots } = treatment;
      // const { loading, error } = useAuthState(auth);
      const { email, loading, error, displayName } = useAuthState(auth)[0];
      const formattedDate = format(date, "pp")
      console.log(email)

      const handleBooking = event => {
            event.preventDefault();
            const slot = event.target.slot.value;


            const booking = {
                  treatmentId: _id,
                  treatmentName: name,
                  date: formattedDate,
                  slot,
                  patient: email,
                  patientName: displayName
            }

            fetch('http://localhost:5000/booking', {
                  method: "POST",
                  headers: {
                        "content-type": "application/json"
                  },
                  body: JSON.stringify(booking)
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.success) {
                              toast(`Appointment is set ${formattedDate} at ${slot}`)
                        }
                        else {
                              toast("Allready have an appointment")
                        }

                        // to close the modal
                        setTreatment(null)
                  })
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
                                          <input className='input w-full my-5 drop-shadow ' type="text" name='name' value={displayName} disabled />
                                          <input className='input w-full my-5 drop-shadow ' type="text" name='phone' placeholder='Phone Number' />
                                          <input className='input w-full my-5 drop-shadow ' type="email" name='email' value={email} disabled />
                                          <input className='input w-full my-5 drop-shadow  btn bg-zinc-800' type="submit" value="SUBMIT" />
                                    </form>
                              </div>
                        </div> : ""}
                  </div>
            );
      }
};

export default BookingModal;