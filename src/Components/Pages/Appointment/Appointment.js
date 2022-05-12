import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';

const Appointment = () => {
      const [date, setDate] = useState(new Date());
      return (
            <div className='my-10'>
                  <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
                  <AvailableAppointments date={date}></AvailableAppointments>
            </div>
      );
};

export default Appointment;