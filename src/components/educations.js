import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { IconLink } from "./icons";
import educations from "../_mock/educations.json";
import { dateFormat } from "../utils/utils";

import { FaGraduationCap, FaUniversity, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
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

export default function Educations() {
  const title = "🎓 Education";

  return (
    <section id="education">
      <motion.div
        className="d-flex align-items-center justify-content-between mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h4 className="fw-bolder heading-gradient mb-0 text-uppercase">
          {title}
        </h4>
      </motion.div>

      {educations.map((education, i) => (
        <motion.div
          className="card shadow border-0 rounded mb-3 education-card"
          key={i}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          custom={i}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <div className="card-body p-3">
            <div className="fs-5 heading-gradient fw-bolder d-flex align-items-center gap-2">
              <FaGraduationCap className="text-primary" />
              {education.degree}
            </div>
            <div className="small fw-bolder d-flex align-items-center gap-1">
              <FaUniversity className="text-secondary" />
              <Link
                to="#"
                onClick={() => window.open(education.universityURL, "_blank")}
                className="text-decoration-none"
              >
                {education.university} <IconLink />
              </Link>
            </div>
            <div className="small text-muted d-flex align-items-center gap-2">
              <FaCalendarAlt />
              {dateFormat(education.start, "Y")} —{" "}
              {education.present ? (
                <span className="fst-italic">Present</span>
              ) : (
                dateFormat(education.end, "Y")
              )}
              <span className="d-flex align-items-center gap-1 ms-3">
                <FaMapMarkerAlt /> {education.location}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
