"use client";
import { useEffect } from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Experience from "./components/experience";
import Educations from "./components/educations";
import TechnicalSkills from "./components/technical-skills";
import Certifications from "./components/certifications";
import Projects from "./components/projects";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <main className="flex-shrink-0">
      <Navbar />
      <Header />
      <div className="container px-3 pb-5">
        <div className="row gx-5">
          <div className="col-md-7">
            <Experience />
            <hr className="mt-4 pt-4" />
            <Projects />
            <hr className="mt-4 pt-4" />
          </div>
          <div className="col-md-5">
            <TechnicalSkills />
            <hr className="mt-4 pt-4" />
            <Educations />
            <hr className="mt-4 pt-4" />
            {/* <Certifications /> */}
            <hr className="mt-4 pt-4" />
          </div>
        </div>
      </div>
    </main>
  );
}
