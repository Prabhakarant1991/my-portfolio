import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projects from "../_mock/projects.json";
import { dateFormat } from "../utils/utils";

// React Icons
import {
  FaProjectDiagram,
  FaCalendarAlt,
  FaTools,
  FaExternalLinkAlt,
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Projects() {
  const title = "💻 Projects";

  return (
    <section id="projects">
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

      <div className="row gx-5 justify-content-center">
        <div className="col-md-12">
          {projects.map((project, i) => (
            <motion.div
              className="card shadow rounded border-0 mb-4 project-card"
              key={i}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              custom={i}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="card-body">
                <div className="fs-5 fw-bolder text-primary-emphasis d-flex align-items-center gap-2">
                  <FaProjectDiagram className="text-secondary" />
                  {project.title}
                </div>

                <div className="small text-muted mb-2 d-flex align-items-center gap-2">
                  <FaCalendarAlt />
                  {dateFormat(project.start)}{" "}
                  ·{" "}
                  {project.present ? (
                    <span className="fst-italic">Present</span>
                  ) : (
                    dateFormat(project.end)
                  )}
                </div>

                <ul className="list-group list-group-flush mb-3">
                  <ProjectDescription data={project.description} />
                </ul>

                <div className="d-flex flex-wrap mb-3 gap-2 small align-items-center">
                  <FaTools className="me-1 text-muted" />
                  <ProjectSkills data={project.skills} />
                </div>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                  className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1"
                >
                  View Project <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectDescription = ({ data }) => {
  return data.map((d, i) => (
    <li className="small text-muted list-group-item" key={i}>
      {d}
    </li>
  ));
};

const ProjectSkills = ({ data }) => {
  return data.map((skill, i) => (
    <span className="badge bg-light border text-dark" key={i}>
      {skill}
    </span>
  ));
};
