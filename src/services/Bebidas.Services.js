const BebidaSchema = require("../models/Bebidas.model");

const obtenerBebidas = async () => {
return await BebidaSchema.find();
};

const guardarBebida = async (bebida)=> {
    let nuevaBebida = new BebidaSchema(bebida);
    return await nuevaBebida.save();
    
};
const eliminarBebida =async (id)=>{
   return await BebidaSchema.findOneAndDelete({_id:id});


}
module.exports ={
    obtenerBebidas,
    guardarBebida,
    eliminarBebida,
}
