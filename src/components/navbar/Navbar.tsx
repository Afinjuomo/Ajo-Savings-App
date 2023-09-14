import React from 'react';
import {SearchNormal1}from 'iconsax-react';

import Defaultprofile from '../../assets/images/Defaultprofile.svg';

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
      <div className="relative md:w-[65px]">
        <SearchNormal1 fontSize={20} className="absolute text-gray-400 -translate-y-1/2 top-1/2 left-3" />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none border border-gray-300 w-full md:w-[24rem] sm:w-[65px] h-10 pl-11 pr-4 rounded-3xl"
        />
      </div>
      <div className="flex flex-col items-center gap-2 sm:flex-row">
        <div className="relative flex items-center gap-2">
          <div className="flex ml-2 text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
            <img
              className="w-10 h-10 bg-center bg-no-repeat bg-cover rounded-full bg-sky-500"
              src={Defaultprofile}
              alt=""
            />
          </div>
        </div>
        <span className="text-gray-600">Deborah</span>
      </div>
    </div>
  );
};

export default Navbar;
