import React from "react";
import { motion } from "framer-motion";

import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaTools,
  FaLightbulb,
} from "react-icons/fa";

const technicalSkillsCategorized = {
  Frontend: [
    "HTML/CSS",
    "Bootstrap",
    "JavaScript",
    "TypeScript",
    "Angular (Angular 2+)",
    "React.js",
  ],
  Backend: [
    "Node.js",
    ".NET Core",
    "Python",
    "Rest API",
    "GraphQL",
  ],
  Databases: [
    "MySQL",
    "NoSQL",
    "MongoDB",
    "DynamoDB",
  ],
  Cloud: [
    "Azure",
    "AWS (Amazon Web Services)",
    "Docker",
  ],
  "Tools & Workflow": [
    "Git",
    "Version Control",
    "CI/CD Pipeline",
    "Postman",
    "Jira",
  ],
  "Soft Skills": [
    "Problem-solving",
    "Software Debugging",
    "Solutions Implementation",
  ],
};

const categoryIcons = {
  Frontend: <FaCode className="text-primary me-2" />,
  Backend: <FaServer className="text-success me-2" />,
  Databases: <FaDatabase className="text-warning me-2" />,
  Cloud: <FaCloud className="text-info me-2" />,
  "Tools & Workflow": <FaTools className="text-secondary me-2" />,
  "Soft Skills": <FaLightbulb className="text-danger me-2" />,
};

const badgeVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
  }),
  hover: { scale: 1.1, transition: { duration: 0.2 } },
};

export default function TechnicalSkills() {
  return (
    <section>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4 className="fw-bolder heading-gradient mb-0 text-uppercase">
          👨‍💻 Skills
        </h4>
      </div>
      <div className="card shadow border-0 rounded mb-3 p-3">
        {Object.entries(technicalSkillsCategorized).map(([category, skills]) => (
          <div key={category} className="mb-3">
            <h6 className="text-primary mb-2 d-flex align-items-center">
              {categoryIcons[category]} {category}
            </h6>
            <div className="d-flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={i}
                  className="badge text-bg-light"
                  variants={badgeVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  whileHover="hover"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
