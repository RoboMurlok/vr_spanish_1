import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

// импорт seed
import { seed } from "./seed.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// путь к posts.js
const postsPath = path.join(__dirname, "src", "db", "posts.js");

// подгружаем массив posts
const postsModule = await import(pathToFileURL(postsPath).href);
const { posts } = postsModule;

// === ДЕТЕРМИНИРОВАННЫЙ СИД-ГЕНЕРАТОР ===
function seedRandom(seed) {
  return function () {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

// === ДЕТЕРМИНИРОВАННЫЙ SHUFFLE ===
function shuffleWithSeed(array, seed) {
  const rng = seedRandom(seed);
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

// перемешиваем
const shuffled = shuffleWithSeed(posts, seed);

// случайное *детерминированное* количество 6–10
const rng = seedRandom(seed);
const randomCount = Math.floor(rng() * 5) + 6;

// выбираем статьи
const selected = shuffled.slice(0, randomCount);

// сохраняем
const output = path.join(__dirname, "src", "blogRandom.json");

fs.writeFileSync(output, JSON.stringify(selected, null, 2));

console.log(
  `Blog posts generated (${randomCount} posts) with seed ${seed}:`,
  selected.map((p) => p.slug)
);
