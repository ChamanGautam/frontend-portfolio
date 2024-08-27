import React from 'react'
import './Projects.css'
import img1 from "../img/clinic.jpg"
import img2 from "../img/student.jpg"
import pro from "./project-details.json"
const Projects = () => {
  const imgmap = {
    "clinic":img1,
    "student":img2
}
  return (
    <div className='card-main' id='project'>
      <h1>Projects</h1>
      <ul>
      {pro.map((item) => (
        <li key={item.id}>
          <div className="project-detail">
            <div className="project">
              <h2>{item.title}</h2>
              <p>
                {item.description}
              </p>
              <h3>Technologies</h3>
              <span>{item.tools[0]}</span>
              <span>{item.tools[1]}</span>
              <span>{item.tools[2]}</span>
              <span>{item.tools[3]}</span>
            </div>
            <div className="project-img">
              <img src={imgmap[item.image]} alt="Clinic Management System" />
              <div className="desc">
                <h2>View Full Website</h2>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <button>View</button>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Projects
