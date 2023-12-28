import 'dotenv/config'

import app from "./src/app.js";

const PORT = 3333;

app.listen(PORT, () => console.log("server on!!"))

