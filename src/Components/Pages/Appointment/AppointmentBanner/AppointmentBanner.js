import React from 'react';
import chair from "../../../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import "./AppointmentBanner.css"

const AppointmentBanner = ({ date, setDate }) => {


      return (
            <div className="hero min-h-screen appointment">
                  <div className="hero-content flex flex-col-reverse lg:flex-row gap-10">
                        <div>
                              <DayPicker
                                    mode='single'
                                    selected={date}
                                    onSelect={setDate}
                              ></DayPicker>
                        </div>
                        <div className='w-1/2'>
                              <img src={chair} alt='chair' className="rounded-lg shadow-2xl w-full" />
                        </div>
                  </div>
            </div>
      );
};

export default AppointmentBanner;