import React from 'react'
import './try_state_1.css'
import Recording_logo from '../../Assets/Recording-logo.png'

export default function try_state_1() {
  return (
    <div>
         <div className='recording-drag'>
          <div className='recording-content'>
            <div className='recording-image-container'><img src={Recording_logo} alt='some' /></div>
            <h4>Drag and drop agent audio call recordings</h4>
            <div className='or'>
            <hr />
              <p>OR</p>
              <hr />
            </div>

            <p className='upload'>Browse from your computer</p>
            <button>Transcribe</button>
          </div>
        </div>

        <div className='try-note'>
          <p>Please note;</p>
          <ul>
            <li>You may upload, transcribe and analyse only one recording at a  time.</li>
            <li>File must not be larger than 5mb.</li>
            <li>Transcription may take up to 3 minutes, kindly wait or sign up to use the job ID feature.</li>
            <li>Downloading sentiment anlysis is currently only available on the webapp.</li>
            <li>Tracking sentiment anlysis records is currently only available on the webapp.</li>
          </ul>
        </div>
    </div>
  )
}
