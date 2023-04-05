import app from "./app";
import AppDataSource from "./data-source";
import "dotenv/config";

const PORT = Number(process.env.PORT) || 3001;
const API_DETAIL = process.env.API_DETAIL || "/api/v1";

(async () => {
  await AppDataSource.initialize()
    .then(() => {
      console.log("Database connected");

      app.listen(PORT, () => {
        console.log(`Server running on https://localhost:${PORT + API_DETAIL} 🚀`);
      });
    })
    .catch((error: any) => {
      console.log("Failed to connect to database❌", error);
    });
})();
