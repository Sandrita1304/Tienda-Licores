const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Licores",{
    useUnifiedTopology: true,
    useNewUrlParser: true,  
})
.then(()=> {
    console.log("Conexión exitosa");
})
.catch((e) => {
    console.log("no se puede conectar a la base de datos"+ e);
});