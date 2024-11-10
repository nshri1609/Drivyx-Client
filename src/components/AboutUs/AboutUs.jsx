import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import aboutOne from "../../assets/aboutOne.jpeg"
import aboutTwo from "../../assets/aboutTwo.jpeg"
import aboutThree from "../../assets/aboutThree.jpeg"
import "./AboutUs.css"

const AboutUs = () => {

  const aboutus = () => {
    alert('Login to See more')
  }

  return (
    <div className='AboutUs'>
      <div className='AboutUs-header'>
        <h1>Things to know about Drivyx ESG platform</h1>
        <h3 className='AboutUs-header-h3'>Stay updated with the latest industry trends and insights.</h3>

        <div className='AboutUs-header-product'>
          <div className='AboutUs-header-productOne'>
            <img src={aboutOne} alt="" />
            <h2>Transforming Business for a Sustainable Future</h2>
            <p>
              Albert Einstein once said, "We cannot <br />
              solve our problems with the same thinking <br />
              we used when we created them."
            </p>
            <div className='AboutUs-header-more'>
              <h4 onClick={aboutus}>See more</h4>
            </div>
          </div>

          {/* two */}

          <div className='AboutUs-header-productOne'>
            <img src={aboutTwo} alt="" />
            <h2>What is Regenerative Development?</h2>
            <p>
              Regenerative development is a design <br />
              approach that extends beyond <br />
              environmental restoration to include.....
            </p>
            <div className='AboutUs-header-more'>
              <h4 onClick={aboutus}>See more</h4>
            </div>
          </div>

          {/* three */}

          <div className='AboutUs-header-productOne'>
            <img src={aboutThree} alt="" />
            <h2>Celebrating Success: The GG20 Roundup <br /> & New Development</h2>
            <p>
              At Drivyx, we recently celebrated a <br />
              significant milestone with our <br />
              participation in the Gitcoin Grants round <br />20.
            </p>
            <div className='AboutUs-header-more'>
              <h4 onClick={aboutus}>See more</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs