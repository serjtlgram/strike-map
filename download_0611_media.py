import asyncio
import os
from pathlib import Path
from telethon import TelegramClient
import sys

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

MEDIA_DIR = BASE_DIR / 'media_0611'
MEDIA_DIR.mkdir(exist_ok=True)

targets = [
    # Videos
    ('astrapress', 130354, 'afipsky_astrapress_vid1'),
    ('exilenova_plus', 34142, 'afipsky_exilenova_vid1'),
    ('exilenova_plus', 34138, 'afipsky_exilenova_vid2'),
    ('supernova_plus', 62621, 'afipsky_supernova_vid1'),
    # Photos from Sharij
    ('ASupersharij', 62219, 'afipsky_sharij_img1'),
    ('ASupersharij', 62220, 'afipsky_sharij_img2'),
    ('ASupersharij', 62221, 'afipsky_sharij_img3'),
    ('ASupersharij', 62222, 'afipsky_sharij_img4'),
    ('ASupersharij', 62223, 'afipsky_sharij_img5'),
    ('ASupersharij', 62224, 'afipsky_sharij_img6'),
    # Photos from Astra / Supernova / Exilenova
    ('astrapress', 130349, 'afipsky_astra_img1'),
    ('supernova_plus', 62610, 'afipsky_supernova_img1'),
    ('supernova_plus', 62599, 'afipsky_supernova_img2'),
    ('exilenova_plus', 34137, 'afipsky_exilenova_img1'),
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
