import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link
import AboutLogo from "../assets/images/about.jpg";
import ContactLogo from "../assets/images/contact.jpg";
import ProjectsLogo from "../assets/images/projects.jpg";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Profile",
      desc: "Welcome to my portfolio! I am a passionate and dedicated Electrical Engineering graduate from the University of the Witwatersrand. With a deep interest in technology, renewable energy, and software development, I've spent years honing my skills across various disciplines. My journey in engineering has allowed me to explore the intricate details of power systems, control systems, and advanced measurements, as well as the fascinating world of software development and IoT.",
      img: AboutLogo, 
      link: "/about", // Redirect to About page
    },
    {
      id: 2,
      title: "Projects",
      desc: "Explore My Work! Over the course of my academic and professional journey, I've had the privilege to work on a variety of projects that showcase my skills and passion for engineering. Each project represents a unique challenge, from designing complex power systems to developing innovative software solutions.",
      img: ProjectsLogo, 
      link: "/projects", // Redirect to Projects page
    },
    {
      id: 3,
      title: "Contacts",
      desc: "Let's Connect! Whether you're interested in discussing potential collaborations, seeking advice, or just want to network, I'm always open to new opportunities. Feel free to reach out to me via email or connect with me on LinkedIn. I'm also available for coffee chats if you're in the area—I'm always up for a good conversation about engineering, technology, or any exciting new ideas.",
      img: ContactLogo, 
      link: "/contact", // Redirect to Contact page
    },
  ];

  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt={post.title} />
            </div>
            <div className="content">
              <Link className="link" to={post.link}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <Link to={post.link}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
