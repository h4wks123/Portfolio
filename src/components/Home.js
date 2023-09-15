import React from 'react';

import BayerImage from '../images/BayerPNG-removebg-preview.png';
import Instagram from '../images/instagram.png';
import Twitter from '../images/twitter.png';
import Facebook from '../images/facebook.png';

const Home=()=> {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat relative bg-tier1">

        {/* LARGE PENTAGON WITH IMAGE*/}
        <div className='fixed bottom-80 right-44 w-[37.5%] h-[37.5%]'>
          <svg className="drop-shadow-4xl" viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="pentagon-clip-path">
                <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" />
              </clipPath>
            </defs>
            <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" fill="#01BE96" />
            <image
              x="0"
              y="0"
              width="100%"
              height="100%"
              href={BayerImage}
              clipPath="url(#pentagon-clip-path)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </div>

        {/* MINI BOTTOM RIGHT PENTAGON */}
        <div className='fixed bottom-24 -right-40 w-[30%] h-[30%]'>
          <svg className="drop-shadow-4xl" viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="pentagon-clip-path">
                <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" />
              </clipPath>
            </defs>
            <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" fill="#01BE96" />
          </svg>
        </div>

        {/* MINI TOP RIGHT PENTAGON */}
        <div className='fixed -top-16 -right-40 w-[30%] h-[30%]'>
          <svg className="drop-shadow-4xl" viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="pentagon-clip-path">
                <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" />
              </clipPath>
            </defs>
            <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" fill="#01BE96" />
          </svg>
        </div>
        
        {/* HOME PAGE DETAILS WITH USER INFO*/}
        <div class='fixed bottom-14 left-44 w-[36%] h-[68%]'>
          <div class="mb-6">
            <span className="text-tier2 text-2xl">Hello </span>
            <span className="text-tier3 text-2xl">I am</span>
          </div>
          <div class="mb-6"> 
            <h1 className="text-tier3 text-5xl font-bold mb-3">IVANNE DAVE L. BAYER</h1>
            <h1 className="text-tier2 font-semibold text-2xl ">Computer Science Under Graduate - Yr. 3</h1>
          </div>
          <div class="mb-8">
            <h1 className="text-tier2 font-light text-1xl mb-2">Ivanne is a passionate computer science student with a relentless curiosity for all </h1>
            <h1 className="text-tier2 font-light text-1xl mb-2">things tech. From coding elegant algorithms to designing intuitive user interfaces,</h1> 
            <h1 className="text-tier2 font-light text-1xl mb-2">he thrives on the challenge of turning ideas into functional, user-friendly software.</h1> 
            <h1 className="text-tier2 font-light text-1xl mb-2">With a keen eye for detail and a dedication to lifelong learning, he is excited to</h1> 
            <h1 className="text-tier2 font-light text-1xl mb-2">share his journey and showcase all of his projects in this portfolio.</h1>
          </div>
          <div class="mb-6">
            <button className="bg-tier3 hover:bg-green-400 active:bg-green-400 focus:outline-none focus:ring focus:ring-green-300 
            rounded-md w-36 h-10 drop-shadow-3xl">
              <h1 className="text-tier2 font-bold text-1xl">READ MORE</h1>
            </button>
          </div>

          {/* FOOTER DETAILS */}
          <div className="flex items-center">
            <span className="text-tier2 2xl font-semibold mr-4">Check out my</span>

          {/* FACEBOOK */}
              <a className='w-16 h-16 mr-4' href="https://web.facebook.com/ivanne.bayer" target="_blank" rel="noopener noreferrer">
                <svg className="drop-shadow-3xl" viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <clipPath id="pentagon-clip-path">
                      <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" />
                    </clipPath>
                  </defs>
                  <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" fill="#01BE96" />
                  <image
                    x="22"
                    y="22"
                    width="50%"
                    height="50%"
                    href={Facebook}
                    clipPath="url(#pentagon-clip-path)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
              </a>

          {/* INSTAGRAM */}    
              <a className='w-16 h-16 mr-4' href="https://www.instagram.com/h4wks123/" target="_blank" rel="noopener noreferrer">
                <svg className="drop-shadow-3xl" viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <clipPath id="pentagon-clip-path">
                      <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" />
                    </clipPath>
                  </defs>
                  <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" fill="#01BE96" />
                  <image
                    x="22"
                    y="22"
                    width="50%"
                    height="50%"
                    href={Instagram}
                    clipPath="url(#pentagon-clip-path)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
              </a>

          {/* TWITTER */}    
              <a className='w-16 h-16 mr-4' href="https://twitter.com/ivannebayr" target="_blank" rel="noopener noreferrer">
                <svg className="drop-shadow-3xl" viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <clipPath id="pentagon-clip-path">
                      <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" />
                    </clipPath>
                  </defs>
                  <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" fill="#01BE96" />
                  <image
                    x="22"
                    y="22"
                    width="50%"
                    height="50%"
                    href={Twitter}
                    clipPath="url(#pentagon-clip-path)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
              </a>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
