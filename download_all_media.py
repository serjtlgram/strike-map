import sys, os, asyncio
from pathlib import Path
from telethon import TelegramClient

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

DOWNLOAD_DIR = BASE_DIR / 'downloads' / '28_31'
DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)

targets = [
    # 1. Novomoskovsk Azot (28.10)
    ('ASupersharij', [61796, 61802]),
    ('supernova_plus', [62116, 62122]),
    ('exilenova_plus', [33574, 33795, 33609]),
    
    # 2. Marinovka Airbase (29.10)
    ('GeneralStaffZSU', [42730]),
    ('milinfolive', [182392]),
    ('kiber_boroshno', [13664]),
    ('exilenova_plus', [33750, 33647]),
    ('supernova_plus', [62173]),

    # 3. Novokuibyshevsk NPZ (30.10)
    ('ASupersharij', [61877]),
    ('supernova_plus', [62184, 62185]),
    ('exilenova_plus', [33697, 33800]),
    ('svoboda_radio', [50003]),
    ('astrapress', [129735]),

    # 4. Bashneft-Novoil Ufa (31.10)
    ('ASupersharij', [61920, 61916]),
    ('exilenova_plus', [33782]),
    ('astrapress', [129821, 129817]),
    ('supernova_plus', [62245, 62246]),

    # 5. Kamensky Combine (31.10)
    ('GeneralStaffZSU', [42744]),
    ('astrapress', [129856]),
    ('WarZoneInc', [128867]),
    ('exilenova_plus', [33784]),
]

async def main():
    client = TelegramClient(str(BASE_DIR / 'userbot_temp'), config.API_ID, config.API_HASH)
    await client.connect()
    if not await client.is_user_authorized():
        print("Switching to userbot_session...", flush=True)
        await client.disconnect()
        client = TelegramClient(str(BASE_DIR / 'userbot_session'), config.API_ID, config.API_HASH)
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
                txt = (msg.text or '').replace('\n', ' ')[:80]
                print(f'OK {ch} {msg.id} -> {os.path.basename(out)} ({os.path.getsize(out)} bytes){dur}', flush=True)
        except Exception as e:
            print(f'ERROR {ch} {ids}: {e}', flush=True)
    await client.disconnect()
    print("Download finished!", flush=True)

if __name__ == '__main__':
    asyncio.run(main())
