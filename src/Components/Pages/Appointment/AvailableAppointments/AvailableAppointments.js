import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading';
import Booking from './Booking';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date }) => {
      // const [services, setServices] = useState([]);
      const [treatment, setTreatment] = useState(null);

      const formattedDate = format(date, "PP");

      const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:4000/service?date=${formattedDate}`)
            .then(res => res.json())
      )
      if (isLoading) {
            return <Loading></Loading>
      }
      // useEffect(() => {
      //       fetch(`http://localhost:4000/service?date=${formattedDate}`)
      //             .then(res => res.json())
      //             .then(data => setServices(data))
      // }, [formattedDate])

      return (
            <div className='container mx-auto'>
                  <h1 className='text-xl text-primary text-center'>Available Appointments on {format(date, "pp")}</h1>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {services?.map(service => <Booking
                              key={service._id}
                              service={service}
                              setTreatment={setTreatment}
                        ></Booking>)}
                  </div>

                  {treatment && <BookingModal
                        date={date}
                        treatment={treatment}
                        setTreatment={setTreatment}
                        refetch={refetch}
                  ></BookingModal>}
            </div>
      );
};

export default AvailableAppointments;