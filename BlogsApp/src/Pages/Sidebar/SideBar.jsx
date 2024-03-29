import React from 'react'
import './sideBar.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import blogPic from '../../img/BlogsLogo.png'


function SideBar() {
  const [cats,setCats] = useState([]);
  useEffect(()=>{
      const getCats = async()=>{
          const res = await axios.get('/api/categories')
          setCats(res.data);
      }
      getCats();
  },[])

  // cats.map((c)=>{
            
  //   const newCat = {
  //       name: c.name,
  //   }
  //       try {
  //       axiosInstance.post("/api/categories/",newCat)
  //       } catch (error) {
            
  //       }
  //   })


  
  return (
   
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT THE SITE</span>
        <img
          src={blogPic}
         
        />
        <p>
        This is a blog website where anyone interest can upload a story/blog with a picture. User can Write blog, Edit blog, register, login, as well as edit his account.
        </p>
      </div>
      <div className="cat">
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
         
        { cats.map((c)=>(
            <Link to ={`/?category=${c.name}` }className="link">
             <li className="sidebarListItem" >{c.name}</li>
          </Link>
        ))}
        </ul>
      </div>
      </div>
      
    </div>
   
  )
}

export default SideBar
