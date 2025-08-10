import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBriefcase, FaMapMarkerAlt, FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";

import { IconLink } from "./icons";
import { dateDiff, dateFormat } from "../utils/utils";
import experiences from "../_mock/experiences.json";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Experience() {
  const title = "💼 Experience";

  return (
    <section id="experience">
      <motion.div
        className="d-flex align-items-center justify-content-between mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h4 className="fw-bolder heading-gradient mb-0 text-uppercase">
          {title}
        </h4>
      </motion.div>

      {experiences.map((experience, i) => (
        <motion.div
          className="card shadow border-0 rounded mb-3 experience-card"
          key={i}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={i}
          whileHover={{ scale: 1.02 }}
        >
          <div className="card-body p-3">
            <div className="fs-5 fw-bolder text-primary-emphasis d-flex align-items-center gap-2">
              <FaBriefcase className="text-secondary" />
              {experience.position}
            </div>

            <div className="small fw-bolder mb-1 d-flex align-items-center gap-2">
              <Link
                to="#"
                onClick={() => window.open(experience.companyURL, "_blank")}
                className="text-decoration-none text-dark"
              >
                {experience.companyName}
                <FaExternalLinkAlt className="ms-1" size={12} />
              </Link>
              <span className="text-muted d-flex align-items-center gap-1">
                <FaMapMarkerAlt /> {experience.location}
              </span>
            </div>

            <div className="small text-muted d-flex align-items-center gap-2">
              <FaCalendarAlt />
              {dateFormat(experience.start)} —{" "}
              {experience.present ? (
                <span className="fst-italic">Present</span>
              ) : (
                dateFormat(experience.end)
              )}
              · {dateDiff(experience.start, experience.end)}
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
