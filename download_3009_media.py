import sys, os, asyncio
from pathlib import Path
from telethon import TelegramClient

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

DOWNLOAD_DIR = BASE_DIR / 'downloads' / '3009'
DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)

targets = [
    # Perm drone attack - 30.09.2026
    ('supernova_plus', 60741, 'perm_3009_img1'),
    ('supernova_plus', 60742, 'perm_3009_vid1'),
    ('supernova_plus', 60743, 'perm_3009_vid2'),
    
    # Kaspiysk port explosion - 30.09.2026
    ('supernova_plus', 60763, 'kaspiysk_3009_img1'),
    
    # Arabat spit / Genichesk BC detonation - 30.09.2026
    ('supernova_plus', 60751, 'arabat_genichesk_3009_vid1'),
    ('supernova_plus', 60752, 'arabat_genichesk_3009_vid2'),
    ('supernova_plus', 60753, 'arabat_genichesk_3009_img1'),
    ('Crimeanwind', 110270, 'arabat_genichesk_3009_img2'),
    ('Crimeanwind', 110271, 'arabat_genichesk_3009_img3'),
    
    # General Staff summary photo
    ('GeneralStaffZSU', 42437, 'genstaff_3009_img1'),
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
