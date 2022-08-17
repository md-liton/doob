
// Dark Mode
const mode = document.querySelector("#mode");
const logo = document.querySelector("#main_logo");
const f_logo = document.querySelector("#footer_logo");
mode.onclick = function(){
    document.body.classList.toggle("dark_theme")

    if (document.body.classList.contains("dark_theme")) {
        mode.src = "images/light.svg"
        logo.src = "images/logo-light.png"
        f_logo.src = "images/logo-light.png"
    } else {
        mode.src = "images/dark.svg "
        logo.src = "images/logo-dark.png "
        f_logo.src = "images/logo-dark.png "
    }
}

// Feather Icon
feather.replace();

// Navbar & Top button
let navbar = document.querySelector('#navbar');
let topbtn = document.querySelector (".top");
window.addEventListener('scroll',function(){
    var sticky = window.scrollY;

    if (sticky > 200) {
        navbar.classList.add("sticky_menu")
        topbtn.classList.add("top_btn")
        
    } else {
        navbar.classList.remove("sticky_menu")
        topbtn.classList.remove("top_btn")
    }
})

// Slider
$(function(){
    $('.project_btn button').click(function(){
        $('.project_btn button').removeClass('active');
        $(this).addClass('active')
    })

    $('.feedback_slider').slick({
        infinite: true,
        slidesToShow:1 ,
        slidesToScroll: 1,
        speed:1000,
        arrows: true,
        prevArrow:'.arrow_prev',
        nextArrow:'.arrow_next',
        dots: true,
      });

})

// gallery
var mixer = mixitup('.all_projects');

// video
new VenoBox({
    selector: '.youtube',
    maxWidth: "95%",
    spinner:"fold",
  });


 


  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 130, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
