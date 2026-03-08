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
let menu = document.getElementById("mobileMenu");
let overlay = document.getElementById("menuOverlay");

menu.classList.toggle("show");
overlay.classList.toggle("show");
}

function closeMenu()
{
let menu = document.getElementById("mobileMenu");
let overlay = document.getElementById("menuOverlay");

menu.classList.remove("show");
overlay.classList.remove("show");
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

function revealSections()
{
let reveals = document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++)
{
let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;
let elementVisible = 100;

if(elementTop < windowHeight - elementVisible)
{
reveals[i].classList.add("active");
}
}
}

window.addEventListener("scroll",revealSections);


