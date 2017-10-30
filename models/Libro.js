var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var libroSchema = new Schema({
   titulo: {type:String},
   autor: {
       type: Schema.Types.ObjectId,
       ref: 'Autor',
       required: true
   },
   anio:{type:Number},
   genero:{type:String}
},
{
    versionKey:false
});

module.exports = mongoose.model('Libro', libroSchema);