let cantidad = document.querySelector('#cantidad');
const cost = 1999000; 
let b = document.querySelector('#boton');


b.addEventListener("click", function(){
totalcost = Number(cantidad.value) * cost;
costototal.textContent = totalcost;
cantidadset.textContent = cantidad.value;
let color = document.querySelector('#color').value;
console.log(color);
colorset.style.backgroundColor = color;
});