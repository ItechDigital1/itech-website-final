import React, { useState, useRef } from "react";
import { Card, Button } from "react-bootstrap";
import itech_video from "../assets/videos/itech_main_video.mp4";
import "../Css/ContentsNew.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import {
  asso,
  highlights,
  features,
  data,
  // products,
  Testimonials,
} from "../data.config";
const ContentsNew = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="ContentsNew">
      {/* video */}
      <div className="itech-video">
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
      {/* Carousel */};
      <div className="carousel-container">
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          //   deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {data.map((item, itemIndex) => (
            <div key={itemIndex} className="carousel-card">
              <Card>
                <Card.Img
                  variant="top"
                  src={item.src}
                  className="carousel-image"
                />
                <Card.Body className="carousel-image-info">
                  <Card.Title className="carousel-image-name">
                    {item.name}
                  </Card.Title>
                  <Card.Text className="carousel-image-alt">
                    {item.alt}
                  </Card.Text>
                  <Link to={`/products/${item.id}`}>
                    <Button
                      variant="primary"
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
      {/* highlights */}
      <div className="highlight-container">
        <div className="header">
          <h3 style={{ color: "#2F121C" }}>HIGHLIGHTS</h3>
          <h2>-----</h2>
          <div className="header-desc">
            <p>
              All our Machines are Designed `Feature Rich` Solely to Achieve
              `Maximum Uninterrupted Case Completion` in the stipulated Office
              working hours.
            </p>
            <p>
              Combined with `The Ultimate User Experience`. Designed, Built and
              Tested by Experienced Users.
            </p>
          </div>
        </div>
        {/* cards stack */}
        <div className="high-container">
          {highlights.map((ele, id) => {
            return (
              <section id="services">
                <div className="row" id="boxrow">
                  <div className="col-lg-2">
                    <div
                      className="box wow fadeInLeft"
                      data-wow-delay="0.2s"
                      style={{ backgroundColor: "white" }}
                      id=""
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
              </section>
            );
          })}
        </div>
      </div>
      {/* Message */}
      <div className="message-container">
        <div className="message">
          <h3>MESSAGE</h3>
          <h2>-----</h2>
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
          <h3>TESTIMONIALS</h3>
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
          <h3>CONTACT</h3>
          <h2>-----</h2>

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
            <p>+91 70217 48802/03/04</p>
            <h4>Email</h4>
            <p>info@itech.co.in</p>
          </div>
          <div className="map-container">
            <div class="container-fluid p-0 pb-3 float-right">
              <iframe
                src="https://maps.google.com/maps?q=Sadanand%2C%20Ground%20Floor%2C%20St.%20Anthony%E2%80%99s%20Street%2CKalina%2C%20Santa%20Cruz%20(East)%2C&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="270"
                id="gmap_canvas"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentsNew;
