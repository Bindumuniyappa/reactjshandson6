import React from 'react'
import {Link} from 'react-router-dom'
import RoutingPage from './RoutingPage'

const NavBar = () => {
  return (
    <div className='bodyBackground'>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tablepage">Students</Link>
          </li>
          <li>
            <Link to="/contactuspage">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <RoutingPage/>
    </div>
    
  )
}

export default NavBar