// import fs from "fs";
// import path from "path";
// import os from "os";
// import process from "process";
// import { zip } from "zip-a-folder";
// import { pathToFileURL } from "url";

// async function run() {
//   try {
//     const projectRoot = process.cwd();

//     // -------- 1. Читаем siteName.js из корня --------
//     const siteConfigPath = path.join(projectRoot, "siteName.js");

//     if (!fs.existsSync(siteConfigPath)) {
//       throw new Error("Файл siteName.js не найден в корне проекта");
//     }

//     const siteModule = await import(pathToFileURL(siteConfigPath));
//     const siteName = siteModule.siteName;

//     if (!siteName) {
//       throw new Error("В siteName.js отсутствует export const siteName");
//     }

//     console.log(`📛 Название сайта: ${siteName}`);

//     // -------- 2. Проверяем наличие dist --------
//     const distPath = path.join(projectRoot, "dist");

//     if (!fs.existsSync(distPath)) {
//       throw new Error("Папка dist не найдена. Сначала выполните build.");
//     }

//     // -------- 3. Создаём временную папку --------
//     const tmpFolder = path.join(projectRoot, `.tmp_${siteName}`);
//     if (fs.existsSync(tmpFolder)) fs.rmSync(tmpFolder, { recursive: true, force: true });
//     fs.mkdirSync(tmpFolder);

//     // -------- 4. Копируем dist во временную папку --------
//     const tmpDist = path.join(tmpFolder, "dist");
//     fs.cpSync(distPath, tmpDist, { recursive: true });

//     // -------- 5. Архивируем временную папку в Desktop --------
//     const desktop = path.join(os.homedir(), "Desktop");
//     const zipPath = path.join(desktop, `${siteName}.zip`);

//     if (fs.existsSync(zipPath)) fs.rmSync(zipPath);

//     await zip(tmpFolder, zipPath);

//     console.log(`📦 ZIP создан: ${zipPath}`);

//     // -------- 6. Удаляем временную папку --------
//     fs.rmSync(tmpFolder, { recursive: true, force: true });

//     console.log("🎉 Готово! Только ZIP остался на рабочем столе.");

//   } catch (err) {
//     console.error("❌ Ошибка:", err.message);
//     throw err;
//   }
// }

// run();


// import fs from "fs";
// import path from "path";
// import os from "os";
// import process from "process";
// import { zip } from "zip-a-folder";
// import { pathToFileURL } from "url";

// async function run() {
//   try {
//     const projectRoot = process.cwd();

//     // -------- 1. Читаем siteName.js из корня --------
//     const siteConfigPath = path.join(projectRoot, "siteName.js");

//     if (!fs.existsSync(siteConfigPath)) {
//       throw new Error("Файл siteName.js не найден в корне проекта");
//     }

//     const siteModule = await import(pathToFileURL(siteConfigPath));
//     const siteName = siteModule.siteName;

//     if (!siteName) {
//       throw new Error("В siteName.js отсутствует export const siteName");
//     }

//     console.log(`📛 Название сайта: ${siteName}`);

//     // -------- 2. Проверяем наличие dist --------
//     const distPath = path.join(projectRoot, "dist");
//     if (!fs.existsSync(distPath)) {
//       throw new Error("Папка dist не найдена. Сначала выполните build.");
//     }

//     // -------- 3. Создаём временную папку для файлов без dist --------
//     const tmpFolder = path.join(projectRoot, `.tmp_${siteName}`);
//     if (fs.existsSync(tmpFolder)) fs.rmSync(tmpFolder, { recursive: true, force: true });
//     fs.mkdirSync(tmpFolder);

//     // -------- 4. Копируем содержимое dist во временную папку --------
//     const items = fs.readdirSync(distPath);
//     for (const item of items) {
//       const src = path.join(distPath, item);
//       const dest = path.join(tmpFolder, item);
//       fs.cpSync(src, dest, { recursive: true });
//     }

//     // -------- 5. Архивируем временную папку в Desktop --------
//     const desktop = path.join(os.homedir(), "Desktop");
//     const zipPath = path.join(desktop, `${siteName}.zip`);
//     if (fs.existsSync(zipPath)) fs.rmSync(zipPath);

//     await zip(tmpFolder, zipPath);

//     console.log(`📦 ZIP создан: ${zipPath}`);

//     // -------- 6. Удаляем временную папку --------
//     fs.rmSync(tmpFolder, { recursive: true, force: true });

//     console.log("🎉 Готово! Все файлы из dist лежат в корне ZIP.");

//   } catch (err) {
//     console.error("❌ Ошибка:", err.message);
//     throw err;
//   }
// }

// run();

// import fs from "fs";
// import path from "path";
// import os from "os";
// import process from "process";
// import { zip } from "zip-a-folder";
// import { pathToFileURL } from "url";

// async function run() {
//   try {
//     const projectRoot = process.cwd();

//     // -------- 1. Читаем siteName.js --------
//     const siteConfigPath = path.join(projectRoot, "siteName.js");
//     if (!fs.existsSync(siteConfigPath)) {
//       throw new Error("Файл siteName.js не найден!");
//     }
//     const siteModule = await import(pathToFileURL(siteConfigPath));
//     const siteNames = siteModule.siteName; // массив
//     if (!Array.isArray(siteNames) || siteNames.length === 0) {
//       throw new Error("siteName.js должен экспортировать массив siteName");
//     }

//     // -------- 2. Читаем count.js --------
//     const countPath = path.join(projectRoot, "count.js");
//     if (!fs.existsSync(countPath)) {
//       throw new Error("Файл count.js не найден!");
//     }
//     const countModule = await import(pathToFileURL(countPath));
//     let buildCount = countModule.buildCount;

//     // -------- 3. Берём siteName по индексу buildCount --------
//     const index = buildCount % siteNames.length; // чтобы не выйти за пределы массива
//     const currentSiteName = siteNames[index];
//     console.log(`📛 Используем siteName: ${currentSiteName} (индекс ${index})`);

//     // -------- 4. Проверяем dist --------
//     const distPath = path.join(projectRoot, "dist");
//     if (!fs.existsSync(distPath)) {
//       throw new Error("Папка dist не найдена. Сначала выполните build.");
//     }

//     // -------- 5. Создаём временную папку --------
//     const tmpFolder = path.join(projectRoot, `.tmp_${currentSiteName}`);
//     if (fs.existsSync(tmpFolder)) fs.rmSync(tmpFolder, { recursive: true, force: true });
//     fs.mkdirSync(tmpFolder);

//     // -------- 6. Копируем содержимое dist --------
//     const items = fs.readdirSync(distPath);
//     for (const item of items) {
//       fs.cpSync(path.join(distPath, item), path.join(tmpFolder, item), { recursive: true });
//     }

//     // -------- 7. Архивируем во временную папку на Desktop --------
//     const desktop = path.join(os.homedir(), "Desktop");
//     const zipPath = path.join(desktop, `${currentSiteName}.zip`);
//     if (fs.existsSync(zipPath)) fs.rmSync(zipPath);
//     await zip(tmpFolder, zipPath);
//     console.log(`📦 ZIP создан: ${zipPath}`);

//     // -------- 8. Удаляем временную папку --------
//     fs.rmSync(tmpFolder, { recursive: true, force: true });

//     // -------- 9. Увеличиваем buildCount на 1 --------
//     buildCount++;
//     const newCountContent = `export let buildCount = ${buildCount};\n`;
//     fs.writeFileSync(countPath, newCountContent);
//     console.log(`🔢 buildCount увеличен: ${buildCount}`);

//     console.log("🎉 Готово! Только ZIP остался на рабочем столе.");

//   } catch (err) {
//     console.error("❌ Ошибка:", err.message);
//     throw err;
//   }
// }

// run();



// import fs from "fs";
// import path from "path";
// import os from "os";
//  import process from "process";
// import { zip } from "zip-a-folder";
// import { pathToFileURL } from "url";

// async function run() {
//   try {
//     const projectRoot = process.cwd();

//     // -------- 1. Читаем siteName.js --------
//     const siteConfigPath = path.join(projectRoot, "siteName.js");
//     if (!fs.existsSync(siteConfigPath)) throw new Error("Файл siteName.js не найден!");
//     const siteModule = await import(pathToFileURL(siteConfigPath));
//     const siteNames = siteModule.siteName;
//     if (!Array.isArray(siteNames) || siteNames.length === 0) {
//       throw new Error("siteName.js должен экспортировать массив siteName");
//     }

//     // -------- 2. Читаем count.js как текст --------
//     const countPath = path.join(projectRoot, "count.js");
//     if (!fs.existsSync(countPath)) throw new Error("Файл count.js не найден!");
//     let countContent = fs.readFileSync(countPath, "utf-8");

//     const match = countContent.match(/(\d+)/);
//     if (!match) throw new Error("Не найдено число в count.js");
//     let buildCount = parseInt(match[1], 10);

//     // -------- 3. Берём siteName по индексу buildCount --------
//     const index = buildCount % siteNames.length;
//     const currentSiteName = siteNames[index];
//     console.log(`📛 Используем siteName: ${currentSiteName} (индекс ${index})`);

//     // -------- 4. Проверяем dist --------
//     const distPath = path.join(projectRoot, "dist");
//     if (!fs.existsSync(distPath)) throw new Error("Папка dist не найдена. Сначала выполните build.");

//     // -------- 5. Lock-файл чтобы избежать двойного увеличения --------
//     const lockPath = path.join(projectRoot, ".afterBuild.lock");
//     if (fs.existsSync(lockPath)) {
//       console.log("⚠ Скрипт уже выполнялся, buildCount не увеличен.");
//       return;
//     }
//     fs.writeFileSync(lockPath, "1");

//     // -------- 6. Создаём временную папку --------
//     const tmpFolder = path.join(projectRoot, `.tmp_${currentSiteName}`);
//     if (fs.existsSync(tmpFolder)) fs.rmSync(tmpFolder, { recursive: true, force: true });
//     fs.mkdirSync(tmpFolder);

//     // -------- 7. Копируем содержимое dist во временную папку --------
//     const items = fs.readdirSync(distPath);
//     for (const item of items) {
//       fs.cpSync(path.join(distPath, item), path.join(tmpFolder, item), { recursive: true });
//     }

//     // -------- 8. Архивируем во временную папку на Desktop --------
//     const desktop = path.join(os.homedir(), "Desktop");
//     const zipPath = path.join(desktop, `${currentSiteName}.zip`);
//     if (fs.existsSync(zipPath)) fs.rmSync(zipPath);

//     await zip(tmpFolder, zipPath);
//     console.log(`📦 ZIP создан: ${zipPath}`);

//     // -------- 9. Удаляем временную папку --------
//     fs.rmSync(tmpFolder, { recursive: true, force: true });

//     // -------- 10. Увеличиваем buildCount на 1 --------
//     buildCount++;
//     const newCountContent = countContent.replace(/\d+/, buildCount.toString());
//     fs.writeFileSync(countPath, newCountContent);
//     console.log(`🔢 buildCount увеличен: ${buildCount}`);

//     // -------- 11. Удаляем lock-файл --------
//     fs.rmSync(lockPath, { force: true });

//     console.log("🎉 Готово! Только ZIP остался на рабочем столе.");

//   } catch (err) {
//     console.error("❌ Ошибка:", err.message);
//     throw err;
//   }
// }

// run();


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
    const siteNames = siteModule.siteName;

    if (!Array.isArray(siteNames) || siteNames.length === 0) {
      throw new Error("siteName.js должен экспортировать непустой массив siteName");
    }

    // -------- 2. Читаем count.js --------
    const countPath = path.join(projectRoot, "count.js");

    if (!fs.existsSync(countPath)) {
      throw new Error("Файл count.js не найден!");
    }

    // Динамическая загрузка
    const countModule = await import(pathToFileURL(countPath) + `?t=${Date.now()}`);
    let buildCount = Number(countModule.buildCount);

    // -------- 3. Вычисляем индекс --------
    const index = buildCount % siteNames.length;
    const wrapped = buildCount >= siteNames.length;

    const currentSiteName = siteNames[index];

    console.log("\n========= Билд-информация =========");
    console.table([
      {
        Build: buildCount,
        Index: index,
        SiteName: currentSiteName,
        "Массив закончился?": wrapped ? "Да" : "Нет (в пределах)"
      }
    ]);

    if (wrapped) {
      console.log("⚠ ВНИМАНИЕ: Количество билдов превысило размер массива siteName — применяется циклический индекс.\n");
    }

    // -------- 4. Проверяем dist --------
    const distPath = path.join(projectRoot, "dist");
    if (!fs.existsSync(distPath)) {
      throw new Error("Папка dist не найдена. Сначала выполните build.");
    }

    // -------- 5. Создаём временную папку --------
    const tmpFolder = path.join(projectRoot, `.tmp_${currentSiteName}`);
    if (fs.existsSync(tmpFolder)) fs.rmSync(tmpFolder, { recursive: true, force: true });
    fs.mkdirSync(tmpFolder);

    // -------- 6. Копируем dist --------
    fs.readdirSync(distPath).forEach(item => {
      fs.cpSync(path.join(distPath, item), path.join(tmpFolder, item), { recursive: true });
    });

    // -------- 7. Архивируем на Desktop --------
    const desktop = path.join(os.homedir(), "Desktop");
    const zipPath = path.join(desktop, `${currentSiteName}.zip`);
    if (fs.existsSync(zipPath)) fs.rmSync(zipPath);

    await zip(tmpFolder, zipPath);
    console.log(`📦 ZIP создан: ${zipPath}`);

    // -------- 8. Чистим временную папку --------
    fs.rmSync(tmpFolder, { recursive: true, force: true });

    // -------- 9. Инкрементируем buildCount --------
    buildCount += 1;

    const newCountContent = `export let buildCount = ${buildCount};\n`;
    fs.writeFileSync(countPath, newCountContent);

    console.log(`🔢 buildCount обновлён: ${buildCount}`);
    console.log("🎉 Готово!\n");

  } catch (err) {
    console.error("❌ Ошибка:", err);
  }
}

run();
