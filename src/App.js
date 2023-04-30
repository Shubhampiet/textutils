import './App.css'
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import Navbar from "./componants.js/Navbar"
import TextForm from "./componants.js/TextForm";
import Bottom from "./componants.js/Bottom";
import About from "./componants.js/About";
import Contact from "./componants.js/Contact";


export default function App() {

  return (
    <>
    
    <Router>

      <div>
        {/* Navbar */}
        <Navbar />

        <Routes>
          {/* TextForm */}
          <Route path="/" element={<TextForm />} />

          {/* About */}
          <Route path="/About" element={<About />} />

          {/* Contact */}
          <Route path="/Contact" element={<Contact name='Shubham Singh' phone='7982164735' mail='shubham.itpiet@gmail.com' />} />

        </Routes>
        
        {/* Bottom */}
        <Bottom message="Do you like this Text-Editor" />

      </div>
    </Router>
    </>
  )
}


