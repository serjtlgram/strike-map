import sys, os, asyncio
from pathlib import Path
from telethon import TelegramClient

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

DOWNLOAD_DIR = BASE_DIR / 'downloads' / '2109'
DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)

targets = [
    # CYMBULOVO DRONOPORT (ORYOL OBLAST)
    ('exilenova_plus', 31383, 'cymbulovo_2109_img1'),
    ('exilenova_plus', 31384, 'cymbulovo_2109_img2'),
    ('exilenova_plus', 31385, 'cymbulovo_2109_img3'),
    ('exilenova_plus', 31386, 'cymbulovo_2109_img4'),
    ('kiber_boroshno', 13549, 'cymbulovo_2109_alt1'),
    ('kiber_boroshno', 13550, 'cymbulovo_2109_alt2'),

    # UFA BASHNEFT REFINERY (BASHKORTOSTAN)
    ('exilenova_plus', 31366, 'ufa_npz_2109_img1'),
    ('supernova_plus', 60292, 'ufa_npz_2109_img2'),
    ('astrapress', 125821, 'ufa_npz_2109_img3'),
    ('operativnoZSU', 221605, 'ufa_npz_2109_img4'),
    ('Crimeanwind', 109807, 'ufa_npz_2109_alt1'),
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
