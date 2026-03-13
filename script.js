
function animateCounter(id,target){

let element=document.getElementById(id)

let count=0

let interval=setInterval(()=>{

count+=Math.ceil(target/100)

if(count>=target){
count=target
clearInterval(interval)
}

element.innerText=count

},20)

}


animateCounter("c1",1250)
animateCounter("c2",48)
animateCounter("c3",16)



var map=L.map('map').setView([-22.92,-45.46],12)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
attribution:'© OpenStreetMap'
}).addTo(map)


L.marker([-22.92,-45.46])
.addTo(map)
.bindPopup("Centro de atuação do Fundo Social")
