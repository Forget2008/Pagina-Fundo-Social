gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1",{
opacity:0,
y:40,
duration:1
})

gsap.from(".course-card",{
scrollTrigger:".course-card",
opacity:0,
y:50,
stagger:0.2
})

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const target = +counter.dataset.target;

const update = () => {

const current = +counter.innerText;

const increment = target / 200;

if(current < target){

counter.innerText = Math.ceil(current + increment);
requestAnimationFrame(update);

}else{

counter.innerText = target;

}

}

update()

})

const map = L.map('map').setView([-22.92,-45.46], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
attribution:'© OpenStreetMap'
}).addTo(map);

L.marker([-22.92,-45.46]).addTo(map).bindPopup("Centro comunitário")

const ctx = document.getElementById('impactChart');

new Chart(ctx,{
type:'line',
data:{
labels:["2020","2021","2022","2023","2024"],
datasets:[{
label:"Alunos",
data:[50,120,250,400,600],
borderColor:"#6366f1"
}]
}
})
