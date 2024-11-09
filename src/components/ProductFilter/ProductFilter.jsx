import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import "./ProductFilter.css"

const ProductFilter = () => {
  return (
    <div className='ProductFilter'>
      <div className='ProductFilter-header'>
        <h1>Our Marketplace</h1>
        <div className='ProductFilter-header-product --ProductFilter'>
          <div className='ProductFilter-header-productOne'>
            <img src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg" alt="" />
            <h2>Drivyz Product</h2>
            <h3>Project Description</h3>
            <p>Lorem ipsum dolor sit amet , ipsam hic, quia psum atque voluptates autem, molestiae architecto laboriosam, doloremque qui error illo maiores sequi! Repellat eligendi modi commodi, eius aut dolorem.</p>
            <div className='ProductFilter-header-location'>
              <h2><FaLocationDot /></h2>
              <h2>Australia</h2>
            </div>
            <button>Support Now</button>
          </div>

          {/* two */}

          <div className='ProductFilter-header-productOne'>
            <img src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg" alt="" />
            <h2>Drivyz Product</h2>
            <h3>Project Description</h3>
            <p>Lorem ipsum dolor sit amet , ipsam hic, quia psum atque voluptates autem, molestiae architecto laboriosam, doloremque qui error illo maiores sequi! Repellat eligendi modi commodi, eius aut dolorem.</p>
            <div className='ProductFilter-header-location'>
              <h2><FaLocationDot /></h2>
              <h2>Australia</h2>
            </div>
            <button>Support Now</button>
          </div>

          {/* three */}

          <div className='ProductFilter-header-productOne'>
            <img src="https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1673383092/ComputerScience.org/day-in-the-life-of-a-software-dev/day-in-the-life-of-a-software-dev.jpg?_i=AA" alt="" />
            <h2>Drivyz Product</h2>
            <h3>Project Description</h3>
            <p>Lorem ipsum dolor sit amet , ipsam hic, quia psum atque voluptates autem, molestiae architecto laboriosam, doloremque qui error illo maiores sequi! Repellat eligendi modi commodi, eius aut dolorem.</p>
            <div className='ProductFilter-header-location'>
              <h2><FaLocationDot /></h2>
              <h2>Australia</h2>
            </div>
            <button>Support Now</button>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default ProductFilter