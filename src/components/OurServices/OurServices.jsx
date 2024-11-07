import React from 'react'
import servicesOne from "../../assets/servicesOne.png"
import servicesTwo from "../../assets/servicesTwo.png"
import servicesThree from "../../assets/servicesThree.webp"
import "./OurServices.css"

const OurServices = () => {
  return (
    <div className='OurServices'>
      <div className='OurServices-heaader'>
        <h1>Be Part of the Change - Start Regenerating Today</h1>
        <p>
          Drivyx brings together technology and sustainability, offering businesses a streamlined
          approach to transition into regenerative practices. Make <br />
          a real difference while strengthening your ESG credentials.
        </p>

        <div className='OurServices-heaader-content'>
          <div className='OurServices-innerfelex'>
            <div className='OurServices-heaader-contentOne'>
              <img src={servicesOne} alt="" />
              <h2>Job & Services</h2>
              <p>
                Connect with experts and professionals ready to help your <br />
                business achieve its regenerative goals. From consulting to <br />
                hands-on support, Drivyx’s network of skilled service <br />
                providers empowers you with the resources to drive <br />
                impactful change
              </p>
            </div>

            <div className='OurServices-heaader-contentOne'>
              <img src={servicesTwo} alt="" />
              <h2>Job & Services</h2>
              <p>
                Connect with experts and professionals ready to help your <br />
                business achieve its regenerative goals. From consulting to <br />
                hands-on support, Drivyx’s network of skilled service <br />
                providers empowers you with the resources to drive <br />
                impactful change
              </p>
            </div>
          </div>
          <div className='OurServices-heaader-contentOne'>
            <img src={servicesThree} alt="" />
            <h2>Job & Services</h2>
            <p>
              Connect with experts and professionals ready to help your <br />
              business achieve its regenerative goals. From consulting to <br />
              hands-on support, Drivyx’s network of skilled service <br />
              providers empowers you with the resources to drive <br />
              impactful change
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OurServices