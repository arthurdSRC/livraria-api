import livro from "../models/Livro.js";


class LivroController {

  static async listarLivros(req, res) {
    const list = await livro.find({});
    res.status(200).json(list);
  }


  static async criarLivro(req, res) {

    try {
      const novoLivro = await livro.create(req.body);
      res.status(201).json({ message: "criado com sucesso", livro: novoLivro })

    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
    }
  }

}

export default LivroController;