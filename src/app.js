import express from "express"
const app = express();
app.use(express.json())

// lista de livros estatica para testes
const livros = [
  { id: 0, nome: "O Hobbit" },
  { id: 1, nome: "O Senhor dos Anéis" },
  { id: 2, nome: "Harry Potter e a Pedra Filosofal" },
  { id: 3, nome: "Cem Anos de Solidão" },
  { id: 4, nome: "1984" },
  { id: 5, nome: "Dom Quixote" },
  { id: 6, nome: "A Metamorfose" },
  { id: 7, nome: "Orgulho e Preconceito" },
  { id: 8, nome: "A Revolução dos Bichos" },
  { id: 9, nome: "Crime e Castigo" }
];



const Search = (id) => {
  const index = livros.findIndex(item => item.id === Number(id));
  return index;
}

// lista todos os livros .
app.get("/livros", (req, res) => {
  return res.json(livros)
})

// adiciona um novo livro.
app.post("/livros", (req, res) => {
  const { nome, id } = req.body
  const livro = { id, nome }

  livros.push(livro)
  return res.json("Livro registrado com sucesso")
})

// atualiza livros.
app.put("/livros/:id", (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  const index = Search(id);

  livros[index].nome = nome;

  return res.json("Livro atualizado com sucesso")
})


// deleta livros.
app.delete("/livros/:id", (req, res) => {
  const { id } = req.params;
  const index = Search(id);

  livros.splice(index, 1)

  return res.json("Livro deletado com sucesso")
})



export default app;