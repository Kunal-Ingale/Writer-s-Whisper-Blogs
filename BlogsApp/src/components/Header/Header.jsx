import React from 'react'
import './header.css'

function Header() {
  return (
    <>
     <div className="header">
    <div className="headerTitles">
        <span className='headerTitleSm'>Write & Publish</span> 
        <span className='headerTitleLg'>Blogs</span>
    </div>
     
     <img className= 'headerImage' src="https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
     </div>
    </>
  )
}

export default Header
