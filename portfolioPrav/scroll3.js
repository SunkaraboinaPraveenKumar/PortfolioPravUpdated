
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
navToggle.addEventListener("click", function () {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if (containerHeight == 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.scrollY;
    const navHeight = navbar.getBoundingClientRect().height;
    const bannerHeight = document.querySelector(".banner").offsetHeight; // Height of the banner
    const scrollThreshold = bannerHeight - navHeight; // Define the scroll threshold

    if (scrollHeight > scrollThreshold) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
      } else {
        topLink.classList.remove("show-link");
      }
});

const themeBtn=document.querySelector('.theme-btn');
    themeBtn.addEventListener("click",()=>{
        let element=document.body;
        element.classList.toggle('light-mode');
    });


