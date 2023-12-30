import express from "express";
import LivroController from "../controllers/livrosController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.post("/livros", LivroController.criarLivro);


export default routes;