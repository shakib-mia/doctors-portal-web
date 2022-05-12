import React from 'react';
import treatment from "../../../../assets/images/treatment.png"

const ExceptionalCare = () => {
      return (
            <div className='container mx-auto'>
                  <div className="hero-content flex-col-reverse lg:flex-row gap-20">
                        <img src={treatment} className="rounded-lg shadow-2xl h-96" alt="Exceptional_Care" />
                        <div>
                              <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                              <p className="py-6">It is a long established fact that a reader will be distracted bu the readable content of a page when looking its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using Content here. Making it look like readable English, Many desktop publishing packages and webpage</p>
                              <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                        </div>
                  </div>
            </div>
      );
};

export default ExceptionalCare;