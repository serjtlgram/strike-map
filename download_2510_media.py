import sys, os, asyncio
from pathlib import Path
from telethon import TelegramClient

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

DOWNLOAD_DIR = BASE_DIR / 'downloads' / '2510'
DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)

targets = [
    # Yelets Energia
    ('ASupersharij', [61712, 61713, 61714, 61715]),
    ('supernova_plus', [61986, 61987, 61988, 61990, 61991, 61992, 61993, 61994]),
    ('exilenova_plus', [33430, 33431, 33432, 33433, 33437, 33438, 33439, 33440, 33441, 33443]),
    ('astrapress', [129302, 129304, 129320]),

    # Berezniki Avisma
    ('supernova_plus', [61979]),
    ('exilenova_plus', [33425]),
    ('ssternenko', [65264]),
    ('astrapress', [129277])
]

async def main():
    client = TelegramClient(str(BASE_DIR / 'userbot_temp'), config.API_ID, config.API_HASH)
    await client.connect()
    for ch, ids in targets:
        try:
            entity = await client.get_entity(ch)
            msgs = await client.get_messages(entity, ids=ids)
            for msg in msgs:
                if not msg or not msg.media or not (msg.photo or msg.video or msg.document):
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
