import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get("/", (req, res) => {
  res.json({ status: "GamerGPTV6 backend activo" });
});

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.json({ reply: "Escribe algo para poder ayudarte." });
  }

  const text = message.toLowerCase();

  let reply = "";

  if (text.includes("gta")) {
    reply = "Consejo estratégico: prioriza economía y misiones secundarias al inicio. No gastes todo en armas. Invierte en propiedades pronto.";
  } else if (text.includes("fortnite")) {
    reply = "En Fortnite, céntrate en posicionamiento. El high ground sigue siendo clave. Practica edición rápida.";
  } else if (text.includes("minecraft")) {
    reply = "Primera noche: madera, pico de piedra y refugio. Prioriza hierro antes que oro.";
  } else if (text.includes("warzone")) {
    reply = "En Warzone, rota temprano hacia zona segura. No esperes al último círculo.";
  } else {
    reply = `Análisis táctico sobre: "${message}". Enfócate en economía, posicionamiento y optimización de recursos.`;
  }

  res.json({ reply });
});
