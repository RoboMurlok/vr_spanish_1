import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { seed } from "./seed.js"; // <-- импортируем seed

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// путь к text.js
const textPath = path.join(__dirname, "src", "db", "text.js");
const textModule = await import(pathToFileURL(textPath).href);
const { text } = textModule;

// ===== ДЕТЕРМИНИРОВАННЫЙ СИД-ГЕНЕРАТОР =====
function seedRandom(seed) {
  return function () {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

// ===== ДЕТЕРМИНИРОВАННЫЙ SHUFFLE =====
function shuffleWithSeed(array, seed) {
  const rng = seedRandom(seed);
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

// перемешиваем по seed
const shuffled = shuffleWithSeed(text, seed);

// выбираем ровно 5
const selected = shuffled.slice(0, 5);

const outputPath = path.join(__dirname, "src", "textRandom.json");
fs.writeFileSync(outputPath, JSON.stringify(selected, null, 2));

console.log(
  `text generated (3 text) with seed ${seed}:`,
  selected.map((p) => p.title)
);
