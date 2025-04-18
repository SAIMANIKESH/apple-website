import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target, animationProps,scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ease: 'power5.inOut',
      duration: 1.5,
      ...scrollProps,
    },
  });
};

export const animateWithGsapTimeline = (
  timeline, rotationRef, rotationState, firstTarget, seconfTarget, animationProps) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut',
  });

  timeline.to(firstTarget, {
    ...animationProps,
    ease: 'power2.inOut',
  }, '<');
  
  timeline.to(seconfTarget, {
    ...animationProps,
    ease: 'power2.inOut',
  }, '<');
};