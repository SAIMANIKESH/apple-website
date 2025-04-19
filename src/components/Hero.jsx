import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
  const videoRef = useRef();
  const [videoSrc, setVideoSrc] = useState(window.innerWidth > 768 ? heroVideo : smallHeroVideo)

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setVideoSrc(heroVideo)
    } else {
      setVideoSrc(smallHeroVideo)
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  useGSAP(() => {
    gsap.set(".hero-title", { x: -80, opacity: 0 });

    gsap.to('#hero', { 
      scrollTrigger: {
        trigger: '#hero',
        toggleActions: 'restart reverse restart reverse',
        start: "top 20%",
        markers: false,
      },
      delay: 2, 
      opacity: 1, x: 0, 
      duration: 2, 
      ease: "power8.inOut"  
    }); // y +ve -> comes from top animation nd viceversa

    gsap.to('.video', {
      scrollTrigger: {
        trigger: '.video',
        toggleActions: 'play pause reverse restart',
        start: 'top 20%',
      },
      onComplete: () => {
        videoRef.current.play();
      }
    });

    gsap.to('#cta', { delay: 2, opacity: 1, y: -50, duration: 2, ease: "power5.inOut" });
  }, [])

  // function SmoothLoopVideo() {
  //   const videoRef = useRef(null)

  //   useEffect(() => {
  //     const video = videoRef.current;

  //     const animateText = () => {
  //       gsap.to(".hero-title", { x: 0, opacity: 1, duration: 3, ease: "power1.out" });
  //     };

  //     const timeout = () => { 
  //       setTimeout(() => {
  //         video.play()
  //         gsap.set(".hero-title", { x: -80, opacity: 0 });
  //         setTimeout(() => {
  //           animateText();
  //         }, 2000);
  //       }, 3000);
  //     };
  //     video.addEventListener('ended', timeout);
      
  //     setTimeout(() => {
  //       gsap.set(".hero-title", { x: -80, opacity: 0 });
  //       animateText();
  //     }, 2000);

  //     return () => {
  //       video.removeEventListener('ended', timeout);
  //     }
  //   }, []);

  //   return (
  //     <>
  //       <div className='w-full flex-center flex-col mt-16 mb-5'>
  //         <p className='hero-title' id='hero'>iPhone 15 Pro</p>
  //       </div>
  //       <div className='flex-center'>
  //         <video ref={videoRef} className='pointer-events-none md:w-10/12 w-9/12' autoPlay muted playsInline={true} key={videoSrc}>
  //           <source src={videoSrc} type='video/mp4' />
  //         </video>
  //       </div>
  //     </>
  //   )
  // };

  return (
    <section className='w-full h-auto bg-black relative'>
      {/* <SmoothLoopVideo /> */}
      <div className='w-full flex-center flex-col mt-16 mb-5'>
          <p className='hero-title' id='hero'>iPhone 15 Pro</p>
      </div>

      <div className='flex-center'>
        <video ref={videoRef} className='pointer-events-none video md:w-10/12 w-9/12' 
          autoPlay muted playsInline={true} key={videoSrc}
        >
          <source src={videoSrc} type='video/mp4' />
        </video>
      </div>

      <div id='cta'
        className='flex flex-col items-center opacity-0 translate-y-20'
      >
        <a href='#highlights' className='btn'>Buy</a>
        <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>
    </section>
    
  );
};

export default Hero;
