$ErrorActionPreference = 'Stop'

$images = @(
    @{ in = "temp_11_1211\ustluga\supernova_plus_62836.jpg";    out = "images\ustluga_1111_img1.jpg" },
    @{ in = "temp_11_1211\ustluga\astrapress_130799.jpg";       out = "images\ustluga_1111_img2.jpg" },
    @{ in = "temp_11_1211\narofominsk\u_now_218280.jpg";        out = "images\ustluga_1111_img3.jpg" },
    @{ in = "temp_11_1211\omsk\supernova_plus_62865.jpg";       out = "images\omsk_1111_img1.jpg" },
    @{ in = "temp_11_1211\omsk\supernova_plus_62853.jpg";       out = "images\omsk_1111_img2.jpg" },
    @{ in = "temp_11_1211\omsk\supernova_plus_62869.jpg";       out = "images\omsk_1111_img3.jpg" },
    @{ in = "temp_11_1211\narofominsk\ssternenko_65977.jpg";    out = "images\narofominsk_1111_img1.jpg" },
    @{ in = "temp_11_1211\narofominsk\ssternenko_65978.jpg";    out = "images\narofominsk_1111_img2.jpg" },
    @{ in = "temp_11_1211\lenradar\supernova_plus_62972.jpg";   out = "images\lenradar_1111_img1.jpg" },
    @{ in = "temp_11_1211\lenradar\supernova_plus_62971.jpg";   out = "images\lenradar_1111_img2.jpg" },
    @{ in = "temp_11_1211\lenradar\supernova_plus_62970.jpg";   out = "images\lenradar_1111_img3.jpg" }
)

foreach ($j in $images) {
    $q = 5
    do {
        & .\ffmpeg.exe -v error -i $j.in -vf "scale='min(1024,iw)':-1" -q:v $q $j.out -y
        $sz = (Get-Item $j.out).Length
        $q++
    } while ($sz -ge 100KB -and $q -le 12)
    "{0,-34} q={1}  {2,6:N1} KB" -f $j.out, ($q - 1), ($sz / 1KB)
}

$videos = @(
    @{ in = "temp_11_1211\ustluga\exilenova_plus_34538.mp4";    out = "video\ustluga_1111_vid1.mp4" },
    @{ in = "temp_11_1211\ustluga\exilenova_plus_34539.mp4";    out = "video\ustluga_1111_vid2.mp4" },
    @{ in = "temp_11_1211\omsk\Crimeanwind_112497.mp4";         out = "video\omsk_1111_vid1.mp4" },
    @{ in = "temp_11_1211\omsk\supernova_plus_62870.mp4";       out = "video\omsk_1111_vid2.mp4" }
)

foreach ($v in $videos) {
    & .\ffmpeg.exe -v error -i $v.in -vf "scale=-2:480" -vcodec libx264 -crf 28 -preset slow -acodec aac -b:a 64k -movflags +faststart -fs 1.9M $v.out -y
    $ErrorActionPreference = 'Continue'
    $info = (& .\ffmpeg.exe -i $v.out 2>&1) -join "`n"
    $ErrorActionPreference = 'Stop'
    $dur = if ($info -match 'Duration:\s*([0-9:.]+)') { $matches[1] } else { '?' }
    $res = if ($info -match 'Video:.*?,\s*(\d{2,4}x\d{2,4})') { $matches[1] } else { '?' }
    "{0,-34} dur={1}  res={2}  {3,7:N1} KB" -f $v.out, $dur, $res, ((Get-Item $v.out).Length / 1KB)
}
