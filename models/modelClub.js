const mongoose=require('mongoose');
mongoose.model('Club',{
    
    IDclub:{
        type:Number,
        requiered:true,
        unique:true
    },
    Nombre:{
        type: String,
        requiered:true,
    
    },
    Entrenador:{
        type:String,
        requiered:true
    },
    Ciudad:{
        type:String,
        requiered:true
    }

});