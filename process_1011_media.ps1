$ffmpeg = ".\ffmpeg.exe"

$videoJobs = @(
    @{ in = "temp_1011\sharij_62334_vid.mp4"; out = "video\staraya_russa_123arz_1011_vid1.mp4" }
)

$imageJobs = @(
    @{ in = "temp_1011\supernova_62758_img.jpg"; out = "images\staraya_russa_123arz_1011_img1.jpg" },
    @{ in = "temp_1011\supernova_62757_img.jpg"; out = "images\staraya_russa_123arz_1011_img2.jpg" },
    @{ in = "temp_1011\sharij_62332_img.jpg"; out = "images\staraya_russa_123arz_1011_img3.jpg" },
    @{ in = "temp_1011\astra_130717_img.jpg"; out = "images\staraya_russa_123arz_1011_img4.jpg" }
)

Write-Host "=== Processing Images ==="
foreach ($j in $imageJobs) {
    Write-Host "Processing $($j.in) -> $($j.out)"
    & $ffmpeg -i $j.in -vf "scale='min(1024,iw)':-1" -q:v 7 $j.out -y
}

Write-Host "`n=== Processing Videos ==="
foreach ($j in $videoJobs) {
    Write-Host "Processing $($j.in) -> $($j.out)"
    & $ffmpeg -i $j.in -vf "scale=-2:480" -vcodec libx264 -crf 28 -preset slow -acodec aac -b:a 64k -fs 1.9M $j.out -y
}

Write-Host "`n=== Checking File Sizes ==="
foreach ($j in $imageJobs) {
    $f = Get-Item $j.out
    Write-Host "$($f.Name): $([math]::Round($f.Length / 1KB, 2)) KB"
}
foreach ($j in $videoJobs) {
    $f = Get-Item $j.out
    Write-Host "$($f.Name): $([math]::Round($f.Length / 1MB, 2)) MB"
}
