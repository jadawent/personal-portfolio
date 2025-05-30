import './App.css';
import gradPhoto from './thumbnail_IMG_8453.jpg';
import cssLogo from './csslogo.svg';
import githubLogo from './github.svg';
import javaLogo from './java.svg';
import mysqlLogo from './mysql.svg';
import reactLogo from './react.svg';
import pythonLogo from './python.svg';
import springBootLogo from './spring-boot.svg';
import workflow from './workflow.png';
import yummyfood from './yummyfood.png';
import musicDB from './musicDB.png';


function App() {
  return (
    <>
      <nav className="navbar">
        <a href="#about" className="nav-link">About Me</a>
        <a href="#projects" className="nav-link">My Projects</a>
        <a href="#contact" className="nav-link">Contact Me!</a>
      </nav>

      <div className="App">
        <section id="about" className="aboutSection">
            <img className="image-size" src={gradPhoto} alt="" />
            <div className="text">
                <h2 className="Name"> Jada Wentland </h2>
                <h2 className="intro">
                    Hey there! I am a recent graduate in Computer Science with a strong foundation in software
                    development, problem solving, and a passion for learning new technologies. I'm excited to
                    begin my journey in the tech industry, contribute to meaningful projects, and grow as a developer.
                </h2>
            </div>
        </section>
        <div>
            <h2 className="education"> My Education </h2>
                <p className="educationText">
                    🎓 Bachelors of Science in Computer Science
                </p>
                <p className="educationText">
                    🏛️ Metropolitan State University, Class of 2025
                </p>
        </div>

        <h2 className="tools"> Essential Tools I Use </h2>
        <div className="logoSection">
            <div className="logoContainer">
                <img className="logos" src={javaLogo} alt="Java" />
                <p className="logoLabel"> Java </p>
            </div>
            <div className="logoContainer">
                <img className="logos" src={springBootLogo} alt="SpringBoot" />
                <p className="logoLabel"> Spring Boot </p>
            </div>
            <div className="logoContainer">
                <img className="logos" src={pythonLogo} alt="Python" />
                <p className="logoLabel"> Python </p>
            </div>
            <div className="logoContainer">
                <img className="logos" src={reactLogo} alt="React" />
                <p className="logoLabel"> React </p>
            </div>
            <div className="logoContainer">
                <img className="logos" src={cssLogo} alt="CSS" />
                <p className="logoLabel"> CSS </p>
            </div>
            <div className="logoContainer">
                <img className="logos" src={mysqlLogo} alt="MySQL" />
                <p className="logoLabel"> MySQL </p>
            </div>
            <div className="logoContainer">
                <img className="logos" src={githubLogo} alt="GitHub" />
                <p className="logoLabel"> GitHub </p>
            </div>
        </div>

        <section id="projects" className="projectSection">
          <h2 className="projectHeader"> My Projects</h2>
          <div className="gitHub">
              <a href="https://www.github.com/jadawent" target="_blank" rel="noopener noreferrer">
                      Check out my projects on my GitHub!
              </a>
          </div>
          <div className="projectsWrapper">
              <div className="projectContainer">
              <div className="link">
                <a href="https://github.com/jadawent/workflow" target="_blank" rel="noopener noreferrer"> WorkFlow </a>
              </div>
                <a href="https://github.com/jadawent/workflow" target="_blank" rel="noopener noreferrer">
                    <img className="workflow" src={workflow} alt="workflow" />
                </a>
                <p className="workflowText"> A web application to streamline task management
                 and communication within restaurants. Built using React, CSS, Java Spring Boot and MySQL.</p>
              </div>

              <div className="projectContainer">
              <div className="link">
                <a href="https://github.com/olsonja88/YummyFood" target="_blank" rel="noopener noreferrer"> YummyFood </a>
              </div>
                <a href="https://github.com/olsonja88/YummyFood" target="_blank" rel="noopener noreferrer">
                    <img className="yummyfood" src={yummyfood} alt="yummyfood" />
                </a>
                <p className="workflowText"> A food ordering app designed to simplify the process of ordering
                food from various restaurants. Built using Java, JavaFX, CSS, SQL, and Gradle. </p>
              </div>

              <div className="projectContainer">
              <div className="link">
                <a href="https://github.com/jadawent/record-label-database" target="_blank" rel="noopener noreferrer"> Record Label Database </a>
              </div>
                <a href="https://github.com/jadawent/record-label-database" target="_blank" rel="noopener noreferrer">
                    <img className="musicDB" src={musicDB} alt="musicDB" />
                </a>
                 <p className="workflowText"> A database designed for a record label, with the ability to add and search through bands, songs, and albums.
                Built with Java, SQL, and Apache NetBeans.</p>
              </div>
          </div>
        </section>

        <section id="contact" className="contactSection">
          <h2 className="contactHeader">Contact Me!</h2>
          <div className="linkedIn">
              <a href="https://www.linkedin.com/in/jada-wentland" target="_blank" rel="noopener noreferrer">
                Connect with me on LinkedIn
              </a>
              <p> or </p>
              <a href="mailto:jadawent@gmail.com"> Email Me! </a>
          </div>
        </section>

        <div className="footer">
        <div className="footerDetails">
            <a href="https://www.linkedin.com/in/jada-wentland" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
            <a href="mailto:jadawent@gmail.com"> Email </a>
            <p className="mn"> Located in Minneapolis, Mn </p>
        </div>


        </div>
      </div>
    </>
  );
}

export default App;
