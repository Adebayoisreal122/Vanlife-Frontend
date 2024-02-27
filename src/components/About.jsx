import React from 'react'

const About = () => {
  return (
    <>
     <div className='about'>
        <img className='imgabout' src="/src/assets/images/about.png" alt="" />
    </div>
        <div className='aboutt container'>
            <p  className='abouttext mx-auto my-4'>Don’t squeeze in a sedan when you could relax in a van.</p>
            <p className='aboutt mx-auto'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉) <br /> <br /> 

Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div  className='aboudown container mx-auto my-4'>
            <p className='downtext mx-auto'>Your destination is waiting.
Your van is ready.</p>
    <button className='downbut '>Explore our vans</button>
        </div>
    </>
  )
}

export default About