//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector('.title');
const albano = document.querySelector('.albano img');
const hire = document.querySelector('.hire button');
const description = document.querySelector('.info h3');
const knowledge = document.querySelector('.knowledge');

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25; 
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});
//Animate In
container.addEventListener("mouseenter", e =>{
    card.style.transition = 'none';
    //Popout
    title.style.transform = "translateZ(90px)";
    albano.style.transform = "translateZ(90px) rotateZ(-360deg)";
    description.style.transform = "translateZ(80px)";
    knowledge.style.transform = "translateZ(70px)";
    hire.style.transform = "translateZ(65px)";
});
//Animate Out
container.addEventListener("mouseleave", e =>{
    card.style.transition = 'all 0.7s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    albano.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    knowledge.style.transform = "translateZ(0px)";
    hire.style.transform = "translateZ(0px)";
});