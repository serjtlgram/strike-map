import sys, os, asyncio
from pathlib import Path
from telethon import TelegramClient

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

DOWNLOAD_DIR = BASE_DIR / 'downloads' / '2410'
DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)

targets = [
    # Tolyatti Kauchuk
    ('ASupersharij', [61642, 61646, 61650, 61659]),
    ('astrapress', [129161, 129165, 129170, 129178]),
    ('supernova_plus', [61885, 61893, 61896, 61912, 61914]),
    ('exilenova_plus', [33316, 33322, 33332, 33347, 33350]),

    # Omsk Kauchuk
    ('ASupersharij', [61668, 61680]),
    ('supernova_plus', [61928, 61931, 61935, 61942, 61946]),
    ('astrapress', [129201, 129203, 129212]),
    ('exilenova_plus', [33360, 33361, 33367, 33377, 33384, 33389]),

    # Omsk Ozon
    ('ASupersharij', [61678]),
    ('supernova_plus', [61936, 61944, 61945, 61949, 61950, 61952, 61953]),
    ('astrapress', [129213, 129215]),
    ('exilenova_plus', [33376, 33378, 33379, 33380, 33385, 33387, 33391, 33393])
]

async def main():
    client = TelegramClient(str(BASE_DIR / 'userbot_temp'), config.API_ID, config.API_HASH)
    await client.connect()
    for ch, ids in targets:
        try:
            entity = await client.get_entity(ch)
            msgs = await client.get_messages(entity, ids=ids)
            for msg in msgs:
                if not msg or not msg.media or not (msg.photo or msg.video):
                    continue
                dur = ''
                if msg.video:
                    for at in msg.video.attributes:
                        if hasattr(at, 'duration'):
                            dur = f' dur={at.duration}s {getattr(at, "w", "")}x{getattr(at, "h", "")}'
                out = await client.download_media(msg, file=str(DOWNLOAD_DIR / f'{ch}_{msg.id}'))
                txt = (msg.text or '').replace('\n', ' ')[:80]
                print(f'OK {ch} {msg.id} {msg.date} -> {os.path.basename(out)} {os.path.getsize(out)}b{dur} | {txt}', flush=True)
        except Exception as e:
            print(f'ERROR {ch} {ids}: {e}', flush=True)
    await client.disconnect()

if __name__ == '__main__':
    asyncio.run(main())
