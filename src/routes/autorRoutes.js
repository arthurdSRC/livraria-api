import express from "express";
import AutorController from "../controllers/autorController.js";


const routes = express.Router();

routes.get("/autor", AutorController.listarAutor);
routes.get("/autor/:id", AutorController.buscarAutor);
routes.post("/autor", AutorController.criarAutor);
routes.put("/autor/:id", AutorController.atualizarAutor);
routes.delete("/autor/:id", AutorController.deletarAutor);

export default routes;