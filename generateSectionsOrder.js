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
    random: ["reviews", "services", "text"],
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
