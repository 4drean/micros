var express = require('express');
var ruta = express.Router();

var mongoose=require('mongoose');
require('../models/modelAtletaClub');
const aClub=mongoose.model('AtletaClub');

ruta.get('/',(req,res)=>{
    aClub.find().then((aclubs)=>{
        res.json(aclubs);
    }).catch((error)=>{
        if(error)
        throw error;
    });
});
ruta.get('/:IDatleta',(req,res)=>{
    aClub.findOne(req.params.id).then((aclubs)=>{
        res.json(aclubs);
    }).catch((error)=>{
        if(error)
        throw error;
    });
});
ruta.post('/',(req,res)=>{
  console.log(req.body);
   var newaClub={
            IDatleta:req.body.IDatleta,
            IDclub:req.body.IDclub,
            Anos:req.body.Anos,
            Estado:req.body.Estado
     
}
var aClu =new aClub (newaClub);

aClu.save().then(()=>{
    console.log("se agrego un atleta a un club exitosamente!!");
    res.send("se agrego un atleta a un club");

}).catch((error)=>{
        if(error){
            console.log('ocurrio un error al agregar un atleta al club');
             throw error;
        }
       
    });


});
ruta.put('/',(req,res)=>{
    aClub.findOne({IDatleta: req.body.IDatleta }).then((aclub)=>{
        
        
        console.log(req.body);
        aclub.IDclub=req.body.IDclub;
       aclub.Anos=req.body.Anos;
        aclub.Estado=req.body.Estado;
   
        aclub.markModified('IDclub');
        aclub.markModified('Anos');
        aclub.markModified('Estado');
      

        aclub.save().then(()=>{
                res.send('Se ha modificado el registro de atleta!!');
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
    aClub.findOneAndRemove(req.params.IDatleta).then(()=>{

        res.send('Eliminando un registro de atleta al club');
    }).catch((error)=>{
        if(error)
            throw error;
    });
});

module.exports = ruta;