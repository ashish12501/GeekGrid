import React, { useContext } from "react";
import useFetchJobs from "../../hooks/getJobs";
import joblight from "../../assets/images/job-light.png";
import jobdark from "../../assets/images/job-dark.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./getHired.css"; // Remove this import if no longer needed
import { AppContext } from "../../App";
import TempComp from "../../components/TempComp";
import SidebarLeft from "../../components/SidebarLeft";
import CardAdvt from "../../components/CardAdvt";

export function JobList() {
  const { theme, applicationOpen, setApplicationOpen } = useContext(AppContext);
  const { jobs, loading } = useFetchJobs();

  if (loading) {
    return <p>Loading...</p>;
  }

  const showToastMessage = () => {
    toast.success("Applied Successfully !");
  };

  return (
    <div className="flex flex-row">
      <div className="hidden md:flex">
        <SidebarLeft />
      </div>
      <ToastContainer />
      {applicationOpen && <TempComp onSubmit={showToastMessage} />}
      <div
        className={
          theme === "dark"
            ? "dark flex flex-col justify-center items-center"
            : "flex flex-col justify-center items-center"
        }
      >
        {/* <div className="dark flex flex-col justify-center items-center"> */}
        <div className=" flex flex-row w-full ">
          <input
            type="text"
            id="simple-search"
            class="dark:bg-zinc-900 w-full focus:ring-green-500 focus:border-green-500 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block ps-10 px-2.5 py-3 focus:ring-0 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ml-11"
            placeholder="Search by internship title/skill "
            required
          />
          <button
            type="submit"
            class="p-2.5 ms-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-0 focus:outline-none mr-10"
          >
            <span class="font-semibold">Search</span>
          </button>
        </div>
        <>
          <div
            className={
              theme === "dark"
                ? "dark get-hired flex-col p-0 md:p-5 border-none"
                : "get-hired flex-col p-0 md:p-5"
            }
          >
            {/* <div className="get-hired flex-col p-0 md:p-5"> */}
            <div className="overflow-auto max-h-[95vh]">
              <ul className="jobs">
                {jobs.map((job, index) => (
                  <li
                    key={index}
                    className="job bg-white border dark:bg-zinc-900 border-gray-300 rounded-md p-5 my-5"
                  >
                    <div className="job-top flex items-center">
                      <div className="job-img bg-gray-200 p-2 rounded-full mr-4">
                        <img
                          src={theme === "light" ? joblight : jobdark}
                          alt=""
                          className="h-10 w-10"
                        />
                      </div>
                      <div className="job-name">
                        <p className="tittle font-semibold">{job.title}</p>
                        <p className="location text-gray-500">{job.location}</p>
                      </div>
                    </div>
                    <div className="job-mid flex flex-wrap mt-5">
                      {job.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="job-skills bg-gray-200 py-1 px-2 rounded-lg mr-4 mb-2 text-sm"
                        >
                          {skill.label}
                        </span>
                      ))}
                    </div>
                    <div className="job-below flex justify-between items-center mt-5">
                      <div className="job-below-left flex">
                        {job.salary && (
                          <div className="job-detail mr-8">
                            <p className="tittle text-gray-500">Salary</p>
                            <p>{job.salary} LPA</p>
                          </div>
                        )}
                        <div className="job-detail">
                          <p className="tittle text-gray-500">Last Date</p>
                          <p>{job.lastDate}</p>
                        </div>
                      </div>
                      <div className="job-below-right">
                        <button
                          className="job-below-right-button bg-green-500 text-white font-semibold py-2 px-4 rounded-md"
                          onClick={() => setApplicationOpen(true)}
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      </div>
      <div className="hidden md:flex">
        <CardAdvt />
      </div>
    </div>
  );
}
