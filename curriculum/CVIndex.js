
document.getElementById("cambiarcolor").addEventListener("click",function() {
document.body.style.backgroundColor = "black"    
})

document.getElementById("returncolor").addEventListener("click",function() {
document.body.style.backgroundColor = "white"        
})

const efecto = document.querySelector("#izq")
efecto.addEventListener("mouseover",function() {
this.style.backgroundColor = "black"   
})

const efect = document.querySelector("#izq")
efect.addEventListener("mouseout",function() {
this.style.backgroundColor = ""   
})

let h1 = document.querySelector("h1")
h1.addEventListener("mouseover",function() {
this.style.color = "rgba(238, 135, 135, 0.925)"; 
})

let h1orig = document.querySelector("h1")
h1orig.addEventListener("mouseout",function() {
this.style.color = ""   
})

function zoom (zoom) { document.querySelector(".foto")
foto.addEventListener("mouseover", function() {
this.style.backgroundColor = "white"    

})
}
  