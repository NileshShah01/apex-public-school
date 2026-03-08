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

function showSlide(index)
{
slides.forEach(slide => slide.classList.remove("active"));
slides[index].classList.add("active");
}

function nextSlide()
{
currentSlide++;

if(currentSlide >= slides.length)
{
currentSlide = 0;
}

showSlide(currentSlide);
}

function prevSlide()
{
currentSlide--;

if(currentSlide < 0)
{
currentSlide = slides.length - 1;
}

showSlide(currentSlide);
}

setInterval(nextSlide,5000);

window.addEventListener("scroll",function()
{
let header = document.querySelector("header");

if(window.scrollY > 60)
{
header.classList.add("scrolled");
}
else
{
header.classList.remove("scrolled");
}
});
