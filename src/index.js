import express from "express";
import cors from "cors";
import routeHome from "./routes/route.home.js";
import routeProduto from "./routes/route.produto.js";
import routePedido from "./routes/route.pedido.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

// Routes
app.use(routeHome)
app.use(routeProduto);
app.use(routePedido);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
