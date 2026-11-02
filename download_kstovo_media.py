import sys, os, asyncio
from pathlib import Path
from telethon import TelegramClient

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

DOWNLOAD_DIR = BASE_DIR / 'downloads' / 'kstovo_0111'
DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)

targets = [
    ('ASupersharij', [61965, 61970, 61977, 61989, 61990]),
    ('supernova_plus', [62304, 62312, 62315, 62359]),
    ('exilenova_plus', [33807, 33849, 33852, 33871]),
    ('astrapress', [129888, 129892, 129897, 129923]),
]

async def main():
    session_path = str(BASE_DIR / 'userbot_temp')
    client = TelegramClient(session_path, config.API_ID, config.API_HASH)
    await client.connect()
    if not await client.is_user_authorized():
        print("Switching to userbot_session...", flush=True)
        await client.disconnect()
        session_path = str(BASE_DIR / 'userbot_session')
        client = TelegramClient(session_path, config.API_ID, config.API_HASH)
        await client.connect()

    for ch, ids in targets:
        try:
            entity = await client.get_entity(ch)
            msgs = await client.get_messages(entity, ids=ids)
            for msg in msgs:
                if not msg or not msg.media or not (msg.photo or msg.video or msg.document):
                    print(f"SKIP {ch} #{getattr(msg, 'id', None)} (no media)", flush=True)
                    continue
                dur = ''
                if msg.video:
                    for at in msg.video.attributes:
                        if hasattr(at, 'duration'):
                            dur = f' dur={at.duration}s {getattr(at, "w", "")}x{getattr(at, "h", "")}'
                out = await client.download_media(msg, file=str(DOWNLOAD_DIR / f'{ch}_{msg.id}'))
                print(f'OK {ch} {msg.id} -> {os.path.basename(out)} ({os.path.getsize(out)} bytes){dur}', flush=True)
        except Exception as e:
            print(f'ERROR {ch} {ids}: {e}', flush=True)

    await client.disconnect()
    print("Download finished!", flush=True)

if __name__ == '__main__':
    asyncio.run(main())
