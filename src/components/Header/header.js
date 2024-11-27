import React from 'react'
import { Link } from "react-router-dom";
import "./header.css"


const Header = () => {
  return (
    <div className='header'>
        <Link to =  '/' className='title'>
            QUIZ HUB
        </Link>
        <hr className='divider'/>
    </div>
  )
}

export default Header