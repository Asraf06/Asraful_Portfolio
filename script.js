const tl = gsap.timeline()

tl.to("#black1",{
    left: "-100%",
    delay: 2,
    duration: 0.7,
    ease: "expo.out"
})

tl.from("#black2",{
    left: "100%",
    delay: 1,
    duration: 0.7,
    ease: "expo.out"
})

tl.to(".loader",{
    display: 'none',
    opacity: 0,
    duration: 0.2
})

tl.from("#nav",{
    top: "-100%" ,
    delay:0.1,
    duration: 0.7,
    ease: "expo.out"
}, "page1-anim")

tl.from(".content-left",{
    left: "-100%",
    delay: 0.1,
    duration: 1,
    ease: "expo.out"
}, "page1-anim")

const scroll = new LocomotiveScroll ({
    el : document.querySelector("#main"),
    smooth: true
})


function mousemove_effect() {
    var elem1 = document.querySelector("#elem");
    var elemImg = document.querySelector("#elem img");
    
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
                x:dots.x - elem1.getBoundingClientRect().x - 20, //getBoundingClientRect() gives the div x and y value
                y:dots.y - elem1.getBoundingClientRect().y - 20
            })
            // console.log(elem1.getBoundingClientRect().y)
    })

    elem1.childNodes[3].addEventListener("click",() => {
        // console.log("hello")
        elem1.childNodes[3].muted = !elem1.childNodes[3].muted; // Toggle mute state
    })
};

mousemove_effect();
