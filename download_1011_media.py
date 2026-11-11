import asyncio
import os
from pathlib import Path
from telethon import TelegramClient
import sys

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

MEDIA_DIR = BASE_DIR / 'media_1011'
MEDIA_DIR.mkdir(exist_ok=True)

targets = [
    # ASupersharij
    ('ASupersharij', 62332, 'sharij_62332_img'),
    ('ASupersharij', 62333, 'sharij_62333_img'),
    ('ASupersharij', 62334, 'sharij_62334_vid'),

    # exilenova_plus
    ('exilenova_plus', 34330, 'exilenova_34330_vid'),
    ('exilenova_plus', 34331, 'exilenova_34331_img'),
    ('exilenova_plus', 34332, 'exilenova_34332_img'),

    # supernova_plus
    ('supernova_plus', 62757, 'supernova_62757_img'),
    ('supernova_plus', 62758, 'supernova_62758_img'),
    ('supernova_plus', 62759, 'supernova_62759_vid'),
    ('supernova_plus', 62760, 'supernova_62760_img'),
    ('supernova_plus', 62761, 'supernova_62761_img'),

    # Crimeanwind
    ('Crimeanwind', 112404, 'crimeanwind_112404_img'),
    ('Crimeanwind', 112405, 'crimeanwind_112405_img'),
    ('Crimeanwind', 112406, 'crimeanwind_112406_vid'),

    # GeneralStaffZSU & astrapress
    ('GeneralStaffZSU', 42858, 'genstaff_42858_img'),
    ('astrapress', 130717, 'astra_130717_img'),
    ('astrapress', 130674, 'astra_130674_img')
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
