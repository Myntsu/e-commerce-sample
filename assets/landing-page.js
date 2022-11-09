// Scrollspy
let section = document.querySelectorAll('header, section');
let navbarLinks = document.querySelectorAll('.navbar-items a');

window.onscroll = () =>{

    section.forEach(sec =>{

        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navbarLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('.navbarbar-items a[href*=' + id + ']').classList.add('active');
            });
        };

    });

};

// Adding background on scroll
const navbar = document.querySelector(".navbar");
const main = document.querySelector("main");

const mainDistance = main.getBoundingClientRect().y;

window.addEventListener(
  "scroll",
  throttle(() => {
    if (window.scrollY < mainDistance) {
      navbar.classList.remove("navbar-dark");
    } else {
      navbar.classList.add("navbar-dark");
    }
  }),
  20,
);

function throttle(fn, ms) {
  let throttled = false;

  return function () {
    if (throttled) return;

    throttled = true;
    fn();
    setTimeout(function () {
      throttled = false;
    }, ms);
  };
}

console.log(mainDistance);

// Transition on scroll effects
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    },
    {
        rootMargin: "100px",
    }
);

const hiddenElements = document.querySelectorAll('.hidden, .fade-in');
hiddenElements.forEach((el) => observer.observe(el));

// let lastScroll = 0;
// const scrolled = window.scrollY;

// const navbarbar = document.querySelector('.navbarbar');

// window.addEventListener('scroll', () => {
//     if (scrolled <= 0) {
//         navbarbar.classList.add('navbarbar-dark');
//     }

//     if (scrolled > lastScroll) {
//         navbarbar.classList.remove('navbarbar-dark');
//     }

//     lastScroll = scrolled;
// });

// console.log(scroll);