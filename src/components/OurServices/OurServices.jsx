import React from 'react'
import servicesOne from "../../assets/servicesOne.png"
import servicesTwo from "../../assets/servicesTwo.png"
import servicesThree from "../../assets/servicesThree.webp"
import "./OurServices.css"

const OurServices = () => {
  return (
    <div className='OurServices'>
      <div className='OurServices-heaader'>
        <hr />
        <h1>Be Part of the Change - Start Regenerating Today</h1>
        <p>
          Drivyx brings together technology and sustainability, offering businesses a streamlined
          approach to transition into regenerative practices. Make <br />
          a real difference while strengthening your ESG credentials.
        </p>

        <div className='OurServices-heaader-content'>
          <div className='OurServices-innerfelex'>
            <div className='OurServices-heaader-contentOne first'>
              <img src={servicesOne} className='onee' alt="" />
              <h2>Job & Services</h2>
              <p>
                Connect with experts and professionals ready to help your <br />
                business achieve its regenerative goals. From consulting to <br />
                hands-on support, Drivyx’s network of skilled service <br />
                providers empowers you with the resources to drive <br />
                impactful change
              </p>
            </div>

            <div className='OurServices-heaader-contentOne '>
              <img src={servicesTwo} className='OurServices-heaader-contentOne-img' alt="" />
              <h2>Grants & Opportunities</h2>
              <p>
                Unlock funding and resources tailored to fuel your mission.<br />
                Our grants and opportunities are designed to support <br />
                projects that prioritize regenerative impact, innovation, and <br />
                sustainable growth.<br />
              </p>
            </div>
          </div>
          <div className='OurServices-heaader-contentOne'>
            <img src={servicesThree} className='OurServices-heaader-contentOne-img' alt="" />
            <h2>Impact project</h2>
            <p>
              Discover and support projects making a real difference. <br />
              Drivyx showcases initiatives that lead the way in <br />
              environmental restoration, community resilience, and <br />
              sustainable practices, creating a network of regenerative  <br />
              impact that you can be part of.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OurServices