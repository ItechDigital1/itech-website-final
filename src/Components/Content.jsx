import React, { useRef, useState } from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import itech_video from "../assets/videos/itech_main_video.mp4";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Css/Content.css";
import {
  asso,
  highlights,
  features,
  data,
  // products,
  Testimonials,
} from "../data.config";

import { Link } from "react-router-dom";

const Content = () => {
  const [isPaused, setIsPaused] = useState(false);
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
  const chunkedData = chunkArray(data, 9);
  return (
    <div className="Main">
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
            style={{
              animationDelay: "1s",
              fontFamily: "Exo Light",
              fontSize: "35px",
            }}
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
            style={{ animationDelay: "9s", color: "red" }}
            onclick="showslide();"
          >
            <i class="fa fa-play-circle fa-4x"></i>
          </a>
        </div>
      </div>
       <div className="carousel-container">
        <Carousel interval={5000} pause={isPaused ? "hover" : false}>
          {chunkedData.map((chunk, chunkIndex) => (
            <Carousel.Item key={chunkIndex}>
              <div
                className="carousel-content"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {chunk.map((item, itemIndex) => (
                  <Card key={itemIndex} className="carousel-card">
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
                        <Button variant="primary" className="read-more-button">
                          Read More
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <Button
          variant="secondary"
          style={{ height: "4rem", width: "20px", color: "red" }}
          className="carousel-control-prev"
          onClick={() =>
            document.querySelector(".carousel-control-prev").click()
          }
        >
          &lt;
        </Button>
        <Button
          variant="secondary"
          style={{ height: "4rem", width: "20px", color: "red" }}
          className="carousel-control-next"
          onClick={() =>
            document.querySelector(".carousel-control-next").click()
          }
        >
          &gt;
        </Button>
      </div> 
       style={{ height: "4rem", width: "20px",color: "red" }} 
       <div className="carousel-container">
        <Carousel
          interval={null}
          indicators={false}
          controls={false}
          ref={carouselRef}
        >
          <Carousel.Item>
            <div className="carousel-content">
              {data.map((item, itemIndex) => (
                <Card key={itemIndex} className="carousel-card">
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
              ))}
            </div>
          </Carousel.Item>
        </Carousel>
        <Button
          variant="secondary"
          size="sm"
          className="carousel-control-prev"
          onClick={handlePrev}
        >
          &lt;
        </Button>
        <Button
          variant="secondary"
          size="sm"
          className="carousel-control-next"
          onClick={handleNext}
        >
          &gt;
        </Button>
      </div> 

      <div className="highlight-container">
        <div className="header">
          <h3>HIGHLIGHTS</h3>
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
      {/* Features */}
      <div className="feature-container">
        <div className="feature">
          <h3>FEATURE</h3>
          <h2>-----</h2>
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
      <div className="testimonials-container">
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

          <div className="contact-info">
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
            <img
              src="[Image of Google Maps showing a business location]"
              alt="Map of Kalki Flagship Store Santacruz"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
