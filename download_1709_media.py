import sys, os, asyncio
from pathlib import Path
from telethon import TelegramClient

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

DOWNLOAD_DIR = BASE_DIR / 'downloads' / '1709'
DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)

targets = [
    # YAROSLAVL REFINERY (YANOS)
    ('supernova_plus', 60047, 'yanos_vid1'),
    ('supernova_plus', 60048, 'yanos_img1'),
    ('supernova_plus', 60054, 'yanos_img2'),
    ('supernova_plus', 60064, 'yanos_img3'),
    ('astrapress', 125387, 'yanos_img4'),
    ('astrapress', 125388, 'yanos_img5'),
    ('Crimeanwind', 109621, 'yanos_vid2'),

    # ROSTOV AIRBASE
    ('supernova_plus', 60051, 'rostov_airbase_vid1'),
    ('supernova_plus', 60061, 'rostov_airbase_vid2'),
    ('supernova_plus', 60058, 'rostov_airbase_img1'),
    ('Crimeanwind', 109610, 'rostov_airbase_img2'),
    ('astrapress', 125380, 'rostov_airbase_img3'),
    ('astrapress', 125390, 'rostov_airbase_img4'),
    ('astrapress', 125373, 'rostov_airbase_vid3'),
]

async def main():
    client = TelegramClient(str(BASE_DIR / 'userbot_temp'), config.API_ID, config.API_HASH)
    await client.connect()

    for ch, mid, label in targets:
        try:
            entity = await client.get_entity(ch)
            msg = await client.get_messages(entity, ids=mid)
            if not msg or not msg.media:
                print(f"FAILED (no media): {ch} {mid} ({label})")
                continue
            
            out_prefix = str(DOWNLOAD_DIR / f"{label}")
            out_path = await client.download_media(msg, file=out_prefix)
            if out_path:
                print(f"OK: {ch} {mid} -> {out_path} ({os.path.getsize(out_path)} bytes)")
            else:
                print(f"FAILED (download returned None): {ch} {mid}")
        except Exception as e:
            print(f"ERROR {ch} {mid} ({label}): {e}")

    await client.disconnect()

if __name__ == '__main__':
    asyncio.run(main())
