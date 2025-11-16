import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Path final ke plugin build
const frontendPath = path.join(__dirname, "../apps/playground/out");

console.log("Serving frontend from:", frontendPath);

// Serve static files
app.use(express.static(frontendPath));

// Fallback untuk SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 MemeOS running on port ${PORT}`);
});
