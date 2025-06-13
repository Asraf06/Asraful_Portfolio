const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
})

var aTags = document.querySelectorAll(".nav-right ul li a");
aTags[2].addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(".page2");
    if (target) {
        scroll.scrollTo(target);
    }
});

console.log(aTags[1])

function gsap_animation() {
    const tl = gsap.timeline()

    tl.to("#black1", {
        left: "-100%",
        delay: 2,
        duration: 0.7,
        ease: "expo.out"
    })

    tl.from("#black2", {
        left: "100%",
        delay: 1,
        duration: 0.7,
        ease: "expo.out"
    })

    tl.to(".loader", {
        display: 'none',
        opacity: 0,
        duration: 0.2
    })

    tl.from("#nav", {
        top: "-100%",
        delay: 0.1,
        duration: 0.7,
        ease: "expo.out"
    }, "page1-anim")

    tl.from(".content-left", {
        left: "-100%",
        delay: 0.1,
        duration: 1,
        ease: "expo.out"
    }, "page1-anim")

    tl.from(".content-right", {
        right: "-100%",
        delay: 0.1,
        duration: 1,
        ease: "expo.out"
    }, "page1-anim")

    tl.to(".nav-right ul li", {
        y: -30,
        duration: 0.2,
        delay: 0.7,
        stagger: 0.1,
        // or 
        // stagger :{
        //     amount: 0.7
        // },
        ease: "expo.out"
    }, "page1-anim")

}

function navRightAnim() {
    var ulTag = document.querySelectorAll(".nav-right ul");

    ulTag.forEach((e) => {
        const link = e.querySelector("li a");
        e.addEventListener("mouseenter", () => {
            gsap.killTweensOf(link);
            gsap.fromTo(link, 
                { top: 30 }, 
                { top: 0, duration: 0.3, ease: "expo.out" }
            );
        });
        // e.addEventListener("mouseleave", () => {
        //     gsap.killTweensOf(link);
        //     gsap.to(link, { top: 0, duration: 0.3, ease: "expo.out" });
        // });
    });
};


function mousemove_effect() {
    var elem1 = document.querySelector("#elem");

    elem1.addEventListener("mouseenter", () => {
        gsap.to(elem1.childNodes[1], {
            opacity: 1,
            scale: 1
        })

        elem1.childNodes[3].play()
        // console.log(elem1.childNodes)
    })

    elem1.addEventListener("mouseleave", () => {
        gsap.to(elem1.childNodes[1], {
            opacity: 0,
            scale: 0
        })
        elem1.childNodes[3].pause()
    })

    elem1.addEventListener("mousemove", (dots) => {
        gsap.to(elem1.childNodes[1], {
            x: dots.x - elem1.getBoundingClientRect().x - 20, //getBoundingClientRect() gives the div x and y value
            y: dots.y - elem1.getBoundingClientRect().y - 20
        })
        // console.log(elem1.getBoundingClientRect().y)
    })

    elem1.childNodes[3].addEventListener("click", () => {
        // console.log("hello")
        elem1.childNodes[3].muted = !elem1.childNodes[3].muted; // Toggle mute state
    })
};

mousemove_effect();
navRightAnim();
gsap_animation();


