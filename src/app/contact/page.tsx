"use client";

import React, { useEffect } from "react";
import "./style.css";

// import AOS
import AOS from "aos";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <main id="main">
      <section id="contact" className="contact mb-5">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h1 className="page-title">Contact us</h1>
            </div>
          </div>

          <div className="row gy-4">
            <div className="col-md-4">
              <div className="info-item">
                {/* <i className="bi bi-geo-alt"></i> */}
                {/* <h3>Address</h3>
                <address>Your Street, State 123456, Country</address> */} 
              </div>
            </div>

            <div className="col-md-4">
              <div className="info-item info-item-borders">
                {/* <i className="bi bi-phone"></i> */}
                {/* <h3>Phone Number</h3>
                <p>
                  <a href="tel:+155895548855">+1 5589 55488 55</a>
                </p> */}
              </div>
            </div>

            <div className="col-md-4">
              <div className="info-item">
                {/* <i className="bi bi-envelope"></i> */}
                {/* <h3>Email</h3>
                <p>
                  <a href="mailto:info@example.com">info@example.com</a>
                </p> */}
              </div>
            </div>
          </div>

          <div className="form mt-5">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
