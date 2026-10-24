import sys, os, asyncio
from pathlib import Path
from telethon import TelegramClient

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

DOWNLOAD_DIR = BASE_DIR / 'downloads' / '2310'
DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)

targets = [
    # Orel Proton
    ('ASupersharij', [61634]),
    ('supernova_plus', [61852, 61855, 61857, 61866, 61868, 61871]),
    ('exilenova_plus', [33260, 33268, 33271, 33297]),
    ('astrapress', [129125, 129140]),
    
    # Berezniki Azot
    ('ASupersharij', [61593, 61594, 61595, 61596, 61597, 61598, 61599]),
    ('supernova_plus', [61799, 61800, 61808, 61809]),
    ('exilenova_plus', [33217, 33230]),
    ('Crimeanwind', [111465]),
    ('astrapress', [129068, 129085]),
    
    # Luhansk Marshal
    ('supernova_plus', [61780, 61821]),
    ('exilenova_plus', [33202, 33234, 33238]),
    ('ssternenko', [65196])
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
