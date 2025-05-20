import './App.css';
import gradPhoto from './thumbnail_IMG_8453.jpg';
import building from './building-columns-solid.svg';

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
            <img className="schoolIcon" src={building} alt="" />
        </div>

        <h2 className="tools"> Essential Tools I Use </h2>

        <section id="projects" className="projectSection">
          <h2 className="projectHeader"> My Projects</h2>
          <p></p>
        </section>

        <section id="contact" className="contactSection">
          <h2 className="contactHeader">Contact Me!</h2>
          <p></p>
        </section>
      </div>
    </>
  );
}

export default App;
