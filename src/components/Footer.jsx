import React from 'react';
import { footerLinks } from '../constants';

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
      <div className='screen-max-width'>
        <div className=''>
          <p className='font-semibold text-gray text-xs'>
            More ways to shop: {' '} 
            <span className='underline text-blue cursor-pointer'>Find an Apple Store {' '} </span> 
            or {' '} 
            <span className='underline text-blue cursor-pointer'>other retailer</span> near you.
          </p>

          <p className='font-semibold text-gray text-xs mt-1'>
            Or call {' '}
            <span className='underline text-blue cursor-pointer'>000800 040 1966</span>.</p>
        </div>

        <div className='bg-neutral-700 my-5 h-[1.0px] w-full' />

        <div className='flex md:flex-row flex-col justify-between'>
          <div className='flex flex-col lg:flex-row'>
            <p className='font-semibold text-gray text-xs cursor-text'>Copyright © 2025 Apple Inc. All rights reserved.</p>

            <div className='flex my-1 lg:my-0 lg:ml-[2.55vw] flex-wrap'>
              {footerLinks.map((link, i) => (
                <p key={link} 
                className='font-semibold text-gray text-xs'
                >
                  <span className='hover:text-blue hover:underline cursor-pointer'>
                    {link}
                  </span>{' '}
                  {(i !== footerLinks.length -1) && (
                    <span className='mx-2'> | </span>
                  )}
                </p>
              ))}
            </div>
          </div>

          <p className='font-semibold text-gray text-xs hover:text-blue hover:underline cursor-pointer'>India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
