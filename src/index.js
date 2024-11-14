import server from "./server.js";
import "dotenv/config"

try {
  const PORT = process.env.PORT || 4000
  server.listen(PORT, () => {
    console.log(`API Rest levantada en http://localhost:${PORT}`);
  })
} catch (error) {
  console.log(`Hubo un error al levantar la API: ${error}`);  
}