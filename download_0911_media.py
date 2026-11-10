import asyncio
import os
from pathlib import Path
from telethon import TelegramClient
import sys

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

MEDIA_DIR = BASE_DIR / 'media_0911'
MEDIA_DIR.mkdir(exist_ok=True)

targets = [
    # --- KIRISHI REFINERY (KINEF) ---
    ('ASupersharij', 62296, 'kirishi_sharij_vid1'),
    ('ASupersharij', 62297, 'kirishi_sharij_vid2'),
    ('exilenova_plus', 34271, 'kirishi_exilenova_vid3'),
    ('exilenova_plus', 34270, 'kirishi_exilenova_vid4'),
    ('ASupersharij', 62298, 'kirishi_sharij_img1'),
    ('ASupersharij', 62299, 'kirishi_sharij_img2'),
    ('supernova_plus', 62734, 'kirishi_supernova_img3'),
    ('exilenova_plus', 34272, 'kirishi_exilenova_img4'),

    # --- ZAVOD IMENI MOROZOVA ---
    ('supernova_plus', 62735, 'morozov_supernova_vid1'),
    ('exilenova_plus', 34265, 'morozov_exilenova_vid2'),
    ('usf_army', 2621, 'morozov_usf_img1'),
    ('GeneralStaffZSU', 42850, 'morozov_genstaff_img2'),
    ('exilenova_plus', 34288, 'morozov_exilenova_img3'),
    ('astrapress', 130624, 'morozov_astra_img4'),
]

async def main():
    session_path = str(BASE_DIR / 'userbot_temp')
    client = TelegramClient(session_path, config.API_ID, config.API_HASH)
    await client.connect()

    if not await client.is_user_authorized():
        session_path = str(BASE_DIR / 'userbot_session')
        client = TelegramClient(session_path, config.API_ID, config.API_HASH)
        await client.connect()

    print("Connected to Telegram.", flush=True)

    for ch, mid, label in targets:
        try:
            entity = await client.get_entity(ch)
            msg = await client.get_messages(entity, ids=mid)
            if not msg:
                print(f"Message {ch} #{mid} not found", flush=True)
                continue
            if msg.media:
                print(f"Downloading {ch} #{mid} ({label})...", flush=True)
                out_path = await client.download_media(msg, file=str(MEDIA_DIR / label))
                print(f"Downloaded to {out_path}", flush=True)
            else:
                print(f"No media in {ch} #{mid}", flush=True)
        except Exception as e:
            print(f"Error downloading {ch} #{mid}: {e}", flush=True)

    await client.disconnect()
    print("All downloads finished!", flush=True)

if __name__ == '__main__':
    asyncio.run(main())
