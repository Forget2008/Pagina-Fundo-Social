const counters = document.querySelectorAll('.counter')

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute('data-target')

const count=+counter.innerText

const increment=target/200

if(count<target){

counter.innerText=Math.ceil(count+increment)

setTimeout(update,10)

}else{

counter.innerText=target

}

}

update()

})


var map=L.map('map').setView([-22.92,-45.46],12)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{

attribution:'© OpenStreetMap'

}).addTo(map)


L.marker([-22.92,-45.46]).addTo(map)

.bindPopup("Centro do Fundo Social")
