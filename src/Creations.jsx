import React from 'react'
import './styles.css'

export const Creations = () => {
  return (
    <div className='creations-main'>
        <nav className='creations-nav'>
            <p>OUR CREATIONS</p>
            <button>SEE ALL</button>
        </nav>

        <div className='creations-img'>
            <div className='creations-1 cimg'>
                <p>DEEP EARTH</p>
            </div>

            <div className='creations-2 cimg'>
                <p>NIGHT ARCADE</p>
            </div>

            <div className='creations-3 cimg'>
                <p>SOCCER TEAM VR</p>
            </div>

            <div className='creations-4 cimg'>
                <p>THE GRID</p>
            </div>

            <div className='creations-5 cimg'>
                <p>FROM UP ABOVE VR</p>
            </div>

            <div className='creations-6 cimg'>
                <p>POCKET BOREALIS</p>
            </div>

            <div className='creations-7 cimg'>
                <p>THE CURIOSITY</p>
            </div>

            <div className='creations-8 cimg'>
                <p>MAKE IT FISHEYE</p>
            </div>
        </div>
    </div>
  )
}
