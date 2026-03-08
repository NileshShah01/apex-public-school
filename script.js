document.addEventListener("DOMContentLoaded", function(){

const counters = document.querySelectorAll(".counter");

counters.forEach(counter =>
{
counter.innerText = "0";

const updateCounter = () =>
{
const target = +counter.getAttribute("data-target");
const count = +counter.innerText;

const increment = target / 80;

if(count < target)
{
counter.innerText = Math.ceil(count + increment);
setTimeout(updateCounter,20);
}
else
{
counter.innerText = target;
}
};

updateCounter();
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
let index = 0;

function showSlide()
{
slides.forEach(s => s.classList.remove("active"));

index++;

if(index >= slides.length)
{
index = 0;
}

slides[index].classList.add("active");
}

setInterval(showSlide,5000);
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




