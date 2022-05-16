import React, { useEffect, useState } from 'react';
import auth from '../../../firebase.init';
import { useAuthState } from "react-firebase-hooks/auth"

const MyAppointments = () => {
      const [appointments, setAppointments] = useState([]);
      const [user] = useAuthState(auth)

      useEffect(() => {
            if (user) {
                  fetch(`http://localhost:4000/booking?patient=${user.email}`)
                        .then(res => res.json())
                        .then(data => setAppointments(data))
            }
      }, [user])

      return (
            <div>
                  My Appointment :{appointments.length}
                  <div class="overflow-x-auto">
                        <table class="table w-full">

                              <thead>
                                    <tr>
                                          <th>Index</th>
                                          <th>Name</th>
                                          <th>Date</th>
                                          <th>Slot</th>
                                          <th>Treatment</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {appointments.map(a => <tr>
                                          <th>{a.index}</th>
                                          <th>{a.patientName}</th>
                                          <td>{a.date}</td>
                                          <td>{a.slot}</td>
                                          <td>{a.treatment}</td>
                                    </tr>)}
                              </tbody>
                        </table>
                  </div>
            </div>
      );
};

export default MyAppointments;