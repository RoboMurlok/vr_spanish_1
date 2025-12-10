// import fs from "fs";
// import path from "path";
// import process from "process";

// const countPath = path.join(process.cwd(), "count.js");

// // Проверяем, что файл существует
// if (!fs.existsSync(countPath)) {
//   console.error("❌ count.js не найден!");
//   process.exit(1);
// }

// // Читаем файл как строку
// let content = fs.readFileSync(countPath, "utf-8");

// // Находим текущее число через RegExp
// const match = content.match(/(\d+)/);

// if (!match) {
//   console.error("❌ Не найдено число в count.js");
//   process.exit(1);
// }

// // Увеличиваем на 1
// const current = parseInt(match[1], 10);
// const next = current + 1;

// // Заменяем старое число на новое
// const newContent = content.replace(/\d+/, next.toString());

// // Перезаписываем файл
// fs.writeFileSync(countPath, newContent);

// console.log(`✅ buildCount обновлён: ${current} → ${next}`);


import fs from "fs";
import path from "path";
import os from "os";
 import process from "process";
import { zip } from "zip-a-folder";
import { pathToFileURL } from "url";

async function run() {
  try {
    const projectRoot = process.cwd();

    // -------- 1. Читаем siteName.js --------
    const siteConfigPath = path.join(projectRoot, "siteName.js");
    if (!fs.existsSync(siteConfigPath)) {
      throw new Error("Файл siteName.js не найден!");
    }
    const siteModule = await import(pathToFileURL(siteConfigPath));
    const siteNames = siteModule.siteName; // массив
    if (!Array.isArray(siteNames) || siteNames.length === 0) {
      throw new Error("siteName.js должен экспортировать массив siteName");
    }

    // -------- 2. Читаем count.js --------
    const countPath = path.join(projectRoot, "count.js");
    if (!fs.existsSync(countPath)) {
      throw new Error("Файл count.js не найден!");
    }
    const countModule = await import(pathToFileURL(countPath));
    let buildCount = countModule.buildCount;

    // -------- 3. Берём siteName по индексу buildCount --------
    const index = buildCount % siteNames.length; // чтобы не выйти за пределы массива
    const currentSiteName = siteNames[index];
    console.log(`📛 Используем siteName: ${currentSiteName} (индекс ${index})`);

    // -------- 4. Проверяем dist --------
    const distPath = path.join(projectRoot, "dist");
    if (!fs.existsSync(distPath)) {
      throw new Error("Папка dist не найдена. Сначала выполните build.");
    }

    // -------- 5. Создаём временную папку --------
    const tmpFolder = path.join(projectRoot, `.tmp_${currentSiteName}`);
    if (fs.existsSync(tmpFolder)) fs.rmSync(tmpFolder, { recursive: true, force: true });
    fs.mkdirSync(tmpFolder);

    // -------- 6. Копируем содержимое dist --------
    const items = fs.readdirSync(distPath);
    for (const item of items) {
      fs.cpSync(path.join(distPath, item), path.join(tmpFolder, item), { recursive: true });
    }

    // -------- 7. Архивируем во временную папку на Desktop --------
    const desktop = path.join(os.homedir(), "Desktop");
    const zipPath = path.join(desktop, `${currentSiteName}.zip`);
    if (fs.existsSync(zipPath)) fs.rmSync(zipPath);
    await zip(tmpFolder, zipPath);
    console.log(`📦 ZIP создан: ${zipPath}`);

    // -------- 8. Удаляем временную папку --------
    fs.rmSync(tmpFolder, { recursive: true, force: true });

    // -------- 9. Увеличиваем buildCount на 1 --------
    buildCount++;
    const newCountContent = `export let buildCount = ${buildCount};\n`;
    fs.writeFileSync(countPath, newCountContent);
    console.log(`🔢 buildCount увеличен: ${buildCount}`);

    console.log("🎉 Готово! Только ZIP остался на рабочем столе.");

  } catch (err) {
    console.error("❌ Ошибка:", err.message);
    throw err;
  }
}

run();
