import React from "react";
import "./Header.css"
//
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import eyeIcon from '../assets/eye.png';
import logoIcon from '../assets/portfolio-logo-transparent.png';

const Header = () => {

  const [showConnect, setShowConnect] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const handleToggleConnect = (newState: boolean) => {
    setIsAnimating(true);
    
    setTimeout(() => {
      setShowConnect(newState);
      setIsAnimating(false);
    }, 1000);
  };

  const socialLinks = [
    {
      icon: <FaGithub className="socials-icon" size={"2rem"} color="#2e2e2eff"/>,
      url: "https://github.com/simplynoel",
      label: "GitHub",
      tooltip: "Visit my GitHub profile"
    },
    {
      icon: <FaLinkedin className="socials-icon" size={"2rem"} color="#0077B5"/>,
      url: "https://www.linkedin.com/in/noel-o-padrigon-jr-0296b8318/",
      label: "LinkedIn",
      tooltip: "Connect with me on LinkedIn"
    },
    {
      icon: <FaTwitter className="socials-icon" size={"2rem"} color="#1DA1F2"/>,
      url: "https://x.com/PadrigonNoel/",
      label: "Twitter",
      tooltip: "Follow me on Twitter"
    },
    {
      icon: <FaEnvelope className="socials-icon" size={"2rem"} color="#d02213d4"/>,
      url: "mailto:noel.padrigon@gmail.com",
      label: "Email",
      tooltip: "Send me an email"
    },
    {
      icon: <img className="socials-icon" src={eyeIcon} alt="Resume" />,
      label: "Close",
      tooltip: "Hide",
      onClick: () => handleToggleConnect(false)
    }
  ];

  return (
    <header className="app-header">
        <img src={logoIcon} alt="App Logo" className="app-logo" />
        {
          showConnect ?
          <div className={`socials ${isAnimating ? 'hiding' : 'showing'}`}>
          {socialLinks.map((social, index) => (
            <div 
              key={social.label} 
              className="social-icon" 
              data-tooltip={social.tooltip}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {social.url ? (
                <a 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ) : (
                <button 
                  onClick={social.onClick}
                  className="close-button"
                  aria-label={social.label}
                >
                  {social.icon}
                </button>
              )}
            </div>
          ))}
        </div>
        :
        <button 
          className={`connect-button ${isAnimating ? 'loading' : ''}`} 
          onClick={() => handleToggleConnect(true)}
          disabled={isAnimating}
        >
          {isAnimating ? '...' : 'Connect with me'} 
          <FaEnvelope style={{ marginLeft: '8px' }} />
        </button>
        }
    </header>
  )
}

export default Header