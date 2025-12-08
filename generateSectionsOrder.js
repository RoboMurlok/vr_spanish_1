import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Конфигурация для каждой страницы
const pages = {
  home: {
    file: "homePage.json",
    fixedFirst: ["hero"],
    fixedLast: ["contact"],
    random: ["services", "why", "work"],
  },
  reviews: {
    file: "reviewsPage.json",
    fixedFirst: [],
    fixedLast: ["contact"],
    random: ["reviews", "services"],
  },
  // можно добавить новые страницы
  // blog: { file: "blogSections.json", fixedFirst: ["header"], fixedLast: ["footer"], random: ["post1","post2"] }
};

for (const [pageName, config] of Object.entries(pages)) {
  const { file, fixedFirst, fixedLast, random } = config;

  // перемешиваем случайно
  const shuffled = [...random].sort(() => Math.random() - 0.5);

  // финальный порядок
  const sections = [...fixedFirst, ...shuffled, ...fixedLast];

  // путь до JSON
  const filePath = path.join(__dirname, "src", file);

  // записываем файл
  fs.writeFileSync(filePath, JSON.stringify(sections, null, 2));

  console.log(`Page "${pageName}" sections generated:`, sections);
}

// import fs from "fs";
// import path from "path";
// import { fileURLToPath, pathToFileURL } from "url";
// import { seed } from "./seed.js"; // импортируем сид

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // ===== ДЕТЕРМИНИРОВАННЫЙ СИД-ГЕНЕРАТОР =====
// function seedRandom(seed) {
//   return function () {
//     seed = (seed * 9301 + 49297) % 233280;
//     return seed / 233280;
//   };
// }

// // ===== ДЕТЕРМИНИРОВАННЫЙ SHUFFLE =====
// function shuffleWithSeed(array, seed) {
//   const rng = seedRandom(seed);
//   const result = [...array];

//   for (let i = result.length - 1; i > 0; i--) {
//     const j = Math.floor(rng() * (i + 1));
//     [result[i], result[j]] = [result[j], result[i]];
//   }

//   return result;
// }

// // Конфигурация для страниц
// const pages = {
//   home: {
//     file: "homePage.json",
//     fixedFirst: ["hero"],
//     fixedLast: ["contact"],
//     random: ["services", "why", "work"],
//   },
//   reviews: {
//     file: "reviewsPage.json",
//     fixedFirst: [],
//     fixedLast: ["contact"],
//     random: [], // сюда позже подгрузим реальные отзывы
//   },
// };

// // Загружаем данные для reviews
// const reviewsPath = path.join(__dirname, "src", "db", "reviews.js");
// const reviewsModule = await import(pathToFileURL(reviewsPath).href);
// const { reviews } = reviewsModule;

// // Заполняем reviews.random секциями (например, именами отзывов)
// pages.reviews.random = shuffleWithSeed(reviews, seed).slice(0, 3).map(r => r.name);

// // Генерируем файлы для всех страниц с детерминированным перемешиванием
// for (const [pageName, config] of Object.entries(pages)) {
//   const { file, fixedFirst, fixedLast, random } = config;

//   // Перемешиваем секции детерминированно
//   const shuffled = shuffleWithSeed(random, seed);

//   const sections = [...fixedFirst, ...shuffled, ...fixedLast];

//   const filePath = path.join(__dirname, "src", file);
//   fs.writeFileSync(filePath, JSON.stringify(sections, null, 2));

//   console.log(`Page "${pageName}" sections generated:`, sections);
// }
