const carrusel = document.querySelector(".carrusel__imagenes");
let imagenes = carrusel.querySelectorAll("img");

const  flechaDerecha = document.querySelector(".carrusel__flecha--derecha");
const  flechaIzquierdo = document.querySelector(".carrusel__flecha--izquierda");

let index = 0;

function cambiar(){
    if(index > (imagenes.length - 1))index = 0;
    if(index == -1)index = 2;
    let porcentaje= index * -100;
    carrusel.style.transform = 'translateX('+ porcentaje +'%)';
    
}

flechaDerecha.addEventListener("click",()=>{
    index ++;
    cambiar() 
    clearInterval(intervalo);
    intervalo = setInterval(ejecutarTiempo,5000)  
})
flechaIzquierdo.addEventListener("click",()=>{
    index-- ;
    cambiar()
    clearInterval(intervalo);
    intervalo = setInterval(ejecutarTiempo,5000)
})

function ejecutarTiempo(){
    index++;
    cambiar()
}

let intervalo = setInterval(ejecutarTiempo,5000);