import React from 'react';

const Main = () => {
  return (
    <section className="main-container">
      <div className="main-left">
        <img src="images/MyPhoto.webp" alt="Zaid Ayoub" className="profile-img" />
      </div>
      <div className="main-right">
        <h1>I'm <span>Zaid Ayoub</span></h1>
        <h2>Junior Full-Stack Developer</h2>
        <p>Email: zaidayoub117@gmail.com | Phone: +962 795567803</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/zaid-ayoub-848074260/">Zaid Ayoub</a></p>
      </div>
    </section>
  );
};

export default Main;
