import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import {
  IconEmail,
  IconPhone,
  IconLinkedIn,
  IconWhatsApp,
  IconGithub,
  IconLocation,
  IconCalender,
} from "./icons";

import personal from "../_mock/personal.json";
import profilePhoto from "../assets/prabha-design.png";
import { ProfileDots1, ProfileDots2, ProfileDots3, ProfileDots4 } from "./svg";

export default function Header() {
  const links = [
    {
      id: "email",
      href: `mailto:${personal.email}`,
      className: "text-primary",
      icon: <IconEmail />,
      label: "Email",
    },
    {
      id: "phone",
      href: `tel:${personal.mobileNo}`,
      className: "text-primary",
      icon: <IconPhone />,
      label: "Phone",
    },
    {
      id: "whatsApp",
      href: personal.whatsApp,
      className: "text-success",
      icon: <IconWhatsApp />,
      label: "WhatsApp",
    },
    {
      id: "linkedIn",
      href: personal.linkedIn,
      className: "text-primary",
      icon: <IconLinkedIn />,
      label: "LinkedIn",
    },
    {
      id: "github",
      href: personal.github,
      className: "text-dark",
      icon: <IconGithub />,
      label: "GitHub",
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <header>
      <div className="container pb-2">
        <div className="row gx-5 align-items-center">
          {/* Left Section */}
          <div className="col-md-6 mb-4">
            <motion.div
              className="text-xxl-start"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0}
            >
              <div className="fs-1 heading-dark">Hi, I'm {personal?.name}</div>
            </motion.div>

            <motion.h1
              className="display-6 fw-bolder"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1}
            >
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer 💻",
                    "Front-End Developer 💻",
                    "Back-End Developer 💻",
                    "Server Engineer  💻",
                    "Network Engineer  🌐",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 30,
                }}
              />
            </motion.h1>

            <motion.div
              className="fs-6 text-dark mb-2"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={2}
            >
              Over 11+ years of total experience, including{" "}
              <span className="fw-bolder heading-gradient-we">6.8 years</span> in{" "}
              <span className="fw-bolder heading-gradient-we">Server & Networking Engineer</span>{" "}
              and{" "}
              <span className="fw-bolder heading-gradient-we">4+ years</span> in{" "}
              <span className="fw-bolder heading-gradient-we">
                Web Development (Angular | React Js | .NET Core)
              </span>
              . Known for strong technical problem-solving skills.
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="fs-4 text-center text-lg-start mt-4"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={3}
            >
              {links.map((link, index) => (
                <motion.a
                  key={link.id}
                  className={`me-3 ${link.className}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Link to ${link.label}`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="d-grid gap-2 d-sm-flex text-center text-lg-start mt-3"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={4}
            >
              <a
                href={`tel:${personal.mobileNo}`}
                className="btn btn-outline-dark"
                aria-label="Call me"
              >
                <IconPhone /> {personal.mobileNo}
              </a>
              <a
                href={personal.whatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-success"
                aria-label="Message me on WhatsApp"
              >
                <IconWhatsApp /> Message me on WhatsApp
              </a>
            </motion.div>

            {/* Age & Location */}
            <motion.p
              className="fs-6 mt-4 text-center text-lg-start text-dark"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={5}
            >
              <span className="me-4">
                <IconCalender />
                <span style={{ verticalAlign: "middle" }}> {personal.age}</span>
              </span>
              <span className="me-4">
                <IconLocation />
                <span style={{ verticalAlign: "middle" }}> {personal.location}</span>
              </span>
            </motion.p>
          </div>

          {/* Right Section: Profile Photo & Dots */}
          <motion.div
            className="col-md-6 mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="d-flex justify-content-center justify-content-md-end mt-xxl-0">
              <motion.div
                className="profile background-gradient"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{ marginRight: "30px" }} // <-- This slightly pushes it to the right
              >
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="img-fluid"
                  style={{
                    maxWidth: "300px",
                    height: "auto",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </header>
  );
}
