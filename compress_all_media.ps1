$imageDir = "D:\_DEV\Map kick\images"
$videoDir = "D:\_DEV\Map kick\video"
$ffmpeg = "D:\_DEV\Map kick\ffmpeg.exe"

$imagesToCompress = Get-ChildItem -Path $imageDir -File | Where-Object { $_.Length -gt 100KB }
$videosToCompress = Get-ChildItem -Path $videoDir -File | Where-Object { $_.Length -gt 2000000 } # slightly under 2MB to be safe

foreach ($img in $imagesToCompress) {
    $tempPath = Join-Path -Path $img.DirectoryName -ChildPath ("temp_" + $img.Name)
    Write-Host "Compressing image: $($img.Name) ($([math]::Round($img.Length / 1KB, 2)) KB)"
    & $ffmpeg -i $img.FullName -vf "scale='min(1024,iw)':-1" -q:v 5 $tempPath -y
    if (Test-Path $tempPath) {
        Move-Item -Path $tempPath -Destination $img.FullName -Force
    }
}

foreach ($vid in $videosToCompress) {
    $tempPath = Join-Path -Path $vid.DirectoryName -ChildPath ("temp_" + $vid.Name)
    Write-Host "Compressing video: $($vid.Name) ($([math]::Round($vid.Length / 1MB, 2)) MB)"
    & $ffmpeg -i $vid.FullName -vf "scale=-2:480" -vcodec libx264 -crf 28 -preset slow -acodec aac -b:a 64k -fs 1.9M $tempPath -y
    if (Test-Path $tempPath) {
        Move-Item -Path $tempPath -Destination $vid.FullName -Force
    }
}

Write-Host "Compression script finished."
