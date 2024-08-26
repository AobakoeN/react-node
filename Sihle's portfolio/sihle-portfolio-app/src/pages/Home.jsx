import React from 'react'


const Home = () => {
  const posts = [
    {
      id:1,
      title: "Profile",
      desc: "detailss",
      img: "https://",
      
    },
    {
      id:2,
      title: "Projects",
      desc: "detailss",
      img: "https://",
      
    },
    {
      id:1,
      title: "Contacts",
      desc: "detailss",
      img: "https://",
      
    },
  ];
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post=>(
          <div className= "post" key={post.id}>
            <div className="img">
              <img src="{post.img}" alt="" />
            </div>
         <div className= "content" >
          <Link className="link" to={'/post/${post.id}'}>
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
  )
}

export default Home