import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import software from "../../assets/software.avif"
import content from "../../assets/content.jpg"
import product from "../../assets/product.avif"
import "./ProductFilter.css"

const ProductFilter = () => {

  const productFilter = () => {
    alert('Login to Support')
  }

  return (
    <div className='ProductFilter'>
      <div className='ProductFilter-header'>
        <h1>Our Marketplace</h1>
        <div className='ProductFilter-header-product --ProductFilter'>
          <div className='ProductFilter-header-productOne'>
            <img src={software} alt="" />
            <h2>Software Development</h2>
            <h3>Project Description</h3>
            <p>
              Are you looking for high-quality, efficient, and scalable software solutions? I specialize in creating custom 
              software tailored to meet your unique business needs. From web and mobile applications to system integrations 
              and automation
            </p>
            <div className='ProductFilter-header-location'>
              <h2><FaLocationDot /></h2>
              <h2>United kingdom</h2>
            </div>
            <button onClick={productFilter}>Support Now</button>
          </div>

          {/* two */}

          <div className='ProductFilter-header-productOne'>
            <img src={content} alt="" />
            <h2>Content Creator</h2>
            <h3>Project Description</h3>
            <p>
              Are you passionate about creating engaging, high-quality content? We are currently seeking a skilled Content
              Creator to join our team! If you have a knack for storytelling, producing compelling visuals, and creating 
              content that resonates with diverse audiences,
            </p>
            <div className='ProductFilter-header-location'>
              <h2><FaLocationDot /></h2>
              <h2>Australia</h2>
            </div>
            <button onClick={productFilter}>Support Now</button>
          </div>

          {/* three */}

          <div className='ProductFilter-header-productOne'>
            <img src={product} alt="" />
            <h2>Drivyz Product</h2>
            <h3>Project Description</h3>
            <p>
              Looking for top-quality products at unbeatable prices? Look no further! Our products are designed to meet your 
              needs and exceed your expectations. Whether you're upgrading, replacing, or trying something new, we have exactly what you're looking for.
            </p>
            <div className='ProductFilter-header-location'>
              <h2><FaLocationDot /></h2>
              <h2>Maldives</h2>
            </div>
            <button onClick={productFilter}>Support Now</button>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default ProductFilter