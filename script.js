const counters = document.querySelectorAll(".counter h3")

counters.forEach(counter => {

counter.innerText = "0"

const update = () => {

const target = +counter.getAttribute("data-target")
const c = +counter.innerText

const increment = target / 200

if(c < target){
counter.innerText = `${Math.ceil(c + increment)}`
setTimeout(update,10)
}else{
counter.innerText = target
}

}

update()

})



const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = 1
entry.target.style.transform = "translateY(0)"

}

})

})


document.querySelectorAll(".card,.counter").forEach(el => {

el.style.opacity = 0
el.style.transform = "translateY(40px)"
el.style.transition = "all 0.6s ease"

observer.observe(el)

})



var map = L.map('map').setView([-22.92,-45.46],12)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
attribution:'© OpenStreetMap'
}).addTo(map)

L.marker([-22.92,-45.46]).addTo(map)
.bindPopup("Centro de atuação do Fundo Social")
