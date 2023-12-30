import express from "express"
import connectDB from "./config/dbConnection.js";
import routes from "./routes/index.js";



const connection = await connectDB();
connection.on("error", (error) => { console.error("Erro de conexão", error) })

connection.once("open", () => {
  console.log("Conexão com o banco feita com sucesso")
})

const app = express();
routes(app);

app.use(express.json())

export default app;