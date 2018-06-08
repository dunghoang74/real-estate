const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const CategorySchema = new Schema({
    name: {
        type: String,
    },
    parent: {
        type: String,
    },
    category: {
        type: String,
    },
    slug: {
        type: String,
    },
    _properties : [{type:ObjectId, ref:'properties'}],

});


module.exports = mongoose.model('categories', CategorySchema);


// [
// 	{
// 		"name":"Turística",
// 		"slug": "turistica",
// 		"parent": "/",
// 		"category":"/turistica"
// 	},
// 	{
// 		"name":"Hoteles",
// 		"slug": "hoteles",
// 		"parent": "/turistica",
// 		"category":"/turistica/hoteles"
// 	},
// 	{
// 		"name":"Terreno",
// 		"slug": "terreno",
// 		"parent": "/turistica",
// 		"category":"/turistica/terreno"
// 	},
// 	{
// 		"name":"Desarrollos",
// 		"slug": "desarrollos",
// 		"parent": "/turistica",
// 		"category":"/turistica/desarrollos"
// 	},
// 	{
// 		"name":"Vivienda",
// 		"slug": "vivienda",
// 		"parent": "/",
// 		"category":"/vivienda"
// 	},
// 	{
// 		"name":"Suite",
// 		"slug": "suite",
// 		"parent": "/vivienda",
// 		"category":"/vivienda/suite"
// 	},
// 	{
// 		"name":"Casa",
// 		"slug": "casa",
// 		"parent": "/vivienda",
// 		"category":"/vivienda/casa"
// 	},
// 	{
// 		"name":"Departamento",
// 		"slug": "departamento",
// 		"parent": "/vivienda",
// 		"category":"/vivienda/departamento"
// 	},
// 	{
// 		"name":"Loft",
// 		"slug": "loft",
// 		"parent": "/vivienda",
// 		"category":"/vivienda/loft"
// 	},
// 	{
// 		"name":"Villa",
// 		"slug": "villa",
// 		"parent": "/vivienda",
// 		"category":"/vivienda/villa"
// 	},
// 	{
// 		"name":"Residencial",
// 		"slug": "residencial",
// 		"parent": "/",
// 		"category":"/residencial"
// 	},
// 	{
// 		"name":"Hacienda",
// 		"slug": "hacienda",
// 		"parent": "/residencial",
// 		"category":"/residencial/hacienda"
// 	},
// 	{
// 		"name":"Casa",
// 		"slug": "casa",
// 		"parent": "/residencial",
// 		"category":"/residencial/casa"
// 	},
// 	{
// 		"name":"Quinta Campestre",
// 		"slug": "quinta_campestre",
// 		"parent": "/residencial",
// 		"category":"/residencial/quinta_campestre"
// 	},
// 	{
// 		"name":"Casa",
// 		"slug": "casa",
// 		"parent": "/residencial",
// 		"category":"/residencial/casa"
// 	},
// 	{
// 		"name":"Departamento",
// 		"slug": "departamento",
// 		"parent": "/residencial",
// 		"category":"/residencial/departamento"
// 	},
// 	{
// 		"name":"Terreno",
// 		"slug": "terreno",
// 		"parent": "/terreno",
// 		"category":"/residencial/terreno"
// 	},
// 	{
// 		"name":"Comercial",
// 		"slug": "comercial",
// 		"parent": "/",
// 		"category":"/comercial"
// 	},
// 	{
// 		"name":"Local Comercial",
// 		"slug": "local_comercial",
// 		"parent": "/comercial",
// 		"category":"/comercial/local_comercial"
// 	},
// 	{
// 		"name":"Propiedad Rentera",
// 		"slug": "propiedad_rentera",
// 		"parent": "/comercial",
// 		"category":"/comercial/propiedad_rentera"
// 	},
// 	{
// 		"name":"Consultorio",
// 		"slug": "consultorio",
// 		"parent": "/comercial",
// 		"category":"/comercial/consultorio"
// 	},
// 	{
// 		"name":"Oficina",
// 		"slug": "oficina",
// 		"parent": "/comercial",
// 		"category":"/comercial/oficina"
// 	},
// 	{
// 		"name":"Bodega",
// 		"slug": "bodega",
// 		"parent": "/comercial",
// 		"category":"/comercial/bodega"
// 	}
	
// ]