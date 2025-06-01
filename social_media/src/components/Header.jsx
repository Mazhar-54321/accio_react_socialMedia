import React from 'react'
import './Header.css'
import { AiFillHome, AiFillBell, AiFillEdit, AiOutlineUser } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <div className='main-container'>
      <h2>TravelMedia.in</h2>
      <div className='posts-container'>
      <AiFillHome style={{color:'#F05A22',opacity:!location?.pathname?.includes("item")?'1':'0.5'}} title="Home" />
        <AiFillBell style={{color:'#F05A22',opacity:'0.5'}} title="Notification" />
        <AiFillEdit style={{color:'#F05A22',opacity:location?.pathname?.includes("item")?'1':'0.5'}} title="Posts" />
        <AiOutlineUser style={{color:'#F05A22',opacity:'0.5'}} title="Person" />
      </div>
    </div>
  )
}

export default Header