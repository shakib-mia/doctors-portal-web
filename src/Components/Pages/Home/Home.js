import React from 'react';
import Banner from './Banner/Banner';
import ExceptionalCare from './ExceptionalCare/ExceptionalCare';
import HomeAppointment from './HomeAppointment/HomeAppointment';
import Infos from './Infos/Infos';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <Infos></Infos>
                  <Services></Services>
                  <ExceptionalCare></ExceptionalCare>
                  <HomeAppointment></HomeAppointment>
                  <Testimonial></Testimonial>
            </div>
      );
};

export default Home;