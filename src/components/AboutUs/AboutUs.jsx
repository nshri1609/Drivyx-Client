import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div className='AboutUs'>
      <div className='AboutUs-header'>
        <h1>Things to know about Drivyx ESG platform</h1>
        <h3 className='AboutUs-header-h3'>Stay updated with the latest industry trends and insights.</h3>

        <div className='AboutUs-header-product'>
          <div className='AboutUs-header-productOne'>
            <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F566775ed8fc8c3e0bd7623a914b69b7c.cdn.bubble.io%2Ff1721317825778x327141669860052200%2Fa2edbe182b3a38c8f3a001ebd269390d7078f922-1792x1024.png?w=512&h=293&auto=compress&dpr=1&fit=max" alt="" />
            <h2>Transforming Business for a Sustainable Future</h2>
            <p>
              Albert Einstein once said, "We cannot <br />
              solve our problems with the same thinking <br />
              we used when we created them."
            </p>
            <div className='AboutUs-header-more'>
              <h4>See more</h4>
            </div>
          </div>

          {/* two */}

          <div className='AboutUs-header-productOne'>
            <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F566775ed8fc8c3e0bd7623a914b69b7c.cdn.bubble.io%2Ff1721317892017x296847689628830340%2Fa6ca642492a3d6531c8371d96d66656e6122af3b-1792x1024.webp?w=512&h=293&auto=compress&dpr=1&fit=max" alt="" />
            <h2>What is Regenerative Development?</h2>
            <p>
              Regenerative development is a design <br />
              approach that extends beyond <br />
              environmental restoration to include.....
            </p>
            <div className='AboutUs-header-more'>
              <h4>See more</h4>
            </div>
          </div>

          {/* three */}

          <div className='AboutUs-header-productOne'>
            <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F566775ed8fc8c3e0bd7623a914b69b7c.cdn.bubble.io%2Ff1721317838256x701189308683146900%2F13f8bfc570405affa1d6e140a9873e37280fccc7-1792x1024.webp?w=512&h=293&auto=compress&dpr=1&fit=max" alt="" />
            <h2>Celebrating Success: The GG20 Roundup <br /> & New Development</h2>
            <p>
              At Drivyx, we recently celebrated a <br />
              significant milestone with our <br />
              participation in the Gitcoin Grants round <br />20.
            </p>
            <div className='AboutUs-header-more'>
              <h4>See more</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs