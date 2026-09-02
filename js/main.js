    alert ("bienvenido al estacionamiento automatico inteligente")

    const contraseñaCorrecta = "2026"
    let login = false;
    let salir = false;

function accesoCorrecto(contraseña){
    return contraseña === contraseñaCorrecta
  }

    while (login === false && salir === false){
  let contraseña = prompt("ingrese codigo de acceso")

  if (accesoCorrecto(contraseña) === true){
    console.log ("acceso autorizado")
    login = true
  }
    else { 
        let volverAIntentar = prompt ("la contraseña es incorrecta, ¿quiere volver a colocar la contraseña (si/no)");
    if (volverAIntentar === "no"){
        console.log("acceso cancelado");
        salir = true;
        }
      }
    }

 const ubicaciones = ["azul", "rojo", "verde", "negro", "blanco"]

function mostrarUbicaciones() {
    let ubicacionesDisponibles = [];

    for (let ubicacion of ubicaciones) {
        ubicacionesDisponibles.push(ubicacion);
    }

    return ubicacionesDisponibles;
}

     if (login === true){

     ubicaciones.push("gris")

     ubicaciones.unshift("violeta")

     let elementoEliminado =  ubicaciones.pop()

     alert("la ubicacion " + elementoEliminado + " acaba de ser ocupada")

     let ubicacionesDisponibles = mostrarUbicaciones();

let ubicacionBuscada = prompt("ingrese una ubicacion " + ubicacionesDisponibles.join(", "))
           
let existeUbicacion = ubicaciones.includes(ubicacionBuscada)

if (existeUbicacion === true) {
    ubicaciones.splice(ubicaciones.indexOf(ubicacionBuscada), 1)
} else {
console.log ("ubicacion inexistente")
}
console.log("ubicacion elegida: " + ubicacionBuscada)
    }

    console.log("ubicaciones disponibles " + ubicaciones)

    if (login === true){
      let tiempo = parseInt(prompt ("indique la duracion de su estadia"))
      const hora = 18
      const valorEstadia = (tiempo, hora) =>{
        return tiempo * hora
      } 
      console.log ("su precio a abonar es " + valorEstadia(tiempo, hora))
    }
