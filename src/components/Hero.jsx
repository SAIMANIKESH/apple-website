import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useState, useEffect, useRef } from 'react'

import { heroVideo, smallHeroVideo } from '../utils'

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth > 768 ? heroVideo : smallHeroVideo)
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setVideoSrc(heroVideo)
    } else {
      setVideoSrc(smallHeroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useGSAP(() => {
    // gsap.to('#hero', { delay: 2, opacity: 1, x: 50, duration: 2, ease: "power1.inOut"  }) // y +ve -> comes from top animation nd viceversa
    gsap.to('#cta', { delay: 2, opacity: 1, y: -50, duration: 2, ease: "power1.inOut" })
  }, [])

  function SmoothLoopVideo() {
    const videoRef = useRef(null)

    useEffect(() => {
      const video = videoRef.current;

      const animateText = () => {
        gsap.to(".hero-title", { x: 0, opacity: 1, duration: 3, ease: "power1.out" });
      };

      const timeout = () => { 
        setTimeout(() => {
          video.play()
          gsap.set(".hero-title", { x: -80, opacity: 0 });
          setTimeout(() => {
            animateText();
          }, 2000);
        }, 3000);
      };
      video.addEventListener('ended', timeout);
      
      setTimeout(() => {
        gsap.set(".hero-title", { x: -80, opacity: 0 });
        animateText();
      }, 2000);

      return () => {
        video.removeEventListener('ended', timeout);
      }
    }, []);

    return (
      <>
        <div className='w-full flex-center flex-col mt-16 mb-5'>
          <p className='hero-title' id='hero'>iPhone 15 Pro</p>
        </div>
        <div className='flex-center'>
          <video ref={videoRef} className='pointer-events-none md:w-10/12 w-9/12' autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </>
    )
  }

  return (
    <section className='w-full h-auto bg-black relative'>
      <SmoothLoopVideo />
      <div id='cta'
        className='flex flex-col items-center opacity-0 translate-y-20'
      >
        <a href='#highlights' className='btn'>Buy</a>
        <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>
    </section>
    
  )
}

export default Hero
