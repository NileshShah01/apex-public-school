document.addEventListener("DOMContentLoaded", function(){

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

counter.innerText = "0";

const target = Number(counter.getAttribute("data-target"));
let count = 0;

const updateCounter = () => {

count = count + Math.ceil(target / 60);

if(count < target)
{
counter.innerText = count;
setTimeout(updateCounter,30);
}
else
{
counter.innerText = target + "+";
}

};

updateCounter();

});

});
