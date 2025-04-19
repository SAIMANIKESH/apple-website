import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import { rightImg, watchImg } from '../utils';
import VideoCarousel from './VideoCarousel';

const Highlights = () => {
  useGSAP(() => {
    gsap.to('.slow', {
      scrollTrigger: {
        trigger: '.slow',
        toggleActions: "restart none none none",
        start: "top 90%",
        end: "bottom 60%",
        markers: false,
      },
      ease: "power5.inOut",
    });
  
    gsap.to('#title', {
      scrollTrigger: {
        trigger: '#highlights', // section trigger
        start: 'top 80%',
        toggleActions: 'restart reverse restart reverse',
      },
      opacity: 1,
      y: -40,
      duration: 1.5,
      ease: "power5.inOut",
    });
  
    gsap.to('.link', {
      scrollTrigger: {
        trigger: '#highlights',
        start: 'top 80%',
        toggleActions: 'restart reverse restart reverse',
      },
      delay: 0.45,
      opacity: 1,
      y: -40,
      duration: 1.2,
      ease: "power5.inOut",
      stagger: 0.15,
    });
  }, []);
  

  return (
    <section 
      id="highlights" 
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className='mb-12 w-full md:flex items-end justify-between slow'>
          <h1 id="title" className='section-heading slow'>Get the highlights.</h1>

          <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>
              Watch the film
              <img src={watchImg} alt="watch" className='ml-2' />
            </p>

            <p className='link'>
              Watch the event
              <img src={rightImg} alt="right" className='ml-2' />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
