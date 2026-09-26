import sys, os, asyncio
from pathlib import Path
from telethon import TelegramClient

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

DOWNLOAD_DIR = BASE_DIR / 'downloads' / '2509'
DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)

targets = [
    # PERM REFINERY (LUKOIL-PERMNEFTEORGSINTEZ) - 25.09.2026
    ('exilenova_plus', 31651, 'perm_npz_2509_vid1'),
    ('supernova_plus', 60541, 'perm_npz_2509_vid2'),
    ('exilenova_plus', 31611, 'perm_npz_2509_img1'),
    ('exilenova_plus', 31548, 'perm_npz_2509_img2'),
    ('supernova_plus', 60464, 'perm_npz_2509_img3'),
    ('supernova_plus', 60474, 'perm_npz_2509_img4'),

    # ISKRA PLANT (ULYANOVSK) - 25.09.2026
    ('exilenova_plus', 31553, 'iskra_ulyanovsk_2509_vid1'),
    ('supernova_plus', 60537, 'iskra_ulyanovsk_2509_vid2'),
    ('exilenova_plus', 31624, 'iskra_ulyanovsk_2509_img1'),
    ('exilenova_plus', 31615, 'iskra_ulyanovsk_2509_img2'),
    ('supernova_plus', 60495, 'iskra_ulyanovsk_2509_img3'),
    ('exilenova_plus', 31613, 'iskra_ulyanovsk_2509_img4'),

    # VORONEZHSINTEZKAUCHUK (VORONEZH) - 25.09.2026
    ('exilenova_plus', 31617, 'voronezh_kauchuk_2509_vid1'),
    ('supernova_plus', 60502, 'voronezh_kauchuk_2509_vid2'),
    ('exilenova_plus', 31623, 'voronezh_kauchuk_2509_img1'),
    ('supernova_plus', 60503, 'voronezh_kauchuk_2509_img2'),
    ('supernova_plus', 60504, 'voronezh_kauchuk_2509_img3'),

    # NOVOSHAKHTINSK REFINERY (NZNP) - 25.09.2026
    ('exilenova_plus', 31540, 'novoshakht_npz_2509_vid1'),
    ('usf_army', 2486, 'novoshakht_npz_2509_img1'),
    ('exilenova_plus', 31629, 'novoshakht_npz_2509_img2'),
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
