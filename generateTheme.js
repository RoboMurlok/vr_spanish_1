// import fs from "fs";
// import path from "path";
// import { fileURLToPath, pathToFileURL } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const themesPath = path.join(__dirname, "src", "db", "themes.js");
// const themesModule = await import(pathToFileURL(themesPath).href);
// const { themes } = themesModule;

// const shuffled = [...themes].sort(() => Math.random() - 0.5);

// const randomCount = 1;
// const selected = shuffled.slice(0, randomCount);

// const output = path.join(__dirname, "src", "themesRandom.json");
// fs.writeFileSync(output, JSON.stringify(selected, null, 2));

// console.log(
//   `themes generated (${randomCount} themes):`,
//  selected
// );


import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { seed } from "./seed.js"; // импортируем сид

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// путь к themes.js
const themesPath = path.join(__dirname, "src", "db", "themes.js");
const themesModule = await import(pathToFileURL(themesPath).href);
const { themes } = themesModule;

// перемешиваем детерминированно
const shuffled = shuffleWithSeed(themes, seed);

// выбираем нужное количество тем
const randomCount = 1;
const selected = shuffled.slice(0, randomCount);

// сохраняем в JSON
const output = path.join(__dirname, "src", "themesRandom.json");
fs.writeFileSync(output, JSON.stringify(selected, null, 2));

console.log(
  `Themes generated (${randomCount} themes):`,
  selected
);
