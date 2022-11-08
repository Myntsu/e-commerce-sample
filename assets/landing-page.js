let section = document.querySelectorAll('header, section');
let navLinks = document.querySelectorAll('.navbar-items a');

window.onscroll = () =>{

    section.forEach(sec =>{

        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('.navbar-items a[href*=' + id + ']').classList.add('active');
            });
        };

    });

};

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
