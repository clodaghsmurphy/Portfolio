import React from "react";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About() {
   
    useLayoutEffect(() => {
        gsap.fromTo('.about-container', {
        autoAlpha: 0
      }, {
        duration: 1, 
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          id: `.about-section`,
          trigger: '.about-container',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });
        // const anim = gsap.fromTo('.about-container', {
        //     opacity: 0,
        //     yPercent: 50
        // }, {
        //     yPercent: -50,
        //     opacity: 1,
        //     duration: 1,
        // });
        // ScrollTrigger.create({
        //     trigger : '.about-section', 
        //     animation: anim
        //  } )
        // const tl = gsap.timeline({
        //     defaults: {
        //         ease: 'power1.inOut',
        //         duration: 1,
        //         transformOrigin: '0 0'
        //     },
        //     scrollTrigger: {
        //         trigger: '.about-section',
        //         start: "top top",
        //         end: "+=2000", 
        //         pin: true,
        //         anticipatePin: 1,
        //         pinSpacing:true,                
        //         markers: true,
        //         scrub: true,
        //     },
        // });
        // tl.from('.about-section', {
        //     opacity: 0,duration:1,
        //     y:50
        // })
        // .to('.about-section', {
        //     opacity: 1,
        //     duration: 5,
        //     y:0
        //     })
            // to('.about-section', {
            //     opacity: 0,
            //     duration: 1,
            //     y:50
            // })

        
     });

  return (
    <div className="about-section" id="about-section">
        <div className="about-container">
        <h1>About</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie interdum blandit. Mauris urna urna, vulputate sed convallis vel, condimentum vel nisi. Morbi at dolor mollis, euismod massa ut, fermentum felis. Vestibulum vestibulum tempus sem in accumsan. Vivamus sed commodo purus. In velit eros, tristique in nibh vel, sodales posuere tortor. Donec euismod, mi sed efficitur aliquet, arcu erat tempor ligula, eu elementum augue metus non turpis. Maecenas quis eros rutrum, tempor arcu vitae, lobortis dui. Aenean efficitur eget leo non porta. Fusce viverra lobortis laoreet. Pellentesque efficitur pharetra sem at aliquam. Nam rhoncus consequat erat sed venenatis. Curabitur at molestie sapien, eu finibus neque.
        </p>
        </div>
    </div>
  );
}

export default About;
