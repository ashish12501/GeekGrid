import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/home";
import { Contact } from "./pages/Contact/contact";
import { Signin } from "./pages/Signin/signin";
import { Signup } from "./pages/Signup/signup";
import { AddData } from "./pages/Admin/addData";
import { Articles } from "./pages/Articles/articles";
import { Navbar } from "./components/navbar";
import { VideoListPage } from "./pages/VideoCourses/VideoListPage";
import { VideoPlayerPage } from "./pages/VideoCourses/streamer";
import { JobList } from "./pages/GetHired/getHired";
import "./variables.css";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "./config/firebase-config";
import Footer2 from "./components/Footer2";

export const AppContext = createContext(null);

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserData(user);
    });
  });

  const [theme, setTheme] = useState("light");
  const [applicationOpen, setApplicationOpen] = useState(false);
  const [jobDescription, setJobDescription] = useState(null);
  const [allJobs, setAllJobs] = useState(null);
  const [jobsLoading, setJobsLoading] = useState(false);
  //  Theme Toggling goes here !!
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        userData,
        applicationOpen,
        setApplicationOpen,
        allJobs,
        setAllJobs,
        jobDescription,
        setJobDescription,
        jobsLoading,
        setJobsLoading,
      }}
    >
      <div className="App" id={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/admin" element={<AddData />} />
            <Route path="/streamer/:id" element={<VideoPlayerPage />} />
            <Route path="/learn" element={<VideoListPage />} />
            <Route path="/gethired" element={<JobList />} />
          </Routes>
          <Footer2 />
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
