import sys, os, asyncio
from pathlib import Path
from telethon import TelegramClient

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

DOWNLOAD_DIR = BASE_DIR / 'downloads' / '1909'
DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)

targets = [
    # KASPIYSK (night / morning 19.09)
    ('supernova_plus', 60113, 'kaspiysk_1909_vid1'),
    ('supernova_plus', 60114, 'kaspiysk_1909_vid2'),
    ('exilenova_plus', 31140, 'kaspiysk_1909_vid3'),
    ('Crimeanwind', 109704, 'kaspiysk_1909_vid4'),
    ('astrapress', 125616, 'kaspiysk_1909_vid5'),

    # BELBEK / SEVASTOPOL AIRBASE (19.09)
    ('Crimeanwind', 109730, 'belbek_1909_img1'),
    ('Crimeanwind', 109731, 'belbek_1909_img2'),
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
