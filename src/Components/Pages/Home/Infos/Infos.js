import clock from "../../../../assets/icons/clock.svg";
import phone from "../../../../assets/icons/phone.svg";
import marker from "../../../../assets/icons/marker.svg";
import React from 'react';
import Card from "../../../Card";

const Infos = () => {
      return (

            <div className="hero bg-base-500">
                  <div className="hero-content flex-col lg:flex-row">
                        <Card title="Opening Hours" img={clock} desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, itaque" styles="flex bg-gradient-to-r from-secondary to-primary rounded py-4"></Card>
                        <Card title="Visit Our Location" img={marker} desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, itaque" styles="flex bg-zinc-800 rounded py-4"></Card>
                        <Card title="Contact Us Now" img={phone} desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, itaque" styles="flex bg-gradient-to-r from-secondary to-primary rounded py-4"></Card>
                  </div>
            </div>
      );
};

export default Infos;