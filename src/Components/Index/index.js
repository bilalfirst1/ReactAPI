import React from "react";
import NavBar from "../navbar/navbar";

import "../Index/index1.css";
// function Index() {
//   return (
//     <div>
//       <NavBar />
//   index
//     </div>
//   );
// }
function index() {
    return (
        
      <div className="home-page">
          <>
  <NavBar/>
  </>
        <header className="hero-section">
          <h1>Welcome to Your Website</h1>
          <p>Your catchphrase or a brief description of what your website offers.</p>
          <a href="#features" className="cta-button">Explore More</a>
        </header>
  
        <section id="features" className="features-section">
          <div className="feature">
            <h2>Feature 1</h2>
            <p>Highlight the first key feature of your website.</p>
          </div>
  
          <div className="feature">
            <h2>Feature 2</h2>
            <p>Describe the second important feature that sets you apart.</p>
          </div>
  
          <div className="feature">
            <h2>Feature 3</h2>
            <p>Introduce the third key feature that users will find valuable.</p>
          </div>
        </section>
  
        <section className="call-to-action">
          <h2>Ready to get started?</h2>
          <p>Join us now and experience the benefits.</p>
          <a href="#signup" className="cta-button">Sign Up</a>
        </section>
  
        <footer className="footer-section">
          <p>&copy; 2024 Your Company | Privacy Policy | Terms of Service</p>
        </footer>
      </div>

      
    );
  }
  
export default index;