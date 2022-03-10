
/**
 * Obtener los valores del formulario de registro
 */

function obtenerValoresFormulario(){
    let nombre =    document.getElementById("txtNombre").value
    let correo =    document.getElementById("txtCorreo").value
    let celular =   document.getElementById("txtCelular").value
    let direccion = document.getElementById("txtDireccion").value
    let clave =     document.getElementById("txtClave").value

    if (correo==""){
        alert("Vea el correo es obligatorio")
        document.getElementById("lblAlert").style.display=""
        document.getElementById("lblAlerta").innerText="Vea el correo es obligatorio"

        return
    }

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
        
        document.getElementById(txtNombre).value = ""
        document.getElementById(txtCorreo).value = ""
        document.getElementById(txtCelular).value = ""
        document.getElementById(txtDireccion).value = ""
        document.getElementById(txtClave).value = ""

        console.log(usuario)

}


function cargarPagina{
    document.getElementById("lblAlert").style.display="none"
}
