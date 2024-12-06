import guy from './assets/coding-guy.png';
import siteIcon from './assets/site_icon.svg';
import gitIcon from './assets/git_new_icon.svg';
import exp from './assets/new_exp.svg';
import './App.css';


const Hero = () => {

  return (
      <div className="hero-content">
        <div className='hero-half'>
          <h1>Renato Valente's Portfolio</h1>
          <div className="sub-headline">
            <p>
            Hello. I’m Renato, a front end developer. I’m really into software development and am always trying to improve and expand my knowledge in the area. Please, take a deeper look at some of my projects below.
            </p>
          </div>
        </div>
        <div className='hero-half'>
          <img src={guy} />
        </div>
      </div>
  )

}

const Card = (props: {title:string, content:string, git:string, link:string}) => {
  return(
    <div className="card">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <div className="links">
          <a href={props.git} target='blank' className='link'><img src={gitIcon} alt="" /></a>
          <a href={props.link} target='blank' className='link'><img src={siteIcon} alt="" /></a>
        </div>
    </div>
  )
}

const Projects = () => {

  const calcContent = 'This is a calculator made with Typescript and React. It is capable of performing Addition, Subtraction, Multiplication and Division';
  const chessContent = 'This is a Browser Chess game simulator made with Typescript and React. The user can control the pieces by dragging them.';

  return(
    <div className="projects-content">
      <Card title='Calculator' content={calcContent}
      git={'https://github.com/Renato-Valente/react-calculator'} link={'https://react-calculator-gheb.onrender.com'}/>
      <Card title='Chess Game' content={chessContent}
      git={'https://github.com/Renato-Valente/react-chess'} link={'https://react-chess-gcyh.onrender.com'}/>
    </div>
  )
}

const Experience = () => {
  return(

    <div className="exp-content">
      <div className="exp-half">
        <h3>Professional Experience</h3>
        <p>
        Aside from working as a freelance developer for web applications, I have also worked for more than a year as QA (Quality Assurance) analyst at Object Edge. At that time, I was responsible for testing mainly the front end of different applications. This helped me acquire some knowledge about front end layouts.
        </p>
      </div>
      <div className="exp-half">
        <img src={exp} alt="" />
      </div>
    </div>
  )
}

const Contact = () => {

  return(
    <div className="contact-content">
      <h3>Contact me</h3>
      <a target='blank' href="https://www.linkedin.com/in/renato-valente/">https://www.linkedin.com/in/renato-valente/</a>
      <a target='blank' href="https://github.com/Renato-Valente/">https://github.com/Renato-Valente/</a>
    </div>
  )
}

function App() {

  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}

export default App
