import React from 'react'
import TryHero from './components/try_hero/tryHero'
// import TryState1 from './components/try_state_1/try_state_1'
// import TryState3 from './components/try_state_3/try_state_3'
import TryState4 from './components/try_state_4/Try_state_4'

export default function Try() {
  return (
    <section>
        <TryHero />
        {/* <TryState1 /> */}
        {/* <TryState3 /> */}
        <TryState4 />

    </section>
  )
}
