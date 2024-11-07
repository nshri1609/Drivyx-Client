import React from 'react'
import chooseOne from "../../assets/choose-one.jpg"
import chooseTwo from "../../assets/choose-two.png"
import chooseThree from "../../assets/choose-three.jpg"
import "./WhyChoose.css"

const WhyChoose = () => {
  return (
    <div className='WhyChoose'>
      <div className='WhyChoose-header'>
        <h1>Why Choose Drivyx?</h1>
        <div className='WhyChoose-header-main'>
          <div className='WhyChoose-header-mainContent'>
            <div>
              <img src={chooseOne} alt="" />
            </div>
            <div className='WhyChoose-innerSection'>
              <h2>Comprehensive ESG Integration</h2>
              <p>
                Embed environmental, social, and governance (ESG) standards directly into <br />
                your operations, with seamless tools designed to measure and amplify your <br /> impact.
              </p>
            </div>
          </div>
        </div>

        {/* two */}

        <div className='WhyChoose-header-main'>
          <div className='WhyChoose-header-mainContent'>
            <div className='WhyChoose-innerSection'>
              <h2>Dynamic Community Engagement</h2>
              <p>
              Connect with a thriving community of like-minded businesses and <br />
              changemakers. Collaborate, learn, and grow alongside others dedicated to <br /> making a regenerative impact.
              </p>
            </div>
            <div>
              <img src={chooseTwo} alt="" />
            </div>
          </div>
        </div>

        {/* three */}

        <div className='WhyChoose-header-main'>
          <div className='WhyChoose-header-mainContent'>
            <div>
              <img src={chooseThree} alt="" />
            </div>
            <div className='WhyChoose-innerSection'>
              <h2>Real Rewards for Real Impact</h2>
              <p>
              Your positive actions deserve recognition. Drivyx rewards businesses that <br />
              demonstrate real impact, turning your regenerative efforts into tangible <br /> benefits for your brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChoose