import React from "react";
import { useState } from "react";

import Landscape1 from "../images/Landscape1.jpg";
import Landscape2 from "../images/Landscape2.jpg";
import Landscape3 from "../images/Landscape3.jpg";

import Communication from "../images/Communication.svg";
import Algorithm from "../images/Algorithm.svg";
import Web_Design from "../images/Web_Design.svg";

import USC_Dept from "../images/usc-older-than-ust-Esquire-Philippines.jpg";
import USC_logo from "../images/University_of_San_Carlos_logo.png";
import STC_Dept from "../images/stc-dept.jpg";
import STC_logo from "../images/STC_logo_real.png";
import SaintPaul_Dept from '../images/StPaul_dept.jpg';
import SaintPaul_Logo from '../images/SaintPaul_logo.png';

import { MiniSquare1, MiniSquare2, MiniSquare3, MiniSquare4, MiniSquare5, MiniSquare6, MiniSquare7, MiniSquare8, MiniSquare9, MiniSquare10} from '../layouts/MiniSquare.js';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat relative bg-tier1">
        {/* LARGE PENTAGON WITH IMAGE*/}
        <div className="absolute bottom-72 left-44 w-[37.5%] h-[37.5%] transition-transform transform hover:scale-95">
          <svg
            className="drop-shadow-4xl"
            viewBox="0 0 84 84"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="pentagon-clip-path">
                <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" />
              </clipPath>
            </defs>
            <path
              d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"
              fill="#01BE96"
            />
            <image
              x="0"
              y="0"
              width="100%"
              height="100%"
              href={Landscape1}
              clipPath="url(#pentagon-clip-path)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </div>

        {/* MINI BOTTOM LEFT PENTAGON WITH IMAGE*/}
        <div className="absolute bottom-16 -left-40 w-[30%] h-[30%] transition-transform transform hover:scale-95">
          <svg
            className="drop-shadow-4xl"
            viewBox="0 0 84 84"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="pentagon-clip-path">
                <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" />
              </clipPath>
            </defs>
            <path
              d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"
              fill="#01BE96"
            />
            <image
              x="0"
              y="0"
              width="100%"
              height="100%"
              href={Landscape3}
              clipPath="url(#pentagon-clip-path)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </div>

        {/* MINI TOP LEFT PENTAGON WITH IMAGE*/}
        <div className="absolute top-20 -left-28 w-[25%] h-[25%] transition-transform transform hover:scale-95">
          <svg
            className="drop-shadow-4xl"
            viewBox="0 0 84 84"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="pentagon-clip-path">
                <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" />
              </clipPath>
            </defs>
            <path
              d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"
              fill="#01BE96"
            />
            <image
              x="0"
              y="0"
              width="100%"
              height="100%"
              href={Landscape2}
              clipPath="url(#pentagon-clip-path)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </div>
      </div>

      {/* ABOUT PAGE INTRODUCTION */}
      <div class="absolute bottom-6 right-44 w-[36%] h-[68%]">
        <div class="mb-6">
          <span className="text-tier2 text-2xl">All </span>
          <span className="text-tier3 text-2xl">About Me</span>
        </div>
        <div class="mb-6">
          <h1 className="text-tier3 text-5xl font-bold mb-3">
            IVANNE DAVE L. BAYER
          </h1>
        </div>
        <div class="mb-8">
          <h1 className="text-tier2 font-light text-1xl mb-2">
          Hello! I'm a passionate beginner in the world of programming, 
          eager to embark
          </h1>
          <h1 className="text-tier2 font-light text-1xl mb-2">
          on exciting coding adventures. My journey started with a fascination 
          for problem-
          </h1>
          <h1 className="text-tier2 font-light text-1xl mb-2">
          solving and a determination to learn. I've dived headfirst into languages 
          like C
          </h1>
          <h1 className="text-tier2 font-light text-1xl mb-2">
          and Php, constantly expanding my skills through online courses and 
          personal
          </h1>
          <h1 className="text-tier2 font-light text-1xl mb-2">
          As a lifelong learner, I'm thrilled to share my evolving portfolio, 
          showcasing my
          </h1>
          <h1 className="text-tier2 font-light text-1xl mb-2">
          dedication to mastering the art of coding. Join me on this exciting 
          ride of growth 
          </h1>
          <h1 className="text-tier2 font-light text-1xl mb-2">
          and discovery!
          </h1>
        </div>
      </div>

      {/* WORK EXPERIENCE */}
      <div className="absolute w-[100%] h-[600px] bg-tier4">
        <div className="ml-24">
          <div class=" mb-6 mt-12">
            <span className="text-tier2 text-2xl">My </span>
            <span className="text-tier3 text-2xl">Services</span>
          </div>
          <div class="mb-8">
            <h1 className="text-tier2 text-4xl font-bold mb-3">
              Personal Skillsets
            </h1>
          </div>
          <div className="flex">
            <div className="bg-tier1 w-[30%] h-[55%] mr-4 flex flex-col items-center justify-center">
              <img
                src={Communication}
                alt="Communication"
                width="150px"
                height="200px"
                class="mb-3 mt-4"
              />
              <h1 className="text-tier2 font-bold text-2xl mb-3">
                Leadership Skills
              </h1>
              <p className="text-tier2 font-light ml-3 mr-3 text-center mb-4">
                Ivanne's leadership skills tend to shine brightly, demonstrating
                his ability to inspire and guide teams toward achieving
                ambitious goals while fostering a collaborative and inclusive
                work environment.
              </p>
              <br />
            </div>
            <div className="bg-tier1 w-[30%] h-[55%] mr-4 flex flex-col items-center justify-center">
              <img
                src={Web_Design}
                alt="Web_Design"
                width="150px"
                height="200px"
                class="mb-3 mt-4"
              />
              <h1 className="text-tier2 font-semibold text-2xl mb-3">
                Web Designer
              </h1>
              <p className="text-tier2 font-light ml-3 mr-3 text-center mb-4">
                The author posesses a diverse skill set in web design, combining
                a keen eye for aesthetics with proficiency in HTML, CSS,
                JavaScript, and a knack for user experience optimization, making
                him a valuable asset to any digital project.
              </p>
            </div>
            <div className="bg-tier1 w-[30%] h-[55%] mr-4 flex flex-col items-center justify-center">
              <img
                src={Algorithm}
                alt="Algorithm"
                width="150px"
                height="200px"
                class="mb-3 mt-4"
              />
              <h1 className="text-tier2 font-semibold text-2xl mb-3">
                Data Structures
              </h1>
              <p className="text-tier2 font-light ml-3 mr-3 text-center mb-4">
                In the realm of data structures, his proficiency shines as
                Ivanne seamlessly navigate intricate algorithms and efficiently
                manipulate information for optimal problem-solving.
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>

      {/* WORK EXPERIENCE */}
      <div className="relative w-[100%] h-[600px] bg-tier4">
        <div className="ml-24">
          <div class=" mb-6 mt-12">
            <span className="text-tier2 text-2xl">My </span>
            <span className="text-tier3 text-2xl">Services</span>
          </div>
          <div class="mb-8">
            <h1 className="text-tier2 text-4xl font-bold mb-3">
              Personal Skillsets
            </h1>
          </div>
          <div className="flex">
            <div className="bg-tier1 w-[30%] h-[55%] mr-4 flex flex-col items-center 
            justify-center transition-transform transform hover:scale-95 hover:drop-shadow-3xl rounded-lg">
              <img
                src={Communication}
                alt="Communication"
                width="150px"
                height="200px"
                class="mb-3 mt-4"
              />
              <h1 className="text-tier2 font-bold text-2xl mb-3">
                Leadership Skills
              </h1>
              <p className="text-tier2 font-light ml-3 mr-3 text-center mb-4">
                Ivanne's leadership skills tend to shine brightly, demonstrating
                his ability to inspire and guide teams toward achieving
                ambitious goals while fostering a collaborative and inclusive
                work environment.
              </p>
              <br />
            </div>
            <div className="bg-tier1 w-[30%] h-[55%] mr-4 flex flex-col items-center 
            justify-center transition-transform transform hover:scale-95 hover:drop-shadow-3xl rounded-lg">
              <img
                src={Web_Design}
                alt="Web_Design"
                width="150px"
                height="200px"
                class="mb-3 mt-4"
              />
              <h1 className="text-tier2 font-semibold text-2xl mb-3">
                Web Designer
              </h1>
              <p className="text-tier2 font-light ml-3 mr-3 text-center mb-4">
                The author posesses a diverse skill set in web design, combining
                a keen eye for aesthetics with proficiency in HTML, CSS,
                JavaScript, and a knack for user experience optimization, making
                him a valuable asset to any digital project.
              </p>
            </div>
            <div className="bg-tier1 w-[30%] h-[55%] mr-4 flex flex-col items-center 
            justify-center transition-transform transform hover:scale-95 hover:drop-shadow-3xl rounded-lg">
              <img
                src={Algorithm}
                alt="Algorithm"
                width="150px"
                height="200px"
                class="mb-3 mt-4"
              />
              <h1 className="text-tier2 font-semibold text-2xl mb-3">
                Data Structures
              </h1>
              <p className="text-tier2 font-light ml-3 mr-3 text-center mb-4">
                In the realm of data structures, his proficiency shines as
                Ivanne seamlessly navigate intricate algorithms and efficiently
                manipulate information for optimal problem-solving.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="relative w-[100%] h-[700px] bg-tier1 flex overflow-hidden">
        <div class="mb-8 mt-12 ml-24">
          <span className="text-tier2 text-2xl">My </span>
          <span className="text-tier3 text-2xl">Education</span>
        </div>

        {/* PENTAGON #1 */}
        <div className="absolute top-16 -left-40 w-[30%] h-[30%] transition-transform transform hover:scale-95">
          <svg
            className="drop-shadow-4xl"
            viewBox="0 0 84 84"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="pentagon-clip-path">
                <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" />
              </clipPath>
            </defs>
            <path
              d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"
              fill="#01BE96"
            />
          </svg>
        </div>

        {/* PENTAGON #2 */}
        <div
          className="absolute bottom-40 left-44 w-[30%] h-[30%] transition-transform transform hover:scale-95"
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          <svg
            className="drop-shadow-4xl"
            viewBox="0 0 84 84"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="pentagon-clip-path">
                <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" />
              </clipPath>
            </defs>

            <image
                x="0"
                y="0"
                width="100%"
                height="100%"
                href={SaintPaul_Dept}
                clipPath="url(#pentagon-clip-path)"
                preserveAspectRatio="xMidYMid slice"
                style={{ opacity: isHovered1 ? 0.3 : 0.9 }}
              />

            {isHovered1 && (
              <g transform="scale(0.48)">
                <text
                  x="88"
                  y="45"
                  dominant-baseline="middle"
                  text-anchor="middle"
                  className={`fill-current text-tier2 text-sm font-bold`}
                >
                  Saint Paul
                </text>
                <text
                  x="88"
                  y="65"
                  dominant-baseline="middle"
                  text-anchor="middle"
                  className={`fill-current text-tier2 text-sm font-bold`}
                >
                  Learning Center
                </text>
                <image
                  x="55"
                  y="85"
                  width="75%"
                  height="75%"
                  href={SaintPaul_Logo}
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            )}
          </svg>
        </div>

        {/* PENTAGON #3 */}
        <div
          className="absolute top-16 left-[505px] w-[33%] h-[33%] group transition-transform transform hover:scale-95"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <svg
            className="drop-shadow-4xl"
            viewBox="0 0 84 84"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="pentagon-clip-path">
                <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" />
              </clipPath>
            </defs>

            <image
                x="0"
                y="0"
                width="100%"
                height="100%"
                href={USC_Dept}
                clipPath="url(#pentagon-clip-path)"
                preserveAspectRatio="xMidYMid slice"
                style={{ opacity: isHovered ? 0.3 : 0.9 }}
              />

            {isHovered && (
              <g transform="scale(0.45)">
                <text
                  x="92"
                  y="45"
                  dominant-baseline="middle"
                  text-anchor="middle"
                  className={`fill-current text-tier2 text-sm font-bold`}
                >
                  University of
                </text>
                <text
                  x="92"
                  y="65"
                  dominant-baseline="middle"
                  text-anchor="middle"
                  className={`fill-current text-tier2 text-sm font-bold`}
                >
                  San Carlos
                </text>
                <image
                  x="52"
                  y="75"
                  width="100%"
                  height="100%"
                  href={USC_logo}
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            )}
          </svg>
        </div>

        {/* PENTAGON #4 */}
        <div
          className="absolute bottom-40 right-44 w-[30%] h-[30%] transition-transform transform hover:scale-95"
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <svg
            className="drop-shadow-4xl"
            viewBox="0 0 84 84"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="pentagon-clip-path">
                <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" />
              </clipPath>
            </defs>
    
            <image
              x="0"
              y="0"
              width="100%"
              height="100%"
              href={STC_Dept}
              clipPath="url(#pentagon-clip-path)"
              preserveAspectRatio="xMidYMid slice"
              style={{ opacity: isHovered2 ? 0.3 : 0.9 }}
              />
    
            {isHovered2 && (
              <g transform="scale(0.48)">
                <text
                  x="88"
                  y="45"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className={`fill-current text-tier2 text-sm font-bold`}
                >
                  Saint Theresa
                </text>
                <text
                  x="88"
                  y="65"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className={`fill-current text-tier2 text-sm font-bold`}
                >
                  College of Cebu
                </text>
                <image
                  x="45"
                  y="68"
                  width="100%"
                  height="100%"
                  href={STC_logo}
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            )}
          </svg>
        </div>    

        {/* PENTAGON #5 */}
        <div className="absolute top-16 -right-40 w-[30%] h-[30%] transition-transform transform hover:scale-95">
          <svg
            className="drop-shadow-4xl"
            viewBox="0 0 84 84"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="pentagon-clip-path">
                <path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z" />
              </clipPath>
            </defs>
            <path
              d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"
              fill="#01BE96"
            />
          </svg>
        </div>
      </div>

      {/* PROGRAMMING LANGUAGES */}
      <div className="relative w-[100%] h-[700px] bg-tier4 flex overflow-hidden">
        <div class="mb-8 mt-24 ml-24">
            <span className="text-tier2 text-2xl">Programming </span>
            <span className="text-tier3 text-2xl">Tools</span>
        </div> 
        <div>
          <MiniSquare1 />
          <MiniSquare2 />
          <MiniSquare3 />
          <MiniSquare4 />
          <MiniSquare5 />
          <MiniSquare6 />
          <MiniSquare7 />
          <MiniSquare8 />
          <MiniSquare9 />
          <MiniSquare10 />
        </div>
      </div>
    </div>
  );
};

export default About;
