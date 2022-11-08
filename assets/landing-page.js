// Scrollspy
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

// Adding background on scroll
const navbar = document.querySelector(".navbar");
const products = document.querySelector("#Products");

const productsOptions = {
    rootMargin: "-300px",
};

const productsObserver = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navbar.classList.add("navbar-dark");
        }
        else {
            navbar.classList.remove("navbar-dark");
        }
    });
}, productsOptions);

productsObserver.observe(products);

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;