import React from 'react'
import {Link} from 'react-router-dom'
import './post.css'


function Post({post}) {
  const publicFolder = 'http://localhost:5000/images/'  //public folder to Add all images


  return (
    <div  className='post'>
      <Link to={`/post/${post._id}`} className='link'>
      { post.photo && 
      <img className='postImg' 
           src= {publicFolder + post.photo}  />
      }
      </Link>
      
      <div className="postInfo">
        <Link className='link' to = {`/post/${post._id}`}>
        <span className="postTitle">{post.title}</span>
        </Link>
        
        
        <div className="postCats">
            {post.categories && post.categories.map((c) => (
            <Link to={`/?category=${c}`} className="link">
              <span className="postCat">{c}</span>
            </Link>
          ))}
        
        </div>
        <span className='postDate'>{new Date(post.createdAt).toDateString()}</span>
        <p className='postDesc'>{post.desc} </p>
      </div>
    </div>
  )
}

export default Post
