import { React, useState } from "react";
import { Card, Button } from "react-bootstrap";
import itech_video from "../assets/videos/itech_main_video.mp4";
import "../Css/ContentsNew.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import {
  asso,
  highlights,
  data,
  // products,
  features,
  Testimonials,
} from "../data.config";
const ContentsNew = () => {
  const [originalSrcs, setOriginalSrcs] = useState(
    data.map((item) => item.src)
  );

  const resetimg = (index) => {
    const updatedData = [...data];
    updatedData[index].src = originalSrcs[index];
    setOriginalSrcs(updatedData.map((item) => item.src));
  };
  return (
    <div className="ContentsNew">
      {/* video */}
      <div
        className="itech-video"
        style={{ position: "sticky", display: "block" }}
      >
        <video
          loop
          autoPlay
          // controls
          muted
          style={{ objectFit: "fill" }}
          src={itech_video}
          width="100%"
        ></video>
        <div className="overlay-description">
          <span
            class="video-title animated zoomIn"
            style={{ fontFamily: "Exo Light" }}
          >
            We Build Robust, Expansive &amp; Ultra Fast Next-Gen Machines
          </span>
          <br />
          <div
            class="video-details animated bounceInLeft"
            style={{ animationDelay: "4s", fontFamily: "Exo Light" }}
          >
            Uniquely Designed by Experienced Professionals from the World of
            Digital Forensics.
          </div>
          <br />
          <div
            class="video-details animated bounceInLeft"
            style={{ animationDelay: "7s", fontFamily: "Exo Light" }}
          >
            Built with Latest Technology, Highest, Quality Component, Backed By
            Lifetime Support.
          </div>
          <br />
          <a
            href="https://www.youtube.com/embed/CeI4XiQdc0w?autoplay=1&wmode=opaque"
            class="fancybox fancybox.iframe animated bounceInUp"
            onclick="showslide();"
          >
            <i class="fa fa-play-circle fa-4x"></i>
          </a>
        </div>
      </div>
      {/* Carousel */}
      <section className="regular">
        <div className="container mt-4 mb-4">
          <Carousel
            showThumbs={true}
            infiniteLoop={true}
            useKeyboardArrows={true}
            showIndicators={true}
            autoPlay
            centerMode
            emulateTouch={true}
            centerSlidePercentage={20}
            showArrows={true}
            interval={2000}
            swipeable={true}
            stopOnHover={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="control-arrow control-prev"
                >
                  {/* &#10094; */}
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="control-arrow control-next"
                >
                  {/* &#10095; */}
                </button>
              )
            }
          >
            {data.map((item, index) => (
              <div key={index} className="item">
                <Card className="carousel-card">
                  <Card.Img
                    variant="top"
                    src={item.src}
                    className="carousel-image img-fluid card-img-top"
                    alt={item.name}
                  />
                  <Card.Body className="carousel-image-info">
                    <Card.Title className="carousel-image-name text-center">
                      {item.name}
                    </Card.Title>
                    <Card.Text
                      style={{ color: "black" }}
                      className="carousel-image-alt text-justify"
                    >
                      {item.alt}
                    </Card.Text>
                    <Link to={`/products/${item.id}`}>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="read-more-button"
                      >
                        Read More
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      {/* highlights */}
      <div className="highlight-container">
        <div className="header">
          <h3 style={{ color: "#2F121C", fontSize: "24px" }}>HIGHLIGHTS</h3>
          <h2>-----</h2>
          <div className="header-desc">
            <p>
              All our Machines are Designed `Feature Rich` Solely to Achieve
              `Maximum Uninterrupted Case Completion` in the stipulated Office
              working hours.<br></br> Combined with `The Ultimate User
              Experience`. Designed, Built and Tested by Experienced Users.
            </p>
          </div>
        </div>
        {/* cards stack */}
        <div className="high-container">
          {highlights.map((ele, id) => {
            return (
              <section id="services">
                <div className="highlight-container">
                  <div className="row" id="boxrow">
                    <div className="col-lg-2">
                      <div
                        className="box wow fadeInLeft"
                        id="highlightContain"
                        data-wow-delay="0.2s"
                        style={{
                          backgroundColor: "#efefef",
                          visibility: "visible",
                          animationDelay: "0.2s",
                          animationName: "fadeInRight",
                        }}
                      >
                        <Card style={{ width: "18rem" }}>
                          <Card.Body>
                            <Card.Title className="icon">{ele.sym}</Card.Title>
                            <h4 className="title">{ele.name}</h4>

                            <p className="description">{ele.desc}</p>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
      {/*Features*/}
      <div className="features-container">
        <div className="feature">
          <h3>FEATURES</h3>
          <b>-----</b>
          <div className="feature-desc">
            <p>
              Standard Proprietary Features Introduced in all Our Deskster
              Series of Workstations, and can be Customized as per Clients
              Requirements, along with
              <br />
              User’s Company Name and Logos on the System.
            </p>
          </div>
          <div className="feat-container">
            {features.map((ele, id) => {
              return (
                <section key={id} className="video-section">
                  <video controls className="video-player">
                    <source src={ele.video_src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </section>
              );
            })}
          </div>
        </div>
      </div>
      {/* Message */}
      <div className="message-container">
        <div className="message">
          <h3>MESSAGE</h3>
          <b>-----</b>
          <div className="message-desc">
            <span className="card-text" style={{ fontSize: 15 }}>
              "Pioneering Change is always the Toughest Challenge, as it
              involves Changing Mindsets First"
              <br />
              It took Two Years of Sincere and Dedicated hard work put in by our
              Experienced Team,
              <br />
              to Design and Manufacture a series of Hardware products &amp;
              Solutions.
              <br />
              "Solutions what you Need and not what we Sell.&#8221;
              <br />
              Excellent results at Directorate of Forensics Science
              Laboratories, Mumbai.
              <br />
              "We request a Chance to Prove Change"
              <br />
              <span className="text float-right">--Managing Director</span>
            </span>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <center>
        <div className="testimonials-container container">
          <h3 style={{ fontSize: "24px" }}>TESTIMONIALS</h3>
          <h2>-----</h2>

          <div className="testimonial-card">
            {Testimonials.map((items) => (
              <div className="testimonial-content">
                <div className="testimonial-author">
                  <img
                    src={items.src}
                    alt={items.can_name}
                    className="author-image"
                  />
                  <div>
                    <p className="author-name">{items.can_name}</p>
                    <p className="author-title">{items.position}</p>
                  </div>
                </div>
                <p className="testimonial-text">"{items.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </center>
      {/* Associated With */}
      <div className="associated-container">
        <div className="associated">
          <h3>ASSOCIATED WITH</h3>
          <h2>-----</h2>
          <div className="asso-images">
            {asso.map((partners, id) => {
              return (
                <div className="alert alert-secondary" id="message">
                  <div className="asso-container">
                    <div className="row2">
                      <div className="col-lg-3 col-sm-4 col-xs-6">
                        <div className="thumbnail">
                          <br />
                          <Card>
                            <img
                              className="img-fluid rounded"
                              id="img-logo"
                              variant="top"
                              src={partners.image}
                              alt={partners.title}
                            />
                            <Card.Body style={{ color: "white" }}>
                              <p>{partners.title}</p>
                            </Card.Body>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="contact-container">
        <div className="contact">
          <h3 style={{ fontSize: "24px" }}>CONTACT</h3>
          <h2>-----</h2>

          <div className="map" style={{ display: "flex" }}>
            <div className="contact-info" style={{ paddingRight: "8rem" }}>
              <h4>Address</h4>
              <p>Sadanand, Ground Floor,</p>
              <p>St. Anthony's Street,</p>
              <p> Kalina, Santa Cruz (East).</p>
              <p>Mumbai, 400 029. INDIA.</p>
              <p>
                <a href="vv">View larger map</a>
              </p>
              <h4>Phone Number</h4>
              <p>+91 70217 48803 / 09</p>
              <h4>Email</h4>
              <p>support@itech.co.in</p>
            </div>
            <div className="map-container">
              <div class="container-fluid p-0 pb-3 float-right">
                <iframe
                  src="https://maps.google.com/maps?q=Sadanand%2C%20Ground%20Floor%2C%20St.%20Anthony%E2%80%99s%20Street%2CKalina%2C%20Santa%20Cruz%20(East)%2C&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="270"
                  id="gmap_canvas"
                  frameborder="0"
                  scrolling="yes"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <section>
        <div className="alert alert-dark" id="invite" role="alert">
          <Link to="/contact">
            <h6 className="invite">
              Inviting
              <span className="invite-msg"></span>
              <span className="invite-id">
                <b> business@itech.co.in</b>
              </span>
            </h6>
          </Link>
        </div>
      </section>
    </div>
  );
};
export default ContentsNew;
