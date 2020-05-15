document.addEventListener("DOMContentLoaded", () => {


    const SLIDETIME = 500;
    const backButton = document.querySelector('.slider-back-btn');
    const forwardButton = document.querySelector('.slider-next-btn');
    const allSlides = [...document.querySelectorAll(".slide")];

    let clickable = true;
    let active = null;
    let newActive = null;

    const transition = `transition: transform ${SLIDETIME}ms ease;
                        animation-duration: ${SLIDETIME}ms;`

    function initSlider() {
        allSlides.forEach(slide => {
            slide.setAttribute(
                'style',
                transition
            )
        })
    }

    function changeSlide(forward) {
        if (clickable) {
            clickable = false;
            active = document.querySelector(".active");
            const activeSlideIndex = allSlides.indexOf(active);

            if (forward) {
                console.log("active slide index: ", activeSlideIndex);
                console.log("allSlides length: ", allSlides.length);
                console.log("new Slide: ", (activeSlideIndex + 1) % allSlides.length);

                newActive = allSlides[(activeSlideIndex + 1) % allSlides.length];
                active.classList.add("slideOutLeft");
                newActive.classList.add("slideInRight", "active");
            } else {
                newActive = allSlides[(activeSlideIndex -1 + allSlides.length) % allSlides.length];
                active.classList.add("slideOutRight");
                newActive.classList.add("slideInLeft", "active");
            }
        }
    }

    allSlides.forEach(slide => {
        slide.addEventListener('transitionend', () => {
            if (slide === active && !clickable) {
                clickable = true;
                active.className = "slide"
            }

        })
    })

    forwardButton.addEventListener("click", () => {
        changeSlide(true);
    })
    backButton.addEventListener("click", () => {
        changeSlide(false);
    })

    initSlider();
})