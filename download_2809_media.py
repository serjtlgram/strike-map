import sys, os, asyncio
from pathlib import Path
from telethon import TelegramClient

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

DOWNLOAD_DIR = BASE_DIR / 'downloads' / '2809'
DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)

targets = [
    # EDELWEISS-95 fuel depot - Novotitarovskaya (Krasnodar Krai) - 28.09.2026
    # Videos of fire in Novotitarovskaya area from exilenova_plus and supernova_plus
    ('exilenova_plus', 31716, 'edelweiss95_krasnodar_2809_vid1'),  # "Кажуть, що горить нафтобаза"
    ('exilenova_plus', 31717, 'edelweiss95_krasnodar_2809_vid2'),  # video
    ('supernova_plus', 60677, 'edelweiss95_krasnodar_2809_vid3'),  # "Краснодар.. Новотитаровка"
    # Photos of fire - Novotitarovskaya
    ('exilenova_plus', 31718, 'edelweiss95_krasnodar_2809_img1'),  # photo
    ('exilenova_plus', 31719, 'edelweiss95_krasnodar_2809_img2'),  # "Кажуть, що це Павлівська нафтобаза"
    ('supernova_plus', 60676, 'edelweiss95_krasnodar_2809_img3'),  # photo Novotitarovka
    # ASTRA posts about Edelweiss fire (from astrapress channel)
    ('astrapress', 126549, 'edelweiss95_krasnodar_2809_img4'),     # photo from astrapress
    
    # PAVLOVSKAYA fuel depot (Lukoil-Yugnefteprodukt)
    ('exilenova_plus', 31719, 'pavlovskaya_krasnodar_2809_img1'),  # "Кажуть, що це Павлівська нафтобаза"
    ('exilenova_plus', 31720, 'pavlovskaya_krasnodar_2809_img2'),  # photo
    
    # Voronezh enterprise attack
    ('supernova_plus', 60680, 'voronezh_plant_2809_img1'),   # "атаковано одне з підприємств"
    ('supernova_plus', 60682, 'voronezh_plant_2809_vid1'),   # video
    ('supernova_plus', 60681, 'voronezh_plant_2809_vid2'),   # video
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
