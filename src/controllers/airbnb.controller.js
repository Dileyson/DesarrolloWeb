
// Importar los servicio
const { consultarDocumentos } = require('../services/mongodb.service');


const consultarAirbnb = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true
        respuesta.message = "Airbnb consultados"
        let resultado = await consultarDocumentos(process.env.COLLECTION_AIRBNB)
        respuesta.info = resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error);
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultando los airbnb."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}



const consultarAirbnbPropertyType = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true
        respuesta.message = "Airbnb consultados"
        let resultados = await consultarDocumentos(process.env.COLLECTION_AIRBNB)
        //Se seleccionan los diferentes property_type
        respuesta.info = resultados.map((resultado)=> resultado.property_type)  
        res.send(respuesta)
    } catch (error) {
        console.log(error);
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultando los airbnb."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}



const consultarAirbnbReviews = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true
        respuesta.message = "Airbnb consultados"
        let resultados = await consultarDocumentos(process.env.COLLECTION_AIRBNB)
        //Se ordenan las propiedades por numero de reviews.
        resultados = resultados.sort((a,b)=> {
            if (a.number_of_reviews < b.number_of_reviews) return 1
            if (a.number_of_reviews > b.number_of_reviews) return -1
            return 0
        }) 
        //Se seleccionan los campos name, beds, number_of_reviews, price.
        respuesta.info = resultados.map((resultado)=> {
            return {
                name: resultado.name, beds: resultado.beds, number_of_reviews: resultado.number_of_reviews, price: resultado.price
            }
        }).slice(0,20)  
        res.send(respuesta)
    } catch (error) {
        console.log(error);
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultando los airbnb."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}



const consultarAirbnbBeds = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true
        respuesta.message = "Airbnb consultados"
        //Se consultan las propiedades con numero de camas mayor al definido
        let resultados = await consultarDocumentos(process.env.COLLECTION_AIRBNB, {
            beds: {$gt:+req.params.nro_beds}
        })
        //Se ordenan las propiedades por numero de camas
        resultados = resultados.sort((a,b)=> {
            if (a.beds < b.beds) return 1
            if (a.beds > b.beds) return -1
            return 0
        })
        //Se seleccionan los campos name, beds, number_of_reviews, price.
        respuesta.info = resultados.map((resultado)=> {
            return {
                name: resultado.name, beds: resultado.beds, number_of_reviews: resultado.number_of_reviews, price: resultado.price
            }
        })
        res.send(respuesta)
    } catch (error) {
        console.log(error);
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultando los airbnb."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}

module.exports = {consultarAirbnb,consultarAirbnbPropertyType,consultarAirbnbReviews,consultarAirbnbBeds}