import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Profile",
      desc: "Details about the profile",
      img: "https://via.placeholder.com/300", // Placeholder image URL
    },
    {
      id: 2,
      title: "Projects",
      desc: "Details about the projects",
      img: "https://via.placeholder.com/300", // Placeholder image URL
    },
    {
      id: 3, // Changed the id to be unique
      title: "Contacts",
      desc: "Details about how to contact",
      img: "https://via.placeholder.com/300", // Placeholder image URL
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
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
