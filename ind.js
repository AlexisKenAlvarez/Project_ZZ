gsap.registerPlugin(ScrollTrigger);


// let myJourney = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".second_sec",
//     markers: true,
//     start: "top 80%",
//     end: "top top",
//     scrub: 1,
//     pin: ".second_sec"
//   }
// })
//
// myJourey.to(".welcome", {x: -500, duration: 1})

const selectors = document.querySelectorAll("section");
const navList = document.querySelectorAll("nav .nav_wrapper .nav_right a")
const my_Home = document.getElementsByClassName("home");
const my_About = document.getElementsByClassName("about");
const my_Contact = document.getElementsByClassName("contact");



window.addEventListener('scroll', ()=>{
  let container = '';

  selectors.forEach(sections => {
    const selectTop = sections.offsetTop;
    const sectionHeight = sections.clientHeight;

    if (pageYOffset >= (selectTop - sectionHeight / 4)) {
      container = sections.getAttribute('id');
    }
  })
  navList.forEach(li => {
    li.classList.remove('active');
    if (li.classList.contains(container)) {
      li.classList.toggle("active");
      li.addEventListener('mouseout', () => {
        li.classList.add('active');
      })
    } else {
      li.addEventListener('mouseover', () => {
        li.classList.add('active');
      })
      li.addEventListener('mouseout', () => {
        li.classList.remove('active');
      })
    }
  })
})

let myHome = document.getElementById("home_div");

// gsap.to(".home", {
//   scrollTrigger: {
//     trigger: ".first_sec",
//     toggleA  ctions: "play none reverse none",
//     markers: true,
//     start: "120% center",
//     end: "bottom 70%"
//   },
//   y: -50,
//
// })

// if (myHome.style.)


gsap.to("#nav_button", {
  scrollTrigger: {
    trigger: ".second_sec",
    start: "top 17%",
    end: "bottom top",
    toggleActions: "play reverse play reverse",
  },
  backgroundColor: "#fff3db",
  color: "#113649",
  ease: "power2.easeIn",
})

gsap.to(".nav_logo", {
  scrollTrigger: {
    trigger: ".second_sec",
    start: "top 17%",
    end: "bottom top",
    toggleActions: "play reverse play reverse",
  },
  color: "#fff3db",
  ease: "power2.easeIn",
})

gsap.to(".welcome", {
  scrollTrigger: {
    trigger: ".second_sec",
    start: "top bottom",
    end: "top 80%",
    scrub: 1,
  },
  y: -220
})

gsap.to(".mountain", {
  scrollTrigger: {
    trigger: ".second_sec",
    start: "top bottom",
    end: "top 80%",
    scrub: 1,
  },
  y: -10
})

gsap.to(".secondTrees", {
  scrollTrigger: {
    trigger: ".second_sec",
    start: "top bottom",
    end: "top 80%",
    scrub: 1,
  },
  y: 30
})



gsap.to(".dear", {
  scrollTrigger: {
    trigger: ".second_sec",
    start: "top bottom",
    end: "top 80%",
    scrub: 2,
  },
  y: -100,
})

gsap.to(".birds", {
  scrollTrigger: {
    trigger: ".second_sec",
    start: "top bottom",
    end: "top 80%",
    scrub: 1.5,
    pin: ".first_sec"
  },
  x: -250,
  y: -250
})

let image_slider = gsap.timeline({
  scrollTrigger: {
    trigger: ".second_sec",
    start: "20% bottom",
    end: "bottom 20%",
    scrub: 1
  }
})
image_slider.to('.Alvarez_img', {x: -300, duration: 3})

let image_slider1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".second_sec",
    start: "20% bottom",
    end: "bottom 20%",
    scrub: 1
  }
})


let image_slider2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".second_sec",
    start: "20% bottom",
    end: "bottom 20%",
    scrub: 1
  }
})

let image_slider3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".second_sec",
    start: "20% bottom",
    end: "bottom 20%",
    scrub: 1
  }
})

let image_slider4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".second_sec",
    start: "20% bottom",
    end: "bottom 20%",
    scrub: 1
  }
})

let image_slider5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".second_sec",
    start: "20% bottom",
    end: "bottom 20%",
    scrub: 1
  }
})

let image_slider6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".second_sec",
    start: "20% bottom",
    end: "bottom 20%",
    scrub: 1
  }
})

let image_slider7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".second_sec",
    start: "20% bottom",
    end: "bottom 20%",
    scrub: 1
  }
})
image_slider1.to('.first_box', {x: -280, duration: 3})
image_slider2.to('.second_box', {x: -240, duration: 3})
image_slider3.to('.third_box', {x: -200, duration: 3})
image_slider4.to('.fourth_box', {x: -160, duration: 3})
image_slider5.to('.fifth_box', {x: -120, duration: 3})
image_slider6.to('.sixth_box', {x: -80, duration: 3})
image_slider7.to('.seventh_box', {x: -40, duration: 3})

let home = document.getElementById("home_div");

home.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
