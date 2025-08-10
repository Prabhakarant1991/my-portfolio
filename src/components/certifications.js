import React from "react";
import certifications from "../_mock/certifications.json";
import { motion } from "framer-motion";

import { IconLink, IconCalender, IconLocation } from "./icons";
import { dateFormat } from "../utils/utils";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Certifications() {
  const title = "📃 Certifications";

  return (
    <section id="certifications">
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

      {certifications.map((certification, i) => (
        <motion.div
          className="card shadow border-0 rounded mb-2"
          key={i}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          custom={i}
        >
          <div className="card-body p-3">
            <div className="fs-5 fw-bolder">{certification.name}</div>

            <div className="small fw-bolder text-primary d-flex align-items-center mb-1">
              <IconLocation className="me-2" />
              {certification.source}
            </div>

            <div className="small text-muted d-flex align-items-center mb-2">
              <IconCalender className="me-2" />
              Issued {dateFormat(certification.issued)}{" "}
              {certification.expired && (
                <>
                  &nbsp;— Expired {dateFormat(certification.expired)}
                </>
              )}
            </div>

            {certification.link && (
              <a
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="badge text-bg-primary"
              >
                Show credentials <IconLink />
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
