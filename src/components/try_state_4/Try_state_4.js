import React from 'react'
import { Link } from 'react-router-dom'
import './try_state_4.css'
import RecordingName from '../../Assets/recording-name-1.png'

export default function Try_fourth() {
  return (
    <section>

        <div className='Analysis'>
          <h2>Transcription and Sentiment Analysis</h2>

          <div className='recording-name'>
            <div><img src={RecordingName} alt='some' /></div>
            <div>
              <p>Recording 1 name. mp3</p>
              <small>10 mb</small>
            </div>
          </div>

          <div className='all-words'>
          <div className='call-words'>
            <span>00:01</span>
            <p>I am glad to be onboarded on Scrybe.</p>
          </div>

          <div className='call-words'>
            <span>00:13</span>
            <p>Thank you for joining the team. Do you require further assistance?</p>
          </div>

          <div className='call-words'>
            <span>00:27</span>
            <p>Yes, please. How do I view your pricing plan?</p>
          </div>

          <div className='call-words'>
            <span>00:34</span>
            <p>To view the current pricing plan, kindly visit https://srcybe.com. Navigate to the pricing page from the header of our website.</p>
          </div>

          <div className='call-words'>
            <span>01:16</span>
            <p>Okay... I am bad at navigating though</p>
          </div>

          <div className='call-words'>
            <span>02:01</span>
            <p>Oh, yes.... seen. Thank you.</p>
          </div>

          <div className='call-words'>
            <span>02:16</span>
            <p>Thank you for your time. We hope you have a wonderful experience with scrybe.</p>
          </div>
          </div>

          <hr />

          <div className='overall-sentiment'>
            <h3>Overall  Sentiment</h3>
            
            <div className='overall-progress'>
              <div className='progress'>
                <p>Agent Friendliness</p>
                <div className='span-div'>
                  <div className='span-1'></div>
                  <p>90%</p>
                </div>
              </div>

              <div className='progress'>
                <p>Customer Satisfaction</p>
                <div className='span-div'>
                  <div className='span-1'></div>
                  <p>90%</p>
                </div>
              </div>

              <div className='progress'>
                <p>Detected Harsh Words</p>
                <div className='span-div'>
                  <div className='span-1'></div>
                  <p>90%</p>
                </div>
              </div>

              <div className='verdict'>
                <p>Verdict:</p>
                <h5>Customer is Satisfied</h5>
             </div>
            </div>
          </div>

        </div>

       <div className='like'>
        <hr />
        <p>Do you like Scrybe?  Track the performance of your customer support team with our easy to use sentiment analysis tool. 
          Get access to more features when you sign up your company.
        </p>
       </div>

       <div className='price-signup'>
        <Link to="" className='button-1'>View Pricing Plan</Link>
        <Link to="" className='button-2'>Sign Up</Link>
       </div>

    </section>
  )
}
