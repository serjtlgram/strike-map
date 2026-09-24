import sys, os, asyncio
from pathlib import Path
from telethon import TelegramClient

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

DOWNLOAD_DIR = BASE_DIR / 'downloads' / '2409'
DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)

targets = [
    # NOVOTITAROVASKA OIL DEPOT (KRASNODAR KRAI) - 24.09.2026
    ('exilenova_plus', 31521, 'novotitarovskaya_oil_depot_img1'),
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
