import sys, os, asyncio
from pathlib import Path
from telethon import TelegramClient

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

DOWNLOAD_DIR = BASE_DIR / 'downloads' / '1809'
DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)

targets = [
    # ROSTOV AIRBASE (night 18.09)
    ('supernova_plus', 60087, 'rostov_1809_vid1'),
    ('supernova_plus', 60088, 'rostov_1809_vid2'),
    ('supernova_plus', 60090, 'rostov_1809_img1'),
    ('exilenova_plus', 31110, 'rostov_1809_img2'),
    ('kiber_boroshno', 13512, 'rostov_1809_img3'),
    ('kiber_boroshno', 13513, 'rostov_1809_img4'),

    # YEYSK AIRBASE (morning 18.09)
    ('Crimeanwind', 109667, 'yeysk_1809_img1'),
    ('oko_gora', 20621, 'yeysk_1809_img2'),
    ('oko_gora', 20622, 'yeysk_1809_img3'),

    # SAKI AIRBASE (Orion ground station, 18.09)
    ('Crimeanwind', 109685, 'saki_1809_img1'),
    ('GeneralStaffZSU', 42286, 'saki_1809_img2'),
    ('operativnoZSU', 221413, 'saki_1809_img3')
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
