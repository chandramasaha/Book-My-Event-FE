import React from "react";

const Landing = () => {
  return (
    <div className="flex landing">
      <div className="flex flex-wrap-reverse md:flex-nowrap items-center py-2 md:px-10 lg:px-32 lg:space-x-28">
        <div className="px-2 md:px-0">
          <div className="text-white font-bold lg:text-2xl lg:pb-4 text-xl pb-2">
            Google Developer Student Clubs
          </div>
          <div className="flex space-x-2 text-white lg:pb-20 md:pb-10 pb-5 md:text-base text-xs">
            <img src="/LandingPage/location_on.svg" alt="location icon" />
            <div>Kattankulathur, Chennai, India</div>
          </div>
          <div className="text-white space-y-4 text-xs lg:text-base">
            <div>About</div>
            <div className="pb-2">
              Explore more than 1,900 college and university chapters across
              more than 100 countries. Meet and learn with other budding
              developers and build solutions for local businesses and
              communities with Google technology.
            </div>
          </div>
        </div>

        <div>
          <img
            src="/LandingPage/profile.svg"
            alt="profile"
            className="lg:max-w-xl md:max-w-sm flex justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
