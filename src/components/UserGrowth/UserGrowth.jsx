import React from 'react'
import { Link } from 'react-router-dom'
import './UserGrowth.css'

const UserGrowth = () => {
  return (
    <div className='UserGrowth'>
      <div className='UserGrowth-header'>
        <h1>Drivyx: Where Businesses Grow Responsibly</h1>
        <div className='Growth-header-content'>
          <p>
            With Drivyx, your business is more than sustainable—it's regenerative. <br />
            Together, we can create lasting positive change for the planet and the <br />
            communities we serve. Ready to make an impact? Start your journey <br />
            with Drivyx today.
          </p>

          <Link to="/loginRegister">
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserGrowth