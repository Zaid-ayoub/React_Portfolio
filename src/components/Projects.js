import React from 'react';

const Projects = () => (
  <div className="projects">
    <h2>My Projects</h2>
    <div className="card-container2">
        <div className="card-2">
            <div><img src="images/bookify.png" alt="pic" className="card-image2" /></div>
            <div className="card-content">
                <h2>Bookify</h2>
                <button class="buttons text">
                    <img src="images/github.png" alt="" className="git-img" />
                    <a href="https://github.com/HamzasZaitoun/Bookify">Follow this link</a>
                </button>
            </div>
        </div>
        <div className="card-2">
            <div><img src="images/fitzoon.jpg" alt="pic" className="card-image2" /></div>
            <div className="card-content">
                <h2>Fitzoon</h2>
                <button className="buttons text">
                    <img src="images/github.png" alt="" className="git-img" />
                    <a href="https://github.com/shadi-alnkhatin/Ecommerce_Project_PHP_MYSQL.git">Follow this link</a>
                </button>
            </div>
        </div>
        <div className="card-2">
            <div><img src="images/orange.png" alt="pic" className="card-image2" /></div>
            <div className="card-content">
                <h2>Orange Community</h2>
                <button className="buttons text">
                    <img src="images/github.png" alt="" className="git-img" />
                    <a href="https://github.com/Zaid-ayoub/Orang_Community_React_Zaid.git">Follow this link</a>
                </button>
            </div>
        </div>
    </div>
    </div>
);

export default Projects;
