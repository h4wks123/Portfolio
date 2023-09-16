import React from "react";

import Navbar from "../layouts/navbar.js";

function Contact() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat relative bg-tier1">
        <Navbar />
        <div className="absolute bg-tier4 w-[45%] h-[82%] left-28 top-20 rounded-lg">
          <div className="relative top-6 left-8 mb-10">
            <span className="text-tier2 font-semibold text-2xl">Lets </span>
            <span className="text-tier3 font-semibold text-2xl">Talk</span>
          </div>
          <div className="relative flex flex-row items-center left-8 mb-4">
            <div className="w-[45%] pr-4">
              <h1 className="mb-2 text-tier2 text-base">First Name </h1>
              <input
                placeholder="e.g. John"
                className="tier-3 w-full rounded-sm"
              />
            </div>
            <div className="w-[45%] pl-4">
              <h1 className="mb-2 text-tier2 text-base">Last Name </h1>
              <input
                placeholder="e.g. Doe"
                className="tier-3 w-full rounded-sm"
              />
            </div>
          </div>
          <div className="relative flex flex-row items-center left-8 mb-4">
            <div className="w-[45%] pr-4">
              <h1 className="mb-2 text-tier2 text-base">Email Address </h1>
              <input
                placeholder="e.g. Johndoe@gmail.com"
                className="tier-3 w-full rounded-sm"
              />
            </div>
            <div className="w-[45%] pl-4">
              <h1 className="mb-2 text-tier2 text-base">Phone Number </h1>
              <input
                placeholder="e.g. 09455996355"
                className="tier-3 w-full rounded-sm"
              />
            </div>
          </div>
          <div className="relative flex flex-row items-center left-8 mb-4">
            <div className="w-[45%] pr-4">
              <h1 className="mb-2 text-tier2 text-base">Current Address </h1>
              <input
                placeholder="e.g. Johndoe@gmail.com"
                className="tier-3 w-full rounded-sm"
              />
            </div>
            <div className="w-[45%] pl-4">
              <h1 className="mb-2 text-tier2 text-base">Company Name </h1>
              <input
                placeholder="e.g. Company Inc."
                className="tier-3 w-full rounded-sm"
              />
            </div>
          </div>
          <div className="relative flex flex-row items-center justify-center mb-4">
            <div className="w-[45%] pr-4">
              <h1 className="mb-2 text-tier2 text-base flex justify-center">
                Subject{" "}
              </h1>
              <input
                placeholder="e.g. Inquiry Subject"
                className="tier-3 w-full rounded-sm"
              />
            </div>
          </div>
          <div className="relative flex flex-row items-center justify-center mb-4">
            <div className="w-[93%] pr-4">
              <h1 className="mb-2 text-tier2 text-base flex justify-center">
                Message{" "}
              </h1>
              <textarea
                placeholder="Your message here..."
                className="tier-3 w-full h-24 rounded-sm"
              ></textarea>
            </div>
          </div>
          <div className="relative flex flex-row items-center justify-center mb-4">
            <button
              className="bg-tier3 hover:bg-green-400 active:bg-green-400 focus:outline-none focus:ring focus:ring-green-300 
            rounded-md w-36 h-10 drop-shadow-3xl"
            >
              <div className="text-tier2 font-bold text-1xl">
                SUBMIT
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
