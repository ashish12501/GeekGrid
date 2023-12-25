import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/home";
import { Contact } from "./pages/Contact/contact";
import { Signin } from "./pages/Signin/signin";
import { Signup } from "./pages/Signup/signup";
import { AddData } from "./pages/Admin/addData";
import { Articles } from "./pages/Articles/articles";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
// import { Topbanner } from "./components/topbanner";

import { VideoListPage } from "./pages/VideoCourses/VideoListPage";
import { VideoPlayerPage } from "./pages/VideoCourses/streamer";
import { JobList } from "./pages/GetHired/getHired";
import "./variables.css";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "./config/firebase-config";

export const themeContext = createContext(null);

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserData(user);
    });
  });

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme, userData }}>
      <div className="App" id={theme}>
        <Router>
          {/* <Topbanner /> */}
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
          <Footer />
        </Router>
      </div>
    </themeContext.Provider>
  );
}

export default App;
