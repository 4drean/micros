const mongoose = require("mongoose");

// Copia la URL del sitio de mongo DB
const MONGOURI = "mongodb+srv://test:123@cluster0.1aodp.mongodb.net/Microservicio?retryWrites=true&w=majority";

const MongoServer = async() => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true
        });
        console.log("Conectado a la BD !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};
 
module.exports= MongoServer;