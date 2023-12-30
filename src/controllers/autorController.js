import { autor } from "../models/Autor.js";

class AutorController {
  // listar todos os Autor
  static async listarAutor(req, res) {
    try {
      const list = await autor.find({});
      res.status(200).json(list);
    }
    catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }
  // buscar por um autor
  static async buscarAutor(req, res) {
    try {
      const { id } = req.params
      const Search = await autor.findById(id);
      res.status(200).json(Search);
    }
    catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }

  // Criar autor
  static async criarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "criado com sucesso", livro: novoAutor })

    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
    }
  }

  // atualizar um autor
  static async atualizarAutor(req, res) {
    try {
      const { id } = req.params
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "atualizado com sucesso" });
    }
    catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao atualizar` });
    }
  }

  // deletar autor

  static async deletarAutor(req, res) {
    try {
      const { id } = req.params
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "deletado com sucesso" });
    }
    catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao deletar` });
    }

  }


}

export default AutorController;