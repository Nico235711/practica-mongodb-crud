import server from "./server.js";

try {
  const PORT = process.env.PORT || 4000
  server.listen(PORT, () => {
    console.log(`API Rest levantada en http://localhost:${PORT}`);
  })
} catch (error) {
  console.log(`Hubo un error al levantar la API: ${error}`);  
}