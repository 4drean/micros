const mongoose=require('mongoose');
mongoose.model('Atleta',{
IDatleta:{
    type: Number,
    requiered:true, 
    unique:true
},
Nombre:{
    type:String,
    requiered:true,
    lowercase:true,
    minlegth:3
},
Apellidos:{
    type:String,
    requiered:true,
    lowercase:true,
    minlegth:3
},
Edad:{
    type:Number,
    requiered:true,
    min:[1,'La edad minima es 1'],
    max:[120,'La edad maxima es 120']
},
Prueba:{
    type:String,
    requiered:true
},
Correo:{
    type: String,
    lowercase: true,
    requiered:[true,'Se requiere un correo electronico']

}
    
});