import sys, os, asyncio
from pathlib import Path
from telethon import TelegramClient

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

DOWNLOAD_DIR = BASE_DIR / 'downloads' / '2209'
DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)

targets = [
    # KUIBYSHEV REFINERY (SAMARA)
    ('exilenova_plus', 31479, 'kuibyshev_npz_vid1'),     # Official Fire Point FP-1 strike confirmation video
    ('supernova_plus', 60321, 'kuibyshev_npz_vid2'),     # Night strike explosion & fire video
    ('astrapress', 125900, 'kuibyshev_npz_vid3'),        # Daytime / close-up fire video
    ('exilenova_plus', 31424, 'kuibyshev_npz_vid4'),     # Strike moment & fire
    ('supernova_plus', 60334, 'kuibyshev_npz_img1'),     # AVT-4 & AVT-5 satellite / geolocated photo
    ('astrapress', 125896, 'kuibyshev_npz_img2'),        # Astra OSINT night fire photo
    ('exilenova_plus', 31422, 'kuibyshev_npz_img3'),     # AVT-5 burning close-up photo
    ('supernova_plus', 60314, 'kuibyshev_npz_img4'),     # High column fire photo
    ('astrapress', 125901, 'kuibyshev_npz_img5'),        # Morning smoke plume over Samara
    ('exilenova_plus', 31441, 'kuibyshev_npz_img6'),     # Morning view

    # TOLYATTIKAUCHUK (TOLYATTI)
    ('supernova_plus', 60308, 'tolyatti_kauchuk_vid1'),  # Direct hit / strike on Kauchuk video
    ('exilenova_plus', 31389, 'tolyatti_kauchuk_vid2'),  # Air defense & explosions over Tolyatti video
    ('supernova_plus', 60305, 'tolyatti_kauchuk_vid3'),  # Air defense / night sky video
    ('exilenova_plus', 31391, 'tolyatti_kauchuk_vid4'),  # Explosion / arrival video
    ('supernova_plus', 60309, 'tolyatti_kauchuk_img1'),  # Still / photo from arrival
    ('supernova_plus', 60310, 'tolyatti_kauchuk_img2'),  # Still / photo
    ('exilenova_plus', 31392, 'tolyatti_kauchuk_img3'),  # Photo / video
    ('exilenova_plus', 31393, 'tolyatti_kauchuk_img4'),  # Photo / video
]

async def main():
    client = TelegramClient(str(BASE_DIR / 'userbot_temp'), config.API_ID, config.API_HASH)
    await client.connect()

    for ch, mid, label in targets:
        try:
            entity = await client.get_entity(ch)
            msg = await client.get_messages(entity, ids=mid)
            if not msg or not msg.media:
                print(f"FAILED (no media): {ch} {mid} ({label})", flush=True)
                continue
            
            out_prefix = str(DOWNLOAD_DIR / f"{label}")
            out_path = await client.download_media(msg, file=out_prefix)
            if out_path:
                print(f"OK: {ch} {mid} -> {out_path} ({os.path.getsize(out_path)} bytes)", flush=True)
            else:
                print(f"FAILED (download returned None): {ch} {mid}", flush=True)
        except Exception as e:
            print(f"ERROR {ch} {mid} ({label}): {e}", flush=True)

    await client.disconnect()

if __name__ == '__main__':
    asyncio.run(main())
