import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { seed } from "./seed.js"; // <-- импортируем seed

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// путь к reviews.js
const reviewsPath = path.join(__dirname, "src", "db", "reviews.js");
const reviewsModule = await import(pathToFileURL(reviewsPath).href);
const { reviews } = reviewsModule;

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
const shuffled = shuffleWithSeed(reviews, seed);

// выбираем ровно 3
const selected = shuffled.slice(0, 3);

const outputPath = path.join(__dirname, "src", "reviewsRandom.json");
fs.writeFileSync(outputPath, JSON.stringify(selected, null, 2));

console.log(
  `Reviews generated (3 reviews) with seed ${seed}:`,
  selected.map((p) => p.name)
);
