import React, { useContext } from "react";
import useFetchJobs from "../../hooks/getJobs";
import joblight from "../../assets/images/job-light.png";
import jobdark from "../../assets/images/job-dark.png";

import "./getHired.css";
import { themeContext } from "../../App";

export function JobList() {
  const { theme } = useContext(themeContext);
  const { jobs, loading } = useFetchJobs();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="get-hired">
      <div>
        <ul className="jobs">
          {jobs.map((job) => (
            <div className="job">
              <div className="job-top">
                <div className="job-img">
                  <img src={theme === "light" ? joblight : jobdark} alt="" />
                </div>
                <div className="job-name">
                  <p className="tittle">{job.title}</p>
                  <p className="location">{job.location}</p>
                </div>
              </div>
              <div className="job-mid">
                {job.skills.map((skill) => (
                  <p className="job-skills">{skill.label} </p>
                ))}
              </div>
              <div className="job-below">
                <div className="job-below-left">
                  {job.salary === "" ? (
                    <></>
                  ) : (
                    <div className="job-detail">
                      <p className="tittle">Salary</p>
                      <p>{job.salary} LPA</p>
                    </div>
                  )}
                  <div className="job-detail">
                    <p className="tittle">Last Date</p>
                    <p>{job.lastDate}</p>
                  </div>
                  <div className="job-detail"></div>
                </div>
                <div className="job-below-right">
                  <button
                    className="job-below-right-button"
                    onClick={() => {
                      window.open(job.link, "_blank");
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
