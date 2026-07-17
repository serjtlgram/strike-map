# Powershell script to extract good fire images and compress the video without cutting
$ErrorActionPreference = "Stop"

# Extract better frames for the fire
.\ffmpeg.exe -ss 00:01:00 -i "video\syzran_2026.webm" -vframes 1 -vf "scale='min(1024,iw)':-1" -q:v 5 "images\syzran_2026_1.jpg" -y
.\ffmpeg.exe -ss 00:02:00 -i "video\syzran_2026.webm" -vframes 1 -vf "scale='min(1024,iw)':-1" -q:v 5 "images\syzran_2026_2.jpg" -y

# Compress video to fit under 2MB fully, duration is 252s.
# 2MB = ~16000 kbits. 16000 / 252 = ~63 kbps total.
# Let's use 16k audio and 40k video.
.\ffmpeg.exe -y -i "video\syzran_2026.webm" -vf "scale=-2:240" -c:v libx264 -b:v 40k -preset slow -pass 1 -c:a aac -b:a 16k -f mp4 NUL
.\ffmpeg.exe -y -i "video\syzran_2026.webm" -vf "scale=-2:240" -c:v libx264 -b:v 40k -preset slow -pass 2 -c:a aac -b:a 16k "video\syzran_2026_comp.mp4"
