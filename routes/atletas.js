var express = require('express');
var ruta = express.Router();

var mongoose=require('mongoose');
require('../models/modelAtleta');
const Atleta=mongoose.model('Atleta');

ruta.get('/',(req,res)=>{
    Atleta.find().then((atletas)=>{
        res.json(atletas);
    }).catch((error)=>{
        if(error)
        throw error;
    });
});
ruta.get('/:IDatleta',(req,res)=>{
    Atleta.findOne(req.params.id).then((atletas)=>{
        res.json(atletas);
    }).catch((error)=>{
        if(error)
        throw error;
    });
});
ruta.post('/',(req,res)=>{
  console.log(req.body);
   var newAtleta={
            IDatleta:req.body.IDatleta,
            Nombre:req.body.Nombre,
            Apellidos:req.body.Apellidos,
            Edad:req.body.Edad,
            Prueba:req.body.Prueba,
            Correo:req.body.Correo
}
var atlet=new Atleta(newAtleta);
atlet.save().then(()=>{
    console.log("Se agrego un nuevo atleta exitosamente!!");
    res.send("Un nuevo atleta fue creado exitosamente");

}).catch((error)=>{
        if(error){
            console.log('ocurrio un error al agregar el nuevo atleta');
             throw error;
        }
       
    });


});
ruta.put('/',(req,res)=>{
    Atleta.findOne({IDatleta: req.body.IDatleta }).then((atleta)=>{
        
        
        console.log(req.body);
        atleta.Nombre=req.body.Nombre;
        atleta.Apellidos=req.body.Apellidos;
        atleta.Prueba=req.body.Prueba;

        atleta.markModified('Nombre');
        atleta.markModified('Apellidos');
        atleta.markModified('Prueba');

        atleta.save().then(()=>{
                res.send('El alteta ha sido modificado!!');
        }).catch((error)=>{
            if(error)
                throw error;
        });
    }).catch((error)=>{
        if(error)
            throw error;
    });

});

ruta.delete('/:IDatleta',(req,res)=>{
    Atleta.findOneAndRemove(req.params.IDatleta).then(()=>{

        res.send('Eliminando un registro atleta');
    }).catch((error)=>{
        if(error)
            throw error;
    });
});

module.exports = ruta;