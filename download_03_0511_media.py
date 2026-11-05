import sys, os, asyncio
from pathlib import Path
from telethon import TelegramClient

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

DOWNLOAD_DIR = BASE_DIR / 'downloads' / 'nov03_05'
DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)

targets = [
    # 03.11.2026 - Ярославский НПЗ
    ('ASupersharij', [62073, 62093]),
    ('astrapress', [130061, 130066]),
    ('exilenova_plus', [33951, 33956, 33958, 33960, 33962]),
    ('supernova_plus', [62573]),

    # 04.11.2026 - Ozon Адыгейск
    ('ASupersharij', [62130]),
    ('astrapress', [130186, 130199]),
    ('supernova_plus', [62482, 62484]),
    ('exilenova_plus', [34028, 34034]),

    # 05.11.2026 - Рязанский НПЗ & Wildberries
    ('astrapress', [130254, 130255, 130256, 130257, 130260]),
    ('exilenova_plus', [34057, 34064, 34065, 34067, 34070, 34071, 34100, 34108]),
    ('supernova_plus', [62529, 62534, 62565]),
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
                if not msg or not msg.media:
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
