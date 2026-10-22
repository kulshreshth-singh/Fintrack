import dns from "node:dns";


dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { configDotenv } from "dotenv";

configDotenv({
    path : "./.env"
})
import connectDB from "./db/connection.js";
import  app  from "./app.js";



connectDB()
.then(() =>{
    const PORT = process.env.PORT || 8000;

      const server = app.listen(PORT, () => {
            console.log(`FinTrack server running on port ${PORT}`);
        });

        server.on("error", (error) => {
            console.error("HTTP server error:", error.message);
            process.exit(1);
        });

})
.catch((error) =>{
    console.error("Failed to start FinTrack:", error.message);
    process.exitCode = 1;

})




