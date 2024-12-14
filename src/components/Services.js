import React from 'react';

const Services = () => {
  return (
    <section id="Services">
      <h1><span>S</span>ervices</h1>
      <div className="card-container">
        <div className="card">
          <div>
            <img src="images/htmlcssjs.png" alt="HTML&CSS pic" className="card-image" />
          </div>
          <div className="card-content">
            <h2>Custom Website Design</h2>
            <ul>
              <li>Responsive Design for Mobile & Desktop</li>
              <li>E-commerce Solutions</li>
              <li>Website Style Maintenance & Updates</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div>
            <img src="images/laravel.avif" alt="AWS pic" className="card-image" />
          </div>
          <div className="card-content">
          <h2>Laravel Development Services</h2>
            <ul>
              <li>Custom Web Application Development</li>
              <li>API Integration and Development</li>
              <li>Database Design and Management</li>
              <li>E-commerce Development with Advanced Features</li>
              
            </ul>

          </div>
        </div>
        <div className="card">
          <div>
            <img src="images/react.png" alt="Canva pic" className="card-image" />
          </div>
          <div className="card-content">
          <h2>React Web Development Services</h2>
              <ul>
                <li>Interactive and Dynamic User Interfaces</li>
                <li>Single Page Applications (SPA) Development</li>
                <li>Component-Based Architecture for Reusability</li>
                <li>Integration with APIs and Backend Systems</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
