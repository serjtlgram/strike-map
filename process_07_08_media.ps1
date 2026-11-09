$ffmpeg = ".\ffmpeg.exe"

$videoJobs = @(
    @{ in = "downloads\07_08\saratov_sharij_vid1.mp4"; out = "video\saratov_npz_0711_vid1.mp4" },
    @{ in = "downloads\07_08\saratov_exilenova_vid2.mp4"; out = "video\saratov_npz_0711_vid2.mp4" },
    @{ in = "downloads\07_08\proton_sharij_vid1.mp4"; out = "video\orel_proton_0711_vid1.mp4" },
    @{ in = "downloads\07_08\proton_sharij_vid2.mp4"; out = "video\orel_proton_0711_vid2.mp4" },
    @{ in = "downloads\07_08\mius_sharij_vid1.mp4"; out = "video\mius_bridge_0811_vid1.mp4" },
    @{ in = "downloads\07_08\mius_astrapress_vid2.mp4"; out = "video\mius_bridge_0811_vid2.mp4" }
)

$imageJobs = @(
    @{ in = "downloads\07_08\saratov_sharij_img1.jpg"; out = "images\saratov_npz_0711_img1.jpg" },
    @{ in = "downloads\07_08\saratov_sharij_img2.jpg"; out = "images\saratov_npz_0711_img2.jpg" },
    @{ in = "downloads\07_08\saratov_sharij_img3.jpg"; out = "images\saratov_npz_0711_img3.jpg" },
    @{ in = "downloads\07_08\saratov_astra_img4.jpg"; out = "images\saratov_npz_0711_img4.jpg" },
    @{ in = "downloads\07_08\proton_sharij_img1.jpg"; out = "images\orel_proton_0711_img1.jpg" },
    @{ in = "downloads\07_08\proton_kiber_img2.jpg"; out = "images\orel_proton_0711_img2.jpg" },
    @{ in = "downloads\07_08\proton_astra_img3.jpg"; out = "images\orel_proton_0711_img3.jpg" },
    @{ in = "downloads\07_08\mius_supernova_img1.jpg"; out = "images\mius_bridge_0811_img1.jpg" },
    @{ in = "downloads\07_08\mius_milinfolive_img2.jpg"; out = "images\mius_bridge_0811_img2.jpg" },
    @{ in = "downloads\07_08\mius_crimeanwind_img3.jpg"; out = "images\mius_bridge_0811_img3.jpg" }
)

Write-Host "=== Processing Images ==="
foreach ($j in $imageJobs) {
    Write-Host "Processing $($j.in) -> $($j.out)"
    & $ffmpeg -i $j.in -vf "scale='min(1024,iw)':-1" -q:v 5 $j.out -y
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
