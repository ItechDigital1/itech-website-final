import React from 'react';
import "../Css/Contact.css"
import ItechLogo from '../img/icon/logo.png'; 
import LabSystemsLogo from '../img/icon/labsystems-logo.png'; 

const Contact = () => {
    return (
        
      <div className="container" >
        <h3 className="text-center dist-title mb-5 mt-9">Our Address</h3>
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img className="img-fluid contact-logo" id="add-logo" src={ItechLogo} alt="Itech Logo" />
          </div>
          <div className="col-md-8">
            <div className="add-text">
              <address>
                <strong>I.TECH Digital Forensics Pvt. Ltd.<br /></strong>
                `Sadanand`, Ground Floor,<br />
                St. Anthony's, Street,<br />
                Kalina, Santa Cruz (East),<br />
                Mumbai. 400 029. INDIA.<br />
                Phone: +91 70217 48802 /03 /04<br />
                Email: info@itech.co.in
              </address>
            </div>
          </div>
        </div>
        <h3 className="text-center dist-title">Our Distributors</h3>
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img className="img-fluid contact-logo" id="lab-logo" src={LabSystemsLogo} alt="Lab Systems Logo" />
          </div>
          <div className="col-md-8">
            <div className="add-text">
              <address>
                <strong>Lab Systems<br /></strong>
                328, Mastermind IV, Royal Palms,<br />
                Survey No.169, Aarey Milk Colony,<br />
                Near Unit No.26, Goregaon (East),<br />
                Maharashtara, Mumbai, INDIA<br />
                Phone: (022) 2879 4637, (022) 3251 4134<br />
                Email: contact@labsystems.co.in
              </address>
            </div>
          </div>
        </div>
        <div className="col-container reseller-form">
          <div className="alert alert-dark text-center" role="alert">
            Inviting INDIA `Resellers` and International `Country Distributors`
          </div>
          <div className="collapses" id="collapseCountriess">
            <div className="row reseller-form">
              <select className="form-control accordion-toggle" name="selectCountries" id="selectLocation">
                <option value="Select Option">---Select Option---</option>
                <option value="International">International Countries</option>
                <option value="India">India</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default Contact;
