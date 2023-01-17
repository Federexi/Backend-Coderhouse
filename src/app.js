import express from "express";
import Container from "./contenedor.js";

const app = express();

const server = app.listen(8080,()=>console.log("Listening"));

const contenedor = new Container("productos"); //creo una variable contenedor para usar los métodos de la clase Container

const obtenerProductos = async () =>{
    let productos = await contenedor.getAll(); //obtengo los productos y los retorno
    return productos;
}

app.get("/productos", async (req,res)=>{
    let productos = await obtenerProductos();
    res.send(productos);
})

app.get("/productoRandom", async (req,res)=>{
    let productos = await obtenerProductos();
    let productoRandom = productos[Math.floor(Math.random()*productos.length)];
    res.send(productoRandom);
})