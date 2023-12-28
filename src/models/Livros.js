import mongoose, { model } from "mongoose";

const LivrosSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId},
  titulo: { type: String, require: true },
  editora: { type: String },
  preco: { type: Number },
  paginas: { type: Number }
}, { versionKey: false })

const livros = mongoose.model("Livros", LivrosSchema)

export default livros