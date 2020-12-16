var express = require('express');
var ruta = express.Router();

var mongoose=require('mongoose');
require('../models/modelClub');
const Club=mongoose.model('Club');

ruta.get('/',(req,res)=>{
    Club.find().then((clubs)=>{
        res.json(clubs);
    }).catch((error)=>{
        if(error)
        throw error;
    });
});
ruta.get('/:IDclub',(req,res)=>{
    Club.findOne(req.params.id).then((clubs)=>{
        res.json(clubs);
    }).catch((error)=>{
        if(error)
        throw error;
    });
});
ruta.post('/',(req,res)=>{
  console.log(req.body);
   var newClub={
            IDclub:req.body.IDclub,
            Nombre:req.body.Nombre,
            Entrenador:req.body.Entrenador,
            Ciudad:req.body.Ciudad,
     
}
var clu=new Club(newClub);
clu.save().then(()=>{
    console.log("Se agrego un nuevo club exitosamente!!");
    res.send("Un nuevo club fue creado exitosamente");

}).catch((error)=>{
        if(error){
            console.log('ocurrio un error al agregar el nuevo club');
             throw error;
        }
       
    });


});
ruta.put('/',(req,res)=>{
    Club.findOne({IDclub: req.body.IDclub }).then((club)=>{
        
        
        console.log(req.body);
       club.Nombre=req.body.Nombre;
        club.Entrenador=req.body.Entrenador;
   
        club.markModified('Nombre');
        club.markModified('Entrenador');
      

        club.save().then(()=>{
                res.send('El club ha sido modificado!!');
        }).catch((error)=>{
            if(error)
                throw error;
        });
    }).catch((error)=>{
        if(error)
            throw error;
    });

});

ruta.delete('/:IDclub',(req,res)=>{
    Club.findOneAndRemove(req.params.IDclub).then(()=>{

        res.send('Eliminando un registro club');
    }).catch((error)=>{
        if(error)
            throw error;
    });
});

module.exports = ruta;