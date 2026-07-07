---
name: video-processing
description: Use this skill when the user asks to add a video to the strike map, download video, or compress video/images.
---

# Video and Image Processing for Strike Map

Когда пользователь просит добавить видео к событию на карте, или ужать файлы, всегда следуй этому алгоритму:

1. **Скачивание:** Используй локальную утилиту `yt-dlp.exe` для скачивания оригинального видео по ссылке.
2. **Сжатие Видео:** Используй `ffmpeg.exe` (в корне проекта). Для сохранения качества при размере < 2 МБ используй масштабирование и CRF (Constant Rate Factor) вместо жесткого битрейта, а также ограничение размера файлов (`-fs 1.9M`):
   ```powershell
   .\ffmpeg.exe -i "input.mp4" -vf "scale=-2:480" -vcodec libx264 -crf 28 -preset slow -acodec aac -b:a 64k -fs 1.9M "output.mp4" -y
   ```
   *(Эти параметры уменьшат разрешение до 480p, сохраняя гораздо больше деталей, чем при низком битрейте, не превышая лимит 2 МБ).*

3. **Сжатие Картинок:** Если картинки больше 100 КБ, сжимай их `ffmpeg.exe` с параметром качества (например, `-q:v 5`) и уменьшением разрешения, чтобы уложиться в 100 КБ:
   ```powershell
   .\ffmpeg.exe -i "input.jpg" -vf "scale='min(1024,iw)':-1" -q:v 5 "output.jpg" -y
   ```
4. **Сохранение:** Готовое сжатое видео сохрани в папку `video/`, а картинки в `images/`.
5. **Обновление данных:** Укажи относительные пути в `data.js`.
