import React from "react";
import useFetchJobs from "../../hooks/getJobs";
import joblight from "../../assets/images/job-light.png";
import jobdark from "../../assets/images/job-dark.png";
import "./getHired.css";

export function JobList() {
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
                  <img src={joblight} />
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
                  <div className="job-detail">
                    <p>Salary</p>
                    <p>{job.salary} lpa</p>
                  </div>
                  <div className="job-detail">
                    <p>Last Date</p>
                    <p>{job.lastDate}</p>
                  </div>
                </div>
                <div className="job-below-right">
                  <button>Apply</button>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
