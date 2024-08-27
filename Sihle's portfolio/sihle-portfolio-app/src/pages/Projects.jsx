import React from 'react'
import pico from "../assets/images/pico-grid.jpg"
import centipede from "../assets/images/software.jpg"
import design from "../assets/images/renewable.jpg"

const projects = [
  {
    id: 1,
    title: 'Solar, Wind, and Grid Power System Design',
    description: `This project involved the comprehensive design of a power system integrating solar, wind, and grid sources for the Mulanje District in Southern Malawi. The system was designed to provide reliable and sustainable energy, incorporating storage solutions to ensure power availability during periods of low renewable energy generation. Key components of the project included the design and simulation of solar panels, wind turbines, and grid integration. Detailed work on the transmission and distribution network ensured efficient delivery of power from generation units to the end-users. This project not only addressed energy needs but also aimed to enhance the local community's energy resilience.`,
    pdf: 'path/to/your/project1.pdf', // Replace with actual path
    img: design // Replace with actual path
  },
  {
    id: 2,
    title: 'Force Measurement System',
    description: `In this project, a sophisticated weight measurement system was developed utilizing strain gauges. The system comprised several key components: strain gauges as sensors, an instrumentation amplifier to boost the sensor signal, a low-pass filter to remove noise, and a microcontroller for data acquisition and processing. The project focused on creating a precise and reliable measurement system capable of accurately capturing and processing weight data for various applications. This experience provided hands-on skills in sensor integration, signal processing, and microcontroller programming.`,
    pdf: 'path/to/your/project2.pdf', // Replace with actual path
    img: 'path/to/your/project2-image.jpg' // Replace with actual path
  },
  {
    id: 3,
    title: 'Centipede ++ Game',
    description: `The Centipede ++ project involved designing and implementing an interactive game using Object-Oriented Programming principles. The game was developed in C++ with SFML (Simple and Fast Multimedia Library), featuring a single-player mode where users navigate and interact with game elements. This project emphasized game design and development, including graphics rendering, user input handling, and game logic implementation. It provided valuable experience in C++ programming and multimedia integration, showcasing my ability to create engaging and functional software applications.`,
    pdf: 'path/to/your/project3.pdf', // Replace with actual path
    img: centipede // Replace with actual path
  },
  {
    id: 4,
    title: 'Interfacing a Pico-Grid to a Micro-Grid (IoT)',
    description: `This project explored the integration of a pico-grid with a micro-grid to improve the efficiency of energy utilization. By incorporating microcontrollers and communication devices, the system allowed for real-time monitoring and control of power flow. The project involved designing key components such as a DC-DC boost converter for voltage regulation, a Grid-tie inverter for connecting with the main grid, and an ESP8266 WIFI board for remote communication and control. The project aimed to enhance energy management and utilization through advanced IoT solutions, contributing to more efficient and flexible energy systems.`,
    pdf: 'path/to/your/project4.pdf', // Replace with actual path
    img: pico // Replace with actual path
  },
];


const Projects = () => {
  return (
    <div className='projects'>
    <h1>My Projects</h1>
    <div className='project-list'>
      {projects.map((project) => (
        <div className='project-item' key={project.id}>
          <div className='project-img'>
            <img src={project.img} alt={project.title} />
          </div>
          <div className='project-content'>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.pdf} target="_blank" rel="noopener noreferrer" className='read-more'>
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Projects

