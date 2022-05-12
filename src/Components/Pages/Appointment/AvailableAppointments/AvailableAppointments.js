import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Booking from './Booking';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date }) => {
      const [services, setServices] = useState([]);
      const [treatment, setTreatment] = useState({})

      useEffect(() => {
            fetch('services.json')
                  .then(res => res.json())
                  .then(data => setServices(data))
      }, [])

      return (
            <div className='container mx-auto'>
                  <h1 className='text-xl text-primary text-center'>Available Appointments on {format(date, "pp")}</h1>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {services.map(service => <Booking
                              key={service._id}
                              service={service}
                              setTreatment={() => setTreatment(service)}
                        ></Booking>)}
                  </div>
                  <BookingModal></BookingModal>
            </div>
      );
};

export default AvailableAppointments;