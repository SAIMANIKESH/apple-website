export const animateWithGsapTimeline = (
  timeline, rotationRef, rotationState, firstTarget, seconfTarget, animationProps) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut',
  })

  timeline.to(firstTarget, {
    ...animationProps,
    ease: 'power2.inOut',
  }, '<')
  
  timeline.to(seconfTarget, {
    ...animationProps,
    ease: 'power2.inOut',
  }, '<')
};