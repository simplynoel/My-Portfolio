import "./Home.css"
import { FaBootstrap, FaCss3, FaGit,  FaHtml5, FaJava, FaJs, FaNodeJs, FaPhp, FaPython, FaReact } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Hi! I'm <span>Noel</span>, a passionate <br/>software developer</h1>
      </div>
      <div className="stack-container">
        <div className="stack-icons">
          <FaHtml5 className="stack" color="#E34F26" size={"2.5rem"} />
          <FaCss3 className="stack" color="#1572B6" size={"2.5rem"} />
          <FaJs className="stack" color="#F7DF1E" size={"2.5rem"} />
          <FaBootstrap className="stack" color="#7952B3" size={"2.5rem"} />
          <FaGit className="stack" color="#F05032" size={"2.5rem"} />
          <FaReact className="stack" color="#61DBFB" size={"2.5rem"} />
          <FaJava className="stack" color="#007396" size={"2.5rem"} />
          <FaPython className="stack" color="#3776AB" size={"2.5rem"} />
          <FaPhp className="stack" color="#777BBF" size={"2.5rem"} />
          <FaNodeJs className="stack" color="#8CC84B" size={"2.5rem"} />
        </div>
      </div>
      <div className="projects-container">
        <h2 className="projects-title">Featured Projects</h2>
        <a href="https://github.com/simplynoel/EverydayAI" target="_blank" rel="noopener noreferrer">
          <div className="project-card">
          <div className="photo">
            <div className="photo-overlay">
             <img className="project-image" src="../assets/screenshots/everyday/ss1.jpg" alt="Everyday.ai" />
            </div>
          </div>
          <div className="project-info">
            <h2>Everyday.ai</h2>
            <p>A platform that leverages artificial intelligence to enhance daily productivity and decision-making.</p>
            <div className="project-tech-stack">
              <span className="project-tech">React Native</span>
              <span className="project-tech">JavaScript</span>
              <span className="project-tech">Firebase</span>
              <span className="project-tech">Lottie Files</span>
              <span className="project-tech">AI Integration</span>
            </div>
          </div>
        </div>
        </a>
        <a href="https://card-flip-orcin.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="project-card">
            <div className="photo">
              <div className="photo-overlay">
                <img className="project-image" src="../assets/screenshots/card-flip.png" alt="Card Flip" />
              </div>
            </div>
            <div className="project-info">
              <h2>Card Flip</h2>
              <p>Card Flip is an interactive card flipping game built with React, TypeScript, and SCSS.</p>
              <div className="project-tech-stack">
                <span className="project-tech">React</span>
                <span className="project-tech">TypeScript</span>
                <span className="project-tech">Lottie Files</span>
                <span className="project-tech">SCSS</span>
              </div>
            </div>
          </div>
        </a>
        <a href="https://github.com/simplynoel/Baccarat-" target="_blank" rel="noopener noreferrer">
          <div className="project-card">
            <div className="photo">
              <div className="photo-overlay">
                <img className="project-image" src="../assets/screenshots/baccarat.png" alt="Baccarat!" />
              </div>
            </div>
            <div className="project-info">
              <h2>Baccarat!</h2>
              <p>Baccarat! is a digital version of the classic card game, built with React and Node.js.</p>
              <div className="project-tech-stack">
                <span className="project-tech">React</span>
                <span className="project-tech">TypeScript</span>
                <span className="project-tech">CSS</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="about-me">
        <h2 className="projects-title">About Me</h2>
        <div className="about-me-content">
          <div className="about-me-text">
            <p>Hello! I'm Noel O. Padrigon Jr, a dedicated software developer with a passion for creating innovative solutions. With a strong foundation in both front-end and back-end technologies, I enjoy building applications that are not only functional but also user-friendly.</p>
            <p>Feel free to connect with me on LinkedIn or check out my GitHub to see some of my work. Let's build something amazing together!</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2025 Noel's Portfolio. All rights reserved.</p>
      </div>
      <div style={{ height: '50px' }}>
      </div>
      <br/>
      <br/>
    </div>
  )
}

export default Home