document.addEventListener("DOMContentLoaded", function(){

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = "0";

const target = Number(counter.getAttribute("data-target"));
let count = 0;

const speed = 120;

const updateCounter = () => {

const increment = target / speed;

count = count + increment;

if(count < target)
{
counter.innerText = Math.ceil(count);
setTimeout(updateCounter,40);
}
else
{
counter.innerText = target + "+";
}

};

updateCounter();

});

});

function toggleMenu()
{
const menu = document.getElementById("nav-menu");
menu.classList.toggle("show");
}
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide()
{
slides[currentSlide].classList.remove("active");

currentSlide = (currentSlide + 1) % slides.length;

slides[currentSlide].classList.add("active");
}

setInterval(showSlide,4000);
