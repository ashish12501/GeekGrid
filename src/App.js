import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/home'
import { Contact } from './pages/Contact/contact'
import { Signin } from './pages/Signin/signin'
import { Signup } from './pages/Signup/signup'
import { AddData } from './pages/Admin/addData'
import { Articles } from './pages/Articles/articles'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { VideoListPage } from './pages/VideoCourses/VideoListPage'
import { VideoPlayerPage } from './pages/VideoCourses/streamer'
import './variables.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/learn' element={<learn />} />
          <Route path='/contacts' element={<Contact />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/admin' element={<AddData />} />
          <Route path='/streamer/:id' element={<VideoPlayerPage />} />
          <Route path="/courses" element={<VideoListPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
