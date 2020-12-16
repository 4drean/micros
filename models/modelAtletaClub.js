const mongoose=require('mongoose');
mongoose.model('AtletaClub',{
    IDatleta:{
        type: Number,
        required:true,
        unique:true
    },
    IDclub:{
        type: Number,
        requiered:true
    },
    Anos:{
        type: Number,
        requiered:true,
    
    },
    Estado:{
        type:String,
        requiered:true
    }

});