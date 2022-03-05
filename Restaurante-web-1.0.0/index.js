
/**
 * Obtener los valores del formulario de registro
 */

function obtenerValoresFormulario(){
    let nombre =    document.getElementById(txtNombre).value
    let correo =    document.getElementById(txtCorreo).value
    let celular =   document.getElementById(txtCelular).value
    let direccion = document.getElementById(txtDireccion).value
    let clave =     document.getElementById(txtClave).value

    //Forma de crear objeto
    let usuario = {
        celular,
        clave,
        direccion
    }
        //agregar propiedades a un json
        usuario.correo = correo

        //Bracket notation ["key"]
        usuario["nombre"] = nombre 

        console.log(usuario)
    
}



