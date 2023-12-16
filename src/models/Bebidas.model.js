const {Schema,model } = require("mongoose");

const BebidaSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es requerido"],
        validate: {
          validator: (value) => {
            return typeof value === "string";
          },
          message: "El nombre debe ser una cadena de texto",
        }
    },
    tamaño: {
        type: String,
        required: [true, "El tamaño es requerido"],
        validate: {
          validator: (value) => {
            return typeof value === "string";
          },
          message: "El tamaño debe ser una cadena de texto",
        }
    },
    cantidad: {
        type: Number,
        required: [true, "La cantidad es requerida"],
        validate: {
          validator: (value) => {
            return typeof value === "number";
          },
          message: "La cantidad debe ser un valor numerico",
        }
    },
    precio: {
        type: Number,
        required: [true, "El precio es requerido"],
        validate: {
          validator: (value) => {
            return typeof value === "number";
          },
          message: "El precio debe ser un valor numerico",
        }
    },
    categoria: {
        type: String,
        required: [true, "La categoria es requerida"],
        validate: {
          validator: (value) => {
            return typeof value === "string";
          },
          message: "La categoria  debe ser una cadena de texto",
        }, 
    }
});

module.exports = model("Bebida",BebidaSchema,"Bebidas");