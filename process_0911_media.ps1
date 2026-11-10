$ffmpeg = ".\ffmpeg.exe"

$videoJobs = @(
    @{ in = "media_raw_0911\kirishi_sharij_vid1.mp4"; out = "video\kirishi_kinef_0911_vid1.mp4" },
    @{ in = "media_raw_0911\kirishi_sharij_vid2.mp4"; out = "video\kirishi_kinef_0911_vid2.mp4" },
    @{ in = "media_raw_0911\morozov_supernova_vid1.mp4"; out = "video\morozov_plant_0911_vid1.mp4" },
    @{ in = "media_raw_0911\morozov_exilenova_vid2.mp4"; out = "video\morozov_plant_0911_vid2.mp4" }
)

$imageJobs = @(
    @{ in = "media_raw_0911\kirishi_sharij_img1.jpg"; out = "images\kirishi_kinef_0911_img1.jpg" },
    @{ in = "media_raw_0911\kirishi_sharij_img2.jpg"; out = "images\kirishi_kinef_0911_img2.jpg" },
    @{ in = "media_raw_0911\kirishi_supernova_img3.jpg"; out = "images\kirishi_kinef_0911_img3.jpg" },
    @{ in = "media_raw_0911\kirishi_exilenova_img4.jpg"; out = "images\kirishi_kinef_0911_img4.jpg" },
    @{ in = "media_raw_0911\morozov_usf_img1.jpg"; out = "images\morozov_plant_0911_img1.jpg" },
    @{ in = "media_raw_0911\morozov_genstaff_img2.jpg"; out = "images\morozov_plant_0911_img2.jpg" },
    @{ in = "media_raw_0911\morozov_exilenova_img3.jpg"; out = "images\morozov_plant_0911_img3.jpg" },
    @{ in = "media_raw_0911\morozov_astra_img4.jpg"; out = "images\morozov_plant_0911_img4.jpg" }
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
