const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  
  gsap.from(".nlink", {
    stagger: 0.1,
    y: 10,
    opacity: 0,
    ease: Power3,
    duration: 2,
  });
  
  Shery.textAnimate(".center h1", {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  
  gsap.from(".anim2", {
    y: 50,
    stagger: 0.3,
    opacity: 0,
    ease: Power2,
    duration: 1,
  });
  
  Shery.imageEffect(".center img", {
    style: 4,
    debug: false,
  });
  gsap.from(".center img", {
    y: 100,
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
  });
  Shery.imageEffect(".pinkPlant", {
    style: 5,
    debug: false,
  });
  Shery.imageEffect(".page3-left img", {
    style: 2,
    debug: false,
  });
  Shery.imageEffect(".page3-right img", {
    style: 3,
    debug: false,
  });
  Shery.imageEffect(".biodegrade img", {
    style: 6,
    debug: false,
    gooey: false,
  });
  
  let vdo = document.querySelector(".video-div video");
  let vdoBtn = document.querySelector(".video-content button");
  
  vdoBtn.addEventListener("click", () => {
    vdo.classList.toggle("active");
  });
  