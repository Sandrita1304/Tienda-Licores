const bebidasController ={};

const {
  obtenerBebidas,
  guardarBebida,
  eliminarBebida,
  }=  require("../services/Bebidas.Services")

  bebidasController.obtenerBebidas = async (req,res) =>{
    const listaBebidas = await obtenerBebidas();
    res.json(listaBebidas);
  };
  bebidasController.guardarBebida = async (req,res) =>{
    await guardarBebida (req.body);
    res.send("Bebida guardada exitosamente");
  };
  bebidasController.eliminarBebida =async (req,res) =>{
    const idParam =req.params.idParam
    await eliminarBebida(idParam);
  }
  module.exports = bebidasController;
