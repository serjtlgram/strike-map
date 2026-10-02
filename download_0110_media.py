import sys, os, asyncio
from pathlib import Path
from telethon import TelegramClient

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

DOWNLOAD_DIR = BASE_DIR / 'downloads' / '0110'
DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)

targets = [
    # Krasnozavodsk Chemical Plant - 01.10.2026
    ('supernova_plus', 60784, 'krasnozavodsk_sn_60784'),
    ('supernova_plus', 60785, 'krasnozavodsk_sn_60785'),
    ('supernova_plus', 60786, 'krasnozavodsk_sn_60786'),
    ('supernova_plus', 60787, 'krasnozavodsk_sn_60787'),
    ('supernova_plus', 60796, 'krasnozavodsk_sn_60796'),
    ('supernova_plus', 60797, 'krasnozavodsk_sn_60797'),
    ('supernova_plus', 60798, 'krasnozavodsk_sn_60798'),
    ('supernova_plus', 60799, 'krasnozavodsk_sn_60799'),
    ('supernova_plus', 60800, 'krasnozavodsk_sn_60800'),
    ('supernova_plus', 60801, 'krasnozavodsk_sn_60801'),
    ('supernova_plus', 60802, 'krasnozavodsk_sn_60802'),
    ('exilenova_plus', 31807, 'krasnozavodsk_en_31807'),
    ('exilenova_plus', 31809, 'krasnozavodsk_en_31809'),
    ('exilenova_plus', 31811, 'krasnozavodsk_en_31811'),
    ('exilenova_plus', 31812, 'krasnozavodsk_en_31812'),
    ('exilenova_plus', 31813, 'krasnozavodsk_en_31813'),
    ('exilenova_plus', 31814, 'krasnozavodsk_en_31814'),
    ('exilenova_plus', 31816, 'krasnozavodsk_en_31816'),
    ('exilenova_plus', 31819, 'krasnozavodsk_en_31819'),
    ('exilenova_plus', 31821, 'krasnozavodsk_en_31821'),
    ('exilenova_plus', 31824, 'krasnozavodsk_en_31824'),
    ('exilenova_plus', 31825, 'krasnozavodsk_en_31825'),
    ('shot_shot', 100624, 'krasnozavodsk_shot_100624'),
    ('shot_shot', 100625, 'krasnozavodsk_shot_100625'),
]

async def main():
    client = TelegramClient(str(BASE_DIR / 'userbot_temp'), config.API_ID, config.API_HASH)
    await client.connect()

    for ch, mid, label in targets:
        try:
            entity = await client.get_entity(ch)
            msg = await client.get_messages(entity, ids=mid)
            if not msg or not msg.media:
                print(f"FAILED (no media): {ch} {mid} ({label})", flush=True)
                continue
            
            out_prefix = str(DOWNLOAD_DIR / f"{label}")
            out_path = await client.download_media(msg, file=out_prefix)
            if out_path:
                print(f"OK: {ch} {mid} -> {out_path} ({os.path.getsize(out_path)} bytes)", flush=True)
            else:
                print(f"FAILED (download returned None): {ch} {mid}", flush=True)
        except Exception as e:
            print(f"ERROR {ch} {mid} ({label}): {e}", flush=True)

    await client.disconnect()

if __name__ == '__main__':
    asyncio.run(main())
