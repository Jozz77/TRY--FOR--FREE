import React from 'react'
import { Link } from 'react-router-dom';
import Try_pic from '../Assets/Try-hero.png'
import './try-hero.css'
export default function tryHero() {
  return (
    <section className='try-section'>
        <div className='Hero-section'>
            <div className='hero-1'>
                <h3>Try for Free</h3>
                <p>Experience a touch of Scrybe without 
                    committing to our subscriptions. Try our other features when you sign up with us.
                </p>
                <Link to="/" className='hero-button'>Sign Up Now</Link>
            </div>
            <div className='hero-2'>
                <img src={Try_pic} alt='some' />
            </div>
        </div>

        <div className='down-hero'>
            <hr />
            <p>Scrybe offers unauthenticated users trials to run sentimental analysis on .mp3 customer/agent records without the need to sign up. However, to access more enjoyable features to easily track the customer support 
                performance of your company, you are required to Sign Up/Sign In with your correct company email.
            </p>
        </div>
    </section>
  )
}
