import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/home'
import { Contact } from './pages/Contact/contact'
import { Signin } from './pages/Signin/signin'
import { Signup } from './pages/Signup/signup'
import { Articles } from './pages/Articles/articles'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
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
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
