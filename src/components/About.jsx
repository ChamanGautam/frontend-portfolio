import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='about-sec' id='about'>
      <h1>About Me</h1>
      <div className="container">
        <div className="about">
          <h2>Get to know me !</h2>
          <p>Hello! I'm Chaman Gautam a passionate and driven web developer with a keen interest in creating dynamic and user-friendly web applications. As a recent graduate in web development, I have honed my skills in a variety of modern technologies to build robust and scalable web solutions.
            <br />
            <p>I specialize in:</p>
            <span>ReactJS:</span> Crafting interactive and high-performance user interfaces with ReactJS, leveraging its component-based architecture to build reusable and maintainable code.
            <br />
            <span>NodeJS & ExpressJS:</span> Developing server-side applications and APIs with NodeJS and ExpressJS, ensuring efficient handling of requests and seamless integration with various databases and services.
            <br />
            <span>MongoDB:</span> Utilizing MongoDB for flexible and scalable database solutions, designing schemas that cater to the specific needs of the application and ensuring efficient data storage and retrieval.
            <br />
            <span>HTML & CSS: </span>Creating responsive and visually appealing web layouts with HTML and CSS, employing modern design practices to deliver engaging user experiences across different devices.
            <br />
            <span>JavaScript:</span> Applying JavaScript to bring interactivity and dynamic features to web applications, writing clean and efficient code to solve complex problems and enhance functionality.
            <br /><br />
            I am dedicated to continuous learning and staying updated with the latest industry trends. My goal is to contribute to innovative projects, collaborate with skilled teams, and grow as a developer by tackling new challenges and delivering high-quality solutions.
            <br /> <br />
            Feel free to connect with me if you’re interested in discussing web development, potential collaborations, or any exciting opportunities!
          </p>
          <button className='btn'><a href="#project">Project</a></button>

        </div>
        <div className="skill">
          <h2>My Toolkit</h2>
          <div className='sk'>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>React.js</span>
            <span>Redux</span>
            <span>Next.js</span>
            <span>Express.js</span>
            <span>Vite</span>
            <span>SQL</span>
            <span>Tailwind Css</span>

          </div>
        </div>
      </div>
    </div >
  )
}

export default About
