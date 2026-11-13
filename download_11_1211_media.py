import sys
import os
import asyncio
from pathlib import Path
from telethon import TelegramClient

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

OUT_DIR = BASE_DIR / 'media_11_1211'
OUT_DIR.mkdir(parents=True, exist_ok=True)

TARGETS = {
    'ustluga': [
        ('ASupersharij', [62369, 62370, 62371, 62373, 62374, 62375, 62376, 62377, 62378, 62379]),
        ('exilenova_plus', [34378, 34401, 34436, 34437, 34469, 34538, 34539, 34549]),
        ('supernova_plus', [62813, 62815, 62819, 62834, 62835, 62836, 62909, 62914, 62951, 62952]),
        ('astrapress', [130735, 130741, 130799, 130801, 130813, 130814]),
        ('GeneralStaffZSU', [42872]),
        ('SBUkr', [19036]),
        ('milinfolive', [183061]),
    ],
    'omsk': [
        ('ASupersharij', [62382, 62383, 62384, 62385, 62386, 62388, 62389]),
        ('exilenova_plus', [34442, 34447, 34450, 34452, 34453, 34454, 34455, 34457, 34458]),
        ('supernova_plus', [62847, 62849, 62851, 62852, 62853, 62854, 62855, 62860, 62861, 62864, 62865, 62866, 62868, 62869, 62870]),
        ('astrapress', [130826, 130827]),
        ('Crimeanwind', [112497, 112507, 112509]),
    ],
    'narofominsk': [
        ('exilenova_plus', [34443]),
        ('ssternenko', [65977, 65978]),
        ('Crimeanwind', [112492]),
        ('u_now', [218279, 218280]),
    ],
    'lenradar': [
        ('dosye_shpiona', [816, 817, 818, 819]),
        ('supernova_plus', [62970, 62971, 62972]),
    ],
}

async def main():
    session_path = str(BASE_DIR / 'userbot_temp')
    client = TelegramClient(session_path, config.API_ID, config.API_HASH)
    await client.connect()
    if not await client.is_user_authorized():
        await client.disconnect()
        session_path = str(BASE_DIR / 'userbot_session')
        client = TelegramClient(session_path, config.API_ID, config.API_HASH)
        await client.connect()
        if not await client.is_user_authorized():
            print('ERROR: Not authorized')
            return

    for tag, items in TARGETS.items():
        tag_dir = OUT_DIR / tag
        tag_dir.mkdir(parents=True, exist_ok=True)
        for ch, ids in items:
            try:
                msgs = await client.get_messages(ch, ids=ids)
                for msg in msgs:
                    if not msg or not msg.media:
                        print(f'Skip {ch} #{getattr(msg, "id", "?")} (no media)')
                        continue
                    ext = '.mp4' if msg.video else ('.jpg' if msg.photo else '.bin')
                    fname = f'{ch}_{msg.id}{ext}'
                    fpath = tag_dir / fname
                    if fpath.exists() and fpath.stat().st_size > 0:
                        print(f'Exists {tag}/{fname}')
                        continue
                    await client.download_media(msg, file=str(fpath))
                    print(f'Downloaded {tag}/{fname} ({fpath.stat().st_size} bytes)')
            except Exception as e:
                print(f'Err {ch} {ids}: {e}')

    await client.disconnect()

if __name__ == '__main__':
    asyncio.run(main())
