import sys, os, asyncio
from pathlib import Path
from telethon import TelegramClient

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

DOWNLOAD_DIR = BASE_DIR / 'downloads' / '2009'
DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)

targets = [
    # MOSCOW REFINERY (KAPOTNYA)
    ('supernova_plus', 60272, 'moscow_npz_2009_vid1'),
    ('supernova_plus', 60242, 'moscow_npz_2009_vid2'),
    ('exilenova_plus', 31317, 'moscow_npz_2009_vid3'),
    ('exilenova_plus', 31320, 'moscow_npz_2009_img1'),
    ('supernova_plus', 60274, 'moscow_npz_2009_img2'),
    ('supernova_plus', 60179, 'moscow_npz_2009_img3'),
    ('supernova_plus', 60166, 'moscow_npz_2009_img4'),

    # SOFINO WAREHOUSE (RAMENSKOYE / OZON)
    ('supernova_plus', 60275, 'sofino_2009_vid1'),
    ('supernova_plus', 60143, 'sofino_2009_vid2'),
    ('exilenova_plus', 31311, 'sofino_2009_vid3'),
    ('exilenova_plus', 31194, 'sofino_2009_img1'),
    ('supernova_plus', 60141, 'sofino_2009_img2'),
    ('Crimeanwind', 109774, 'sofino_2009_img3'),
    ('astrapress', 125683, 'sofino_2009_img4'),
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
