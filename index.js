

// window.addEventListener('scroll', function(){
//     var servicio = document.getElementById('Servicios');
//     let posicion = servicio.getBoundingClientRect().top
//     console.log(posicion)
//     let tamañoPantalla = window.innerHeight;
//     if(posicion < tamañoPantalla){
//         servicio.style.animation = 'aparecer 3s ease-in-out';
//     }
// })

// window.addEventListener('scroll', function(){
//   var imagen = document.getElementById('bgkNosotros');
//   let posicion = imagen.getBoundingClientRect().top
//   let tamañoPantalla = window.innerHeight;
//   if(posicion < tamañoPantalla){
//       imagen.style.animation = 'traer 3s ease-in-out';
//   }
// })

const containers = document.querySelectorAll('section');

window.addEventListener('scroll', viewContainer);

function viewContainer(){
    const triggerPoint = window.innerHeight / 2;

    containers.forEach(container => {
        const containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < triggerPoint){
            container.classList.add('show');
        }
        else{
            container.classList.remove('show');
        }
    })
}

viewContainer();