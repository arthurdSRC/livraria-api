import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {
  // listar todos os livros
  static async listarLivros(req, res) {
    try {
      const list = await livro.find({});
      res.status(200).json(list);
    }
    catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }
  // buscar por um livro
  static async buscarLivro(req, res) {

    try {
      const { id } = req.params
      const Search = await livro.findById(id);
      res.status(200).json(Search);
    }
    catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }

  }
  // Criar livro 
  static async criarLivro(req, res) {

    const novoLivro = req.body
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
      const livroCriado = await livro.create(livroCompleto)

      res.status(201).json({ message: "criado com sucesso", livro: livroCompleto })

    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
    }
  }

  // atualizar um livro
  static async atualizarLivro(req, res) {
    try {
      const { id } = req.params
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "atualizado com sucesso" });
    }
    catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao atualizar` });
    }

  }
  // deletar livro

  static async deletarLivro(req, res) {
    try {
      const { id } = req.params
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "deletado com sucesso" });
    }
    catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao deletar` });
    }

  }

  static async buscarEditora(req, res) {
    const {editora} = req.query

    try {
      const filter = await livro.find({ editora })
      res.status(200).json(filter)

    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao buscar` })
    }

  }

}

export default LivroController;