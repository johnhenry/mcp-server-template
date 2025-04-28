import createServer from "mcp-create-express-app";
import server from "./index.mjs";
const app = await createServer(server);
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
