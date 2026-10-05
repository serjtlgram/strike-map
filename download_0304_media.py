import sys, os
from pathlib import Path
import asyncio
from telethon import TelegramClient

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

async def main():
    session_path = str(BASE_DIR / 'userbot_temp')
    client = TelegramClient(session_path, config.API_ID, config.API_HASH)
    await client.connect()

    download_dir = BASE_DIR / 'downloads' / '0304'
    download_dir.mkdir(parents=True, exist_ok=True)

    items = [
        # Kaluga (Voskhod)
        ('supernova_plus', 60864, 'kaluga_sn_60864'),
        ('supernova_plus', 60877, 'kaluga_sn_60877'),
        ('supernova_plus', 60855, 'kaluga_sn_60855'),
        ('supernova_plus', 60856, 'kaluga_sn_60856'),
        ('supernova_plus', 60857, 'kaluga_sn_60857'),
        ('supernova_plus', 60858, 'kaluga_sn_60858'),
        ('supernova_plus', 60863, 'kaluga_sn_60863'),
        ('supernova_plus', 60830, 'kaluga_sn_60830'),
        ('exilenova_plus', 31913, 'kaluga_en_31913'),
        ('exilenova_plus', 31914, 'kaluga_en_31914'),
        ('exilenova_plus', 31915, 'kaluga_en_31915'),
        ('exilenova_plus', 31874, 'kaluga_en_31874'),
        ('exilenova_plus', 31877, 'kaluga_en_31877'),
        # Tsymbulovo
        ('exilenova_plus', 31880, 'tsymbulovo_en_31880'),
        ('exilenova_plus', 31881, 'tsymbulovo_en_31881'),
        ('exilenova_plus', 31882, 'tsymbulovo_en_31882'),
        # Khanskaya Airfield
        ('supernova_plus', 60883, 'khanskaya_sn_60883'),
        ('supernova_plus', 60884, 'khanskaya_sn_60884'),
        ('supernova_plus', 60905, 'khanskaya_sn_60905'),
        ('milinfolive', 180909, 'khanskaya_mil_180909'),
        ('SBUkr', 18735, 'khanskaya_sbu_18735'),
        ('Crimeanwind', 110488, 'khanskaya_cw_110488'),
        ('exilenova_plus', 31932, 'khanskaya_en_31932'),
        ('exilenova_plus', 31933, 'khanskaya_en_31933'),
        ('exilenova_plus', 31934, 'khanskaya_en_31934'),
    ]

    for ch, msg_id, prefix in items:
        try:
            print(f"Fetching {ch} msg {msg_id}...", flush=True)
            msg = await client.get_messages(ch, ids=msg_id)
            if not msg or not msg.media:
                print(f"No media in {ch} {msg_id}", flush=True)
                continue

            ext = '.jpg' if msg.photo else '.mp4'
            if msg.document:
                mime = getattr(msg.document, 'mime_type', '')
                if 'video' in mime: ext = '.mp4'
                elif 'image' in mime: ext = '.jpg'

            out_path = str(download_dir / f"{prefix}{ext}")
            print(f"Downloading to {out_path}...", flush=True)
            await client.download_media(msg, file=out_path)
            print(f"Downloaded: {out_path} ({os.path.getsize(out_path)} bytes)", flush=True)
        except Exception as e:
            print(f"Error downloading {ch} {msg_id}: {e}", flush=True)

    await client.disconnect()

if __name__ == '__main__':
    asyncio.run(main())
