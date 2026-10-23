import sys, os, asyncio
from pathlib import Path
from telethon import TelegramClient

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

DOWNLOAD_DIR = BASE_DIR / 'downloads' / '2210'
DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)

# 75 ARSENAL (SERPUKHOV) - 22.10.2026: candidate id ranges (albums included)
ranges = [
    ('exilenova_plus', 33176, 33181),
    ('supernova_plus', 61758, 61772),
    ('ASupersharij', 61564, 61571),
    ('Crimeanwind', 111408, 111410),
    ('Crimeanwind', 111428, 111430),
    ('operativnoZSU', 224266, 224266),
    ('ssternenko', 65139, 65139),
    ('astrapress', 128950, 128950),
    ('astrapress', 128979, 128979),
    ('u_now', 216090, 216090),
    ('svoboda_radio', 49714, 49714),
]

async def main():
    client = TelegramClient(str(BASE_DIR / 'userbot_temp'), config.API_ID, config.API_HASH)
    await client.connect()
    for ch, a, b in ranges:
        try:
            entity = await client.get_entity(ch)
            msgs = await client.get_messages(entity, ids=list(range(a, b + 1)))
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
                print(f'OK {ch} {msg.id} gid={msg.grouped_id} {msg.date} -> {os.path.basename(out)} {os.path.getsize(out)}b{dur} | {txt}', flush=True)
        except Exception as e:
            print(f'ERROR {ch} {a}-{b}: {e}', flush=True)
    await client.disconnect()

if __name__ == '__main__':
    asyncio.run(main())
