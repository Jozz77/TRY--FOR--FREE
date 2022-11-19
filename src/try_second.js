import React from 'react'
import TryHero from './components/tryHero'
import './try_second.css'
import Recording_logo from './Assets/Recording-logo.png'
import Transcribe_logo from './Assets/file-transcribing.png'

export default function try_second() {
  return (
    <div>
         <TryHero />
         <div className='recording-drag'>
          <div className='recording-content'>
            <div className='recording-image-container'><img src={Recording_logo} alt='some' /></div>
            <h4>Recording 1 name.mp3</h4>
            <div className='or'>
            <hr />
              <p>OR</p>
              <hr />
            </div>

            <p className='upload'>Select another file from your computer</p>
            <button>Transcribe</button>
          </div>
        </div>

        <div className='transcribe-section'>
          <div className='transcribe-1'>
            <img src={Transcribe_logo} alt='some' />
            <p>12%</p>
          </div>
          <div className='transcribe-2'>
            <h4>Transcribing...</h4>
            <input type='range' />
          </div>
        </div>
    </div>
  )
}
