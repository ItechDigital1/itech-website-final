import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Police.css";
import proj1img1 from "../assets/images/img/project1-image1.jpg";
import proj1img2 from "../assets/images/img/project1-image2.jpg";
import proj2img1 from "../assets/images/img/project2-image1.jpg";
import proj3img1 from "../assets/images/img/project3-image1.jpg";
import proj4img1 from "../assets/images/img/project4-image1.jpg";
import proj4img2 from "../assets/images/img/project4-image2.jpg";
import proj5img1 from "../assets/images/img/project5-image1.jpg";
import proj5img2 from "../assets/images/img/project5-image2.jpg";
import proj6img1 from "../assets/images/img/project6-image1.jpg";
import proj7img1 from "../assets/images/img/project7-image1.jpg";
import proj7img2 from "../assets/images/img/project7-image2.jpg";
import proj8img1 from "../assets/images/img/project8-image1.jpg";
import proj8img2 from "../assets/images/img/project8-image2.jpg";
import proj9img1 from "../assets/images/img/project9-image1.jpg";
import proj9img2 from "../assets/images/img/project9-image2.jpg";
import proj11img1 from "../assets/images/img/project11-image1.jpg";
import proj12img1 from "../assets/images/img/project12-image1.jpg";
import proj12img2 from "../assets/images/img/project12-image2.jpg";
import proj13img1 from "../assets/images/img/project13-image1.jpg";

const Police = () => {
  // const [formData, setFormData] = useState({
  //   fullname: "",
  //   email: "",
  //   mobileno: "",
  //   company: "",
  //   comment: "",
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log(formData);
  // };

  // const projectRecruitment = () => {
  //   $("html, body").animate(
  //     {
  //       scrollTop: $("#recruitment").offset().top,
  //     },
  //     1000
  //   );
  // };
  return (
    <div className="class">
      <section
        id="features"
        className="features aos-init aos-animate"
        data-aos="fade-up"
      >
        <div className="Police-container">
          <div className="row">
            <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h5 className="project-title">Mumbai Police Projects</h5>
            </div>
            <div className="proj-title">
              <div>Why Pioneer Government Projects?</div>
            </div>
            <div className="card card-body text-justify proj-titles">
              Despite the Stature of the Government Consultants there is still a
              lot to be desired in the Design Advancement and Latest Technology
              implementation in comparison with International Counterparts.
              <br />
              Irrespective of its kind, I.TECH over the last 3 Years as part of
              our “Give Back to the Community” perspective has rendered its
              services via its Innovation and Design outfit to assist the
              Modernization of Mumbai Police in Several Projects, from
              Conceptualization, Design, Manufacture, Installation,
              Implementation, Training and Maintenance to various areas that
              required attention. Several Projects were executed speedily in a
              matter of months as I.TECH was the one stop shop for all
              solutions.
              <br />
              I.TECH is always open to assist any Government Organization to
              Modernise their existing facilities no matter how challenging and
              Difficult it may be. Pioneering Change is the Vision and Focus of
              Our Organization
            </div>
            <br />
            <div className="proj-head">
              <Link to="#" className="btn btn-default" id="project-btn">
                Digitalization of Police Recuritment(Bharti)
              </Link>
              <Link to="#" className="btn btn-default" id="project-btn">
                MPLS Network, Data and Network Security
              </Link>
              <Link to="#" className="btn btn-default" id="project-btn">
                ABMIS
              </Link>
              <Link to="#" className="btn btn-default" id="project-btn">
                Information Kiosk
              </Link>
              <Link to="#" className="btn btn-default" id="project-btn">
                Multi-Video Conferencing
              </Link>
              <Link to="#" className="btn btn-default" id="project-btn">
                Redesign of Police Caps
              </Link>
              <Link to="#" className="btn btn-default" id="project-btn">
                Ruggedisation of Passport Tabs
              </Link>
              <Link to="#" className="btn btn-default" id="project-btn">
                Mounting and Ruggedisation of MDT
              </Link>
              <Link to="#" className="btn btn-default" id="project-btn">
                Modification of Police Bikes
              </Link>
              <Link to="#" className="btn btn-default" id="project-btn">
                Deskter Forensic Workstations
              </Link>
              <Link to="#" className="btn btn-default" id="project-btn">
                Police Crowd Control Barricades
              </Link>
              <Link to="#" className="btn btn-default" id="project-btn">
                Software Development
              </Link>
            </div>
            <br />
          </div>
          <br />
          <br />
          <div className="policerow content" id="recruitment">
            <div
              className="col-lg-5"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="img">
                <img
                  src={proj1img1}
                  alt=""
                  className="img-fluid"
                  id="project1-img1"
                />
                <br />
                <img
                  className="img-fluid"
                  src={proj1img2}
                  id="project1-img2"
                  alt=""
                />
              </div>
              <div>
                <Link
                  href=""
                  className="btn butDemo btn1 text-center"
                  role="button"
                >
                  <span style={{ fontWeight: "bold" }}>G</span>
                  <span style={{ fontWeight: "bold" }}>e</span>
                  <span style={{ fontWeight: "bold" }}>M Link</span>
                </Link>
              </div>
            </div>
            <div
              className="col-md-7 pt-4"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <header id="heading">
                Concept - Modernization of Mumbai Police Recruitment(Bharti) -
                Year 2016
              </header>
              <h6 style={{ margin: "1rem" }}>Challange - </h6>
              <div className="police-text">
                <p className="font-italic">
                  The traditional approach of police recruitment was a
                  challenging tasks both candidates and police officials.
                  Challenges included the number of candidates turning up each
                  day, rescheduling of events leading candidates to participate
                  even in the afternoon heat, manipulation of candidate results
                  and improper way of selection and marking system.
                </p>
                <p className="font-italic">
                  To overcome these challenges a robust technology driven system
                  was essential. Based on the opportunity given by Mumbai Police
                  ITECH took up this challenge and pioneered this technology
                  driven police recruitment physical test and digitalised it
                  completely.
                </p>
                <p className="font-italic">
                  ITECH was successful in completing the entire project in 20
                  days and catered to 60000+ candidates i.e. 3000 &#8211; 3500
                  candidates a day running 1.6kms in groups of 20 back to back
                  at two different locations and two shifts. ITECH developed not
                  only the hardware solution from the timing system but also
                  developed the software. The system was also developed to
                  handle grievances from candidates on their timings which were
                  promptly resolved by playing their end time videos in slow
                  motion and also options for rewind or forward and verify based
                  on timestamp which was created on each video frame. Results
                  generation was also prompt, it used to hardly take 15 minutes
                  post their run to receive their results. This saved a lot of
                  time, efforts, manpower and finally costs thus enabling
                  systematic recruitment without any issues.
                </p>
              </div>
              <Link
                to="#"
                className="btn butDemo btn1 text-center"
                role="button"
              >
                Request Demo
              </Link>
            </div>
          </div>
          <br />
          <div className="policerow content" id="mpls">
            <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
              <img
                src={proj2img1}
                className="img-fluid"
                id="project2-img1"
                alt=""
              />
              <div>
                <Link
                  to=""
                  className="btn butDemo btn1 text-center"
                  role="button"
                >
                  <span style={{ fontWeight: "bold" }}>G</span>
                  <span style={{ fontWeight: "bold" }}>e</span>
                  <span style={{ fontWeight: "bold" }}>M Link</span>
                </Link>
              </div>
            </div>
            <div
              className="col-md-7 pt-5 order-2 order-md-1"
              data-aos="fade-right"
            >
              <header id="heading">
                Concept: MPLS Network, Data and Network Security: Year 2016 -
                2017
              </header>
              <h6 style={{ margin: "1rem" }}>Challange - </h6>
              <div className="police-text">
                <p className="font-italic">
                  Implemented Mumbai Police Technology Cell IT Infrastructure
                  &#8211; Server Room, MPLS networking across Mumbai, Data and
                  Network Security. Initially the existing infrastructure i.e.
                  servers, network devices, storage devices and data and network
                  security devices weren&#39;t available or lacked compatibility
                  and scalability. Secondly for digitalisation of entire process
                  there was always an issue due to these technological gaps and
                  challenges. There was no connectivity between head office to
                  other police stations too everything was operational in silos.
                </p>
                <p className="font-italic">
                  ITECH managed to connect the Head office to 150 locations i.e.
                  police stations with a MPLS connectivity and also end to end
                  security by installing network security devices on each of
                  these locations. VPN was also implemented for those who
                  didn&#39;t have access to MPLS connectivity. Efficient backup
                  and redundancy was also implemented. This created a robust and
                  scalable platform to cater to their requirement of
                  implementation of Police Information Systems which had
                  multiple modules within it.
                </p>
                <p className="font-italic">
                  All this was implemented with data storage, infrastructure
                  scalability and data and network security keeping in mind the
                  sensitivity of Mumbai Police Data and protecting it from
                  International Hackers.
                </p>
              </div>
              <Link
                to=""
                className="btn butDemo btn1 text-center"
                role="button"
              >
                Request Demo
              </Link>
            </div>
          </div>
          <br />
          <div className="policerow content" id="abmis">
            <div className="col-md-5" data-aos="fade-right">
              <img
                src={proj3img1}
                className="img-fluid"
                id="project3-img1"
                alt=""
              />
              <div>
                <Link
                  to="#"
                  className="btn butDemo btn1 text-center"
                  role="button"
                >
                  <span style={{ fontWeight: "bold" }}>G</span>
                  <span style={{ fontWeight: "bold" }}>e</span>
                  <span style={{ fontWeight: "bold" }}>M Link</span>
                </Link>
              </div>
            </div>
            <div className="col-md-7 pt-5" data-aos="fade-left">
              <heading id="heading">
                Concept: Automated Biometric Information System (ABMIS): Year
                2016 - 2017
              </heading>
              <h6 style={{ margin: "1rem" }}>Challange - </h6>
              <div className="police-text">
                <p className="font-italic">
                  Manual Fingerprint imprints were initially taken and also
                  verified. This included lot of paper work and loss of
                  documents etc. Lot of manpower was involved for getting the
                  imprints and then verifying it required specially trained
                  fingerprint experts. Non availability of experts led to delay
                  in cases. Also need for digitalisation was important in order
                  to eliminate all these issues.
                </p>
                <p className="font-italic">
                  The Automated Biometric Identification System was
                  Conceptualized, Designed, Manufactured, and Sourced, installed
                  and implemented by I.TECH in all the 95 Police Stations in
                  Mumbai within Six months for capturing and recording and
                  updating Criminal Data with Fingerprint, Iris, Photo and
                  Demographic Data, to be further used for Artificial
                  Intelligence and Crime pattern. With the Data transferred and
                  stored on Secure Servers in the Server Room. This project is
                  currently taken over by the Central CCTNS Project.
                </p>
              </div>
              <Link
                to="#"
                className="btn butDemo btn1 text-center"
                role="button"
              >
                Request Demo
              </Link>
            </div>
          </div>
          {/* 4th row */}
          <br />
          <div className="policerow content" id="infoKiosk">
            <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
              <div className="policeimages">
                <img
                  src={proj4img1}
                  className="img-fluid"
                  id="project4-img1"
                  alt=""
                />
                <img
                  src={proj4img2}
                  className="img-fluid"
                  id="project4-img2"
                  alt=""
                />
              </div>
              <div>
                <Link
                  to="#"
                  className="btn butDemo btn1 text-center"
                  role="button"
                >
                  <span style={{ fontWeight: "bold" }}>G</span>
                  <span style={{ fontWeight: "bold" }}>e</span>
                  <span style={{ fontWeight: "bold" }}>M Link</span>
                </Link>
              </div>
            </div>
            <div
              className="col-md-7 pt-5 order-2 order-md-1"
              data-aos="fade-right"
            >
              <heading id="heading">
                Concept: Information Kiosk: Year 2017
              </heading>
              <h6 style={{ margin: "1rem" }}>Challange - </h6>
              <div className="police-text">
                <p className="font-italic">
                  The implementation of MPIS only wasn&#39;t enough to cater to
                  its objective. Even though MPIS had digitalised everything
                  which included Police Notice, Room Allotment, Internal Mailing
                  System, Service & Rewards Info, Vehicle Fleet Management, VMS
                  etc. Since junior police staff had no access to computers in
                  order to utilise this technology there was a need to build an
                  interactive kiosk.
                </p>
                <p className="font-italic">
                  This was the First of its kind in INDIA comprising of 150
                  Stand alone Touch Screen Kiosks and 450 machines.
                  Conceptualized, Designed, Manufactured, Sourced, installed and
                  implemented by I.TECH at all police stations and Ancillary
                  Units of the Mumbai Police for assisting each and every Police
                  man with a Login User ID and Password for immediate access to
                  his personal data including Leave application, Housing
                  availability, Pension and Police News and Instructions. This
                  was a immediate assistance to the 50,000 police staff in
                  Mumbai to retrieve data immediately without requesting the
                  same for days. I.TECH continues to maintain the same with
                  Least Down time.
                </p>
              </div>
              <Link
                to="#"
                className="btn butDemo btn1 text-center"
                role="button"
              >
                Request Demo
              </Link>
            </div>
          </div>
          {/* 5th row */}
          <br />
          <div className="policerow content" id="videoConf">
            <div className="col-md-5 " data-aos="fade-right">
              <img
                src={proj5img1}
                className="img-fluid"
                id="project5-img1"
                alt=""
              />
              <p style={{ marginLeft: "130px" }}>
                Video Conferencing Desktop View
              </p>
              <img
                src={proj5img2}
                className="img-fluid"
                id="project5-img2"
                alt=""
              />
              <p style={{ marginLeft: "130px" }}>
                Video Conferencing Mobile View
              </p>
              <div>
                <Link
                  to="#"
                  className="btn butDemo btn1 text-center"
                  role="button"
                >
                  <span style={{ fontWeight: "bold" }}>G</span>
                  <span style={{ fontWeight: "bold" }}>e</span>
                  <span style={{ fontWeight: "bold" }}>M Link</span>
                </Link>
              </div>
            </div>
            <div className="col-md-7 pt-5" data-aos="fade-left">
              <heading id="heading">
                Concept: Multi-Video Conferencing: Year 2017 - 2018
              </heading>
              <h6 style={{ margin: "1rem" }}>Challange - </h6>
              <div className="police-text">
                <p className="font-italic">
                  Communication is the backbone of any organisation. The need
                  for a robust video conferencing solution was needed and form a
                  centralised video conferencing system to cater to an emergency
                  situation was necessary.
                </p>
                <p className="font-italic">
                  This need of the hour and much awaited Project was Implemented
                  installed across all Police stations and Commissioners Offices
                  Senior Staff. The service could be available through both MPLS
                  and VPN. The application also had options for desktop and
                  mobile clients for conferencing. The number of concurrent
                  users is 60 and installed with a low budget using Polycom
                  equipment on local Police Servers. The project is currently
                  completed 3 years and awaiting AMC renewal.
                </p>
              </div>
              <Link
                to=""
                className="btn butDemo btn1 text-center"
                role="button"
                id="project5"
              >
                Request Demo
              </Link>
            </div>
          </div>
          {/* 6th row */}
          <br />
          <div className="policerow content" id="policeCaps">
            <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
              <img
                src={proj6img1}
                className="img-fluid"
                id="project6-img1"
                alt=""
              />
              <div>
                <Link
                  to="#"
                  className="btn butDemo btn1 text-center"
                  role="button"
                >
                  <span style={{ fontWeight: "bold" }}>G</span>
                  <span style={{ fontWeight: "bold" }}>e</span>
                  <span style={{ fontWeight: "bold" }}>M Link</span>
                </Link>
              </div>
            </div>
            <div className="col-md-7 pt-5 " data-aos="fade-right">
              <header id="heading">
                Concept: Redesign of Police Caps: Year 2018
              </header>
              <h6 style={{ margin: "1rem" }}>Challange - </h6>
              <div className="police-text">
                <p className="font-italic">
                  I.TECH was instrumental in the Design and prototyping of the
                  new base ball type P caps in the Mumbai Police which was
                  changed for the first time after 100 years. It was a proud
                  moment to be involved in the change of history in the Mumbai
                  Police diaries. I.TECH sourced the supplier and is now
                  delivering them to the staff at a reasonable price of Rs 65
                  per cap. This has now been copied all over Maharashtra and
                  many parts of India as well.
                </p>
              </div>
              <Link
                to=""
                className="btn butDemo btn1 text-center"
                role="button"
                id="project6"
              >
                Request Demo
              </Link>
            </div>
          </div>
          {/* 7th row */}
          <br />
          <div className="policerow content" id="passportTabs">
            <div className="col-md-5" data-aos="fade-right">
              <img
                src={proj7img1}
                className="img-fluid"
                id="project7-img1"
                alt=""
              />
              <img
                src={proj7img2}
                className="img-fluid"
                id="project7-img2"
                alt=""
              />
              <div>
                <Link
                  to="#"
                  className="btn butDemo btn1 text-center"
                  role="button"
                >
                  <span style={{ fontWeight: "bold" }}>G</span>
                  <span style={{ fontWeight: "bold" }}>e</span>
                  <span style={{ fontWeight: "bold" }}>M Link</span>
                </Link>
              </div>
            </div>
            <div className="col-md-7 pt-5" data-aos="fade-left">
              <heading id="heading">
                Concept: Ruggedisation of Passport Tabs: Year 2018
              </heading>
              <h6>Challange - </h6>
              <div className="police-text">
                <p className="font-italic">
                  The Mumbai Police Passport Branch had a challenge to
                  implement, network, servers and storage solutions along with
                  ruggedisation of fragile tablets.
                </p>
                <p className="font-italic">
                  The entire infrastructure was conventionalized depending on
                  the software requirement from the government. They were then
                  sourced and installed and are currently under 3 year&#39;s
                  maintenance. Data and Network Security is upmost and these
                  separate Servers are protected by advanced firewalls. Document
                  scanners installed and maintained at all locations to ensure
                  smooth online operations to the branch.
                </p>
                <p className="font-italic">
                  I.TECH has also Conceptualized, Designed, Manufactured,
                  Sourced, Ruggedized and Supplied 300 Samsung tabs with Carry
                  cases for the Passport verification process of the Mumbai
                  Police Passport Branch (SBII) these are all weather used
                  successfully and have a very low failure rate as the quality
                  of Ruggedization was priority to ensure project success. The
                  project is currently under 3 year&#39;s maintenance.
                </p>
              </div>
              <Link
                to=""
                className="btn butDemo btn1 text-center"
                role="button"
                id="project7"
              >
                Request Demo
              </Link>
            </div>
          </div>
          <br />
          {/* 8th row */}
          <div className="policerow content" id="rugMdt">
            <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
              <div className="policeimages">
                <img
                  src={proj8img1}
                  className="img-fluid"
                  id="project8-img1"
                  alt=""
                />
                <img
                  src={proj8img2}
                  className="img-fluid"
                  id="project8-img2"
                  alt=""
                />
              </div>
              <div>
                <Link
                  to="#"
                  className="btn butDemo btn1 text-center"
                  role="button"
                >
                  <span style={{ fontWeight: "bold" }}>G</span>
                  <span style={{ fontWeight: "bold" }}>e</span>
                  <span style={{ fontWeight: "bold" }}>M Link</span>
                </Link>
              </div>
            </div>
            <div
              className="col-md-7 pt-5 order-2 order-md-1"
              data-aos="fade-right"
            >
              <heading id="heading">
                Concept: Mounting and Ruggedisation of Mobile Data Terminal
                Tablets: Year 2018
              </heading>
              <h6>Challange - </h6>
              <div className="police-text">
                <p className="font-italic">
                  I.TECH assisted L&T LTD., on the request of the senior
                  management of the Mumbai Police to Design and Ruggedize
                  Samsung 10 inch Tabs and Design and Install Tab removable
                  brackets in all 500 Vehicles across Mumbai with lock to
                  protect against theft and misuse from unauthorised person. As
                  the tabs were expensive and also required proper charging and
                  cooling mechanism taking into consideration the heat generated
                  in the vehicles. I.TECH Designed, Manufactured, tested,
                  delivered and installed all the 500 vehicles within 3 months
                  from order.
                </p>
              </div>

              <Link
                to="#"
                className="btn butDemo btn1 text-center"
                role="button"
                id="project8"
              >
                Request Demo
              </Link>
            </div>
          </div>
          <br />
          {/* 9th row */}
          <div className="policerow content" id="policeBikes">
            <div className="col-md-5" data-aos="fade-right">
              <div className="policeimages">
                <img
                  src={proj9img1}
                  className="img-fluid"
                  id="project9-img1"
                  alt=""
                />
                <img
                  src={proj9img2}
                  className="img-fluid"
                  id="project9-img2"
                  alt=""
                />
              </div>
              <div>
                <Link
                  to="#"
                  className="btn butDemo btn1 text-center"
                  role="button"
                >
                  <span style={{ fontWeight: "bold" }}>G</span>
                  <span style={{ fontWeight: "bold" }}>e</span>
                  <span style={{ fontWeight: "bold" }}>M Link</span>
                </Link>
              </div>
            </div>
            <div className="col-md-7 pt-5" data-aos="fade-left">
              <heading id="heading">
                Concept: Modification of Police Bikes: Year 2018
              </heading>
              <h6>Challange - </h6>
              <div className="police-text">
                <p className="font-italic">
                  The requirement of Design Modification of Mumbai Police
                  Enfield Bullet was discussed with I.TECH by the Mumbai Police.
                  I.TECH designed new electronics from PCB level to LED light
                  Kits and full Body Panels in ABS and FRP. Manufactured and
                  installed on 300 Police Bikes in Mumbai. The Project took 6
                  months to complete.
                </p>
              </div>
              <Link
                to=""
                className="btn butDemo btn1 text-center"
                role="button"
                id="project9"
              >
                Request Demo
              </Link>
            </div>
          </div>
          <br />
          {/* 10th row */}
          <div className="policerow content" id="deskster">
            <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
              <img
                src={proj11img1}
                className="img-fluid"
                id="project11-img1"
                alt=""
              />
              <div>
                <Link
                  to="#"
                  className="btn butDemo btn1 text-center"
                  role="button"
                >
                  <span style={{ fontWeight: "bold" }}>G</span>
                  <span style={{ fontWeight: "bold" }}>e</span>
                  <span style={{ fontWeight: "bold" }}>M Link</span>
                </Link>
              </div>
            </div>
            <div
              className="col-md-7 pt-5 order-2 order-md-1"
              data-aos="fade-right"
            >
              <heading id="heading">
                Concept: Deskster Forensic Workstations: Year 2018
              </heading>
              <h6>Challange - </h6>
              <div className="police-text">
                <p className="font-italic">
                  ITECH manufactured and installed at 6 Zones of the Mumbai
                  police offices in the effort to counter Data crimes. The
                  workstations were used with ENCASE and OXYGEN Mobile
                  Forensics.
                </p>
              </div>

              <Link
                to=""
                className="btn butDemo btn1 text-center"
                role="button"
                id="project10"
              >
                Request Demo
              </Link>
            </div>
          </div>
          <br />
          {/* 11th row */}
          <div className="policerow content" id="policeBarricades">
            <div className="col-md-5" data-aos="fade-right">
              <div className="policeimages">
                <img
                  src={proj12img1}
                  className="img-fluid"
                  id="project12-img1"
                  alt=""
                />
                <img
                  src={proj12img2}
                  className="img-fluid"
                  id="project12-img2"
                  alt=""
                />
              </div>
              <div>
                <Link
                  to="#"
                  className="btn butDemo btn1 text-center"
                  role="button"
                >
                  <span style={{ fontWeight: "bold" }}>G</span>
                  <span style={{ fontWeight: "bold" }}>e</span>
                  <span style={{ fontWeight: "bold" }}>M Link</span>
                </Link>
              </div>
            </div>
            <div className="col-md-7 pt-5" data-aos="fade-left">
              <heading id="heading">
                Concept: Police Crowd Control Barricades: Year 2018 - 2019
              </heading>
              <h6 style={{ margin: "1rem" }}>Challange - </h6>
              <div className="police-text">
                <p className="font-italic">
                  I.TECH Conceptualized, Designed, Manufactures, Tested and
                  supplied the Folding Crowd Control Barricade design for the
                  Mumbai Police. I.TECH has patented its design for unauthorized
                  copy.
                </p>
              </div>
              <span
                style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
              >
                Price ={" "}
              </span>
              <span
                style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}
              >
                &#8377; 32,000.00
              </span>
              <Link
                to=""
                className="btn butDemo btn1 text-center"
                role="button"
                id="project11"
              >
                Request Demo
              </Link>
            </div>
          </div>
          <br />
          {/* 12th row */}
          <div className="policerow content" id="software">
            <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
              <img
                src={proj13img1}
                className="img-fluid"
                id="project13-img1"
                alt=""
              />
              <br />
              <br />
              <p style={{ marginLeft: "170px" }}>Link Tracer for HO</p>
              <div>
                <Link
                  to="#"
                  className="btn butDemo btn1 text-center"
                  role="button"
                >
                  <span style={{ fontWeight: "bold" }}>G</span>
                  <span style={{ fontWeight: "bold" }}>e</span>
                  <span style={{ fontWeight: "bold" }}>M Link</span>
                </Link>
              </div>
            </div>
            <div
              className="col-md-7 pt-5 order-2 order-md-1"
              data-aos="fade-right"
            >
              <heading id="heading">
                Concept: Software development: Year 2018
              </heading>
              <heading id="heading"></heading>
              <h6 style={{ margin: "1rem" }}>Challange - </h6>
              <div className="police-text">
                <p className="font-italic">
                  Our focus on software development currently is basically to
                  provide a complete package of hardware and software solutions.
                  Our in-house software team is highly skilled, experienced and
                  capable to build and develop solutions.
                </p>
                <p className="font-italic">
                  I.TECH has written Software for several of these projects to
                  ensure smooth Operation and maintenance, Testing and Call
                  reporting procedures.
                </p>
              </div>
              <Link
                to="<%=request.getContextPath()%>/company/govtProjects/softwareDevRequest.jsp"
                className="btn butDemo btn1 text-center"
                role="button"
                id="project12"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Police;
{
  /*
  <div className="police-container">
        <div
          id="contactEmail"
          className="modal fade form-row requestDemo-modal"
          tabIndex="-1"
          role="dialog"
        >
          <div
            className="modal-dialog modal-lg .modal-dialog-zoom modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header" id="contactModalTitle">
                <span className="contact-form-title">Request Demo</span>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true" className="close">
                    &times;
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row register-form">
                      <div className="col-md-12">
                        {["fullname", "email", "mobileno", "company"].map(
                          (field, index) => (
                            <div
                              key={index}
                              className="form-group wrap-input rs1-wrap-input validate-input"
                              data-validate={`${
                                field.charAt(0).toUpperCase() + field.slice(1)
                              } is required`}
                            >
                              <span className="label-input">
                                {field.charAt(0).toUpperCase() + field.slice(1)}
                              </span>
                              <span style={{ color: "red" }}>*</span>
                              <input
                                type={field === "email" ? "email" : "text"}
                                className="form-control input"
                                name={field}
                                id={field}
                                placeholder={
                                  field.charAt(0).toUpperCase() + field.slice(1)
                                }
                                value={formData[field]}
                                onChange={handleInputChange}
                                required
                              />
                              <span className="focus-input"></span>
                              <div
                                id={`err${
                                  field.charAt(0).toUpperCase() + field.slice(1)
                                }`}
                                style={{ marginLeft: "10px" }}
                              ></div>
                            </div>
                          )
                        )}
                        <div
                          className="form-group wrap-input rs1-wrap-input validate-input"
                          data-validate="City Name is required"
                        >
                          <span className="label-input">Comment</span>
                          <textarea
                            className="form-control"
                            rows="3"
                            name="comment"
                            id="comment"
                            placeholder="Comment"
                            value={formData.comment}
                            onChange={handleInputChange}
                          ></textarea>
                          <span className="focus-input"></span>
                          <div
                            id="errCity"
                            style={{ marginLeft: "10px" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className="g-recaptcha"
                        id="recaptcha"
                        data-sitekey="6LcQe7MZAAAAAPgxBNFChqNdW2U_9bq0AgRLlD1J"
                        data-callback="verifyCallback"
                      ></div>
                      <div id="g-recaptcha-error"></div>
                    </div>
                    <div className="col-md-3">
                      <div>
                        <button
                          type="button"
                          className="btn btn-secondary contact-form-cancel-demo"
                          id="btnCancel"
                          data-dismiss="modal"
                        >
                          Cancel&nbsp;&nbsp;<i className="icon-remove"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="container-contact-form-btn">
                        <button
                          type="submit"
                          name="btnSubmit"
                          value="Send Message"
                          id="send-message"
                          className="btn btn-primary text-right contact-form-send-message-demo"
                        >
                          Send message&nbsp;
                          <i
                            className="fa fa-paper-plane"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  */
}
