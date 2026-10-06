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

    out_dir = BASE_DIR / 'downloads' / '0610'
    out_dir.mkdir(parents=True, exist_ok=True)

    items_to_download = [
        # Sochi Tanker AFRAMAX RIO
        ('exilenova_plus', 32077, 'sochi_vid_32077.mp4'),
        ('exilenova_plus', 32072, 'sochi_vid_32072.mp4'),
        ('exilenova_plus', 32063, 'sochi_vid_32063.mp4'),
        ('exilenova_plus', 32068, 'sochi_vid_32068.mp4'),
        ('supernova_plus', 60963, 'sochi_vid_sn60963.mp4'),
        ('supernova_plus', 60966, 'sochi_vid_sn60966.mp4'),
        ('supernova_plus', 60978, 'sochi_vid_sn60978.mp4'),
        ('supernova_plus', 60979, 'sochi_vid_sn60979.mp4'),
        ('Crimeanwind', 110627, 'sochi_vid_cw110627.mp4'),
        ('Crimeanwind', 110629, 'sochi_vid_cw110629.mp4'),
        
        ('exilenova_plus', 32065, 'sochi_img_32065.jpg'),
        ('exilenova_plus', 32066, 'sochi_img_32066.jpg'),
        ('exilenova_plus', 32067, 'sochi_img_32067.jpg'),
        ('exilenova_plus', 32073, 'sochi_img_32073.jpg'),
        ('exilenova_plus', 32074, 'sochi_img_32074.jpg'),
        ('supernova_plus', 60964, 'sochi_img_sn60964.jpg'),
        ('supernova_plus', 60974, 'sochi_img_sn60974.jpg'),
        ('supernova_plus', 60976, 'sochi_img_sn60976.jpg'),
        ('Crimeanwind', 110630, 'sochi_img_cw110630.jpg'),
        ('Crimeanwind', 110639, 'sochi_img_cw110639.jpg'),
        ('Crimeanwind', 110645, 'sochi_img_cw110645.jpg'),
    ]

    for ch, msg_id, fname in items_to_download:
        save_path = out_dir / fname
        if save_path.exists() and save_path.stat().st_size > 0:
            print(f"Already exists: {fname} ({save_path.stat().st_size} bytes)")
            continue
        try:
            entity = await client.get_entity(ch)
            msg = await client.get_messages(entity, ids=msg_id)
            if msg and (msg.media or msg.photo or msg.video or msg.document):
                print(f"Downloading {ch} [{msg_id}] -> {fname}...")
                await client.download_media(msg, file=str(save_path))
                print(f"Downloaded {fname}: {save_path.stat().st_size if save_path.exists() else 0} bytes")
            else:
                print(f"No media found for {ch} [{msg_id}]")
        except Exception as e:
            print(f"Error downloading {ch} [{msg_id}]: {e}")

    await client.disconnect()

if __name__ == '__main__':
    asyncio.run(main())
