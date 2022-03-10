// 1. identificar el contenedor que va a usar VUE
//2. crear la app de vue en el contenedor del paso 1
//3. crear a estructura del framework vue

const appVue ={
    //controlar los componentes del DOM
    //El estado
    data() {
        return{
            //document.getElementById("#correo").value
            lblAlerta:"",
            usuario:{}

        }

    },
    //Metodos o funcionesque voy a utilizar en  mi aplicacion
    methods:{
        obtenerValoresFormulario(){
            console.log(this.usuario)
        }

    }
}