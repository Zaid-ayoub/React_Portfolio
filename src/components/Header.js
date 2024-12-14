import React from 'react';
import useWindowSize from '../hooks/useWindowSize';
import useMousePosition from '../hooks/useMousePosition';

const Header = () => {
  const { width, height } = useWindowSize(); // Destructure width and height from the custom hook
  const { x, y } = useMousePosition();
  return (
    <header>
      <div className="header-container">
        <div className="nav-left">
          <a href="#">
            <img src="images/z-letter.png" alt="z" className="nav-items" />
          </a>
        </div>
        <div className="nav-center">
          <a href="#About-me" className="nav-items">About Me</a>
          <a href="#Services" className="nav-items">Services</a>
          <a href="#Skills" className="nav-items">Skills</a>
          <a href="#Projects" className="nav-items">Projects</a>
        </div>
        <div className="window-size">
        Window Size: {width}px x {height}px
        <p>Cursor Position: X: {x}px, Y: {y}px</p>
      </div>
        <div className="nav-right">
          <a href="mailto:zaidayyoubb@gmail.com">
            <img src="images/message.png" alt="send a message" className="nav-items" />
          </a>
        </div>
      </div>
      
      
    </header>
  );
};

export default Header;
