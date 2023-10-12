import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/home'
import { Contact } from './pages/Contact/contact'
import { Signin } from './pages/Signin/signin'
import { Signup } from './pages/Signup/signup'
import { Testimonials } from './pages/Testimonials/testimonials'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Contact />} />
          <Route path='/' element={<Signin />} />
          <Route path='/' element={<Signup />} />
          <Route path='/' element={<Testimonials />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
