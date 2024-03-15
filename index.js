gsap.registerPlugin(ScrollTrigger);

const background = document.querySelector('.background');
const darkSection = document.querySelector('.dark-section');

gsap.to(background, {
  scrollTrigger: {
    trigger: darkSection,
    start: 'top top',
    end: '+=30%',
    scrub: true,
  },
  width: '100vw',
  height: '100vh',
  borderRadius: 0,
  ease: 'slow',
});
