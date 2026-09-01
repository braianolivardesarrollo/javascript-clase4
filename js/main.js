    alert ("bienvenido al estacionamiento automatico inteligente")

    const contraseñaCorrecta = "2026"
    let login = false;
    let salir = false;
    while (login === false && salir === false){
  let contraseña = prompt("ingrese codigo de acceso")

  function accesoCorrecto(contraseña){
    return contraseña === contraseñaCorrecta
  }

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

     if (login === true){
    let ubicacion = prompt ("seleccione una ubicación")

    const seleccioneUbicacion = (ubicacion) => {
    switch (ubicacion) {
        case "norte":
        console.log("ubicación norte seleccionada")

        break
        case "sur":
        console.log("ubicación sur seleccionada")

        break
        case "este":
        console.log("ubicación este seleccionada")

        break
        case "oeste":
        console.log("ubicación oeste seleccionada")

        break
        default :
        console.log("lo siento ubicación inexistente")
    }
    }
    seleccioneUbicacion(ubicacion)
    }

    if (login === true){
      let tiempo = parseInt(prompt ("indique la duracion de su estadia"))
      const hora = 18
      const valorEstadia = (tiempo, hora) =>{
        return tiempo * hora
      } 
      console.log ("su precio a abonar es " + valorEstadia(tiempo, hora))
    }

 const ubicaciones = ["azul ", "rojo ", "verde ", "negro", "blanco"]
    let ubicacion = prompt ("seleccione una ubicación " + ubicaciones)

        ubicaciones.push("gris")

        ubicaciones.unshift("violeta")

            let elementoEliminado =  ubicaciones.pop()

            console.log("acabas de eliminar " + elementoEliminado)

            let ubicacionBuscada = prompt("ingrese una ubicacion")
           
            let existeUbicacion = ubicaciones.includes(ubicacionBuscada)

if (existeUbicacion === true) {
    console.log(ubicaciones.indexOf(ubicacionBuscada))
    console.log("La ubicación existe")
    ubicaciones.splice(ubicaciones.indexOf(ubicacionBuscada), 1)
} else {
console.log ("ubicacion inexistente")
}
console.log("ubicaciones disponibles " + ubicaciones)