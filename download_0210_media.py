import sys, os, asyncio
from pathlib import Path
from telethon import TelegramClient

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

DOWNLOAD_DIR = BASE_DIR / 'downloads' / '0210'
DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)

targets = [
    # Samara LPDS
    ('supernova_plus', 60811, 'samara_sn_60811'),
    ('supernova_plus', 60812, 'samara_sn_60812'),
    ('supernova_plus', 60813, 'samara_sn_60813'),
    ('supernova_plus', 60814, 'samara_sn_60814'),
    ('supernova_plus', 60824, 'samara_sn_60824'),
    ('supernova_plus', 60825, 'samara_sn_60825'),
    ('exilenova_plus', 31835, 'samara_en_31835'),
    ('exilenova_plus', 31836, 'samara_en_31836'),
    ('exilenova_plus', 31837, 'samara_en_31837'),
    ('exilenova_plus', 31838, 'samara_en_31838'),
    ('exilenova_plus', 31850, 'samara_en_31850'),
    ('exilenova_plus', 31851, 'samara_en_31851'),
    ('exilenova_plus', 31859, 'samara_en_31859'),
    ('astrapress', 126897, 'samara_astra_126897'),
    ('astrapress', 126969, 'samara_astra_126969'),

    # Volgograd Refinery
    ('supernova_plus', 60809, 'volgograd_sn_60809'),
    ('supernova_plus', 60815, 'volgograd_sn_60815'),
    ('supernova_plus', 60816, 'volgograd_sn_60816'),
    ('astrapress', 126888, 'volgograd_astra_126888'),
    ('astrapress', 126893, 'volgograd_astra_126893'),
    ('operativnoZSU', 222570, 'volgograd_oper_222570'),
    ('Crimeanwind', 110376, 'volgograd_cw_110376'),
    ('Crimeanwind', 110391, 'volgograd_cw_110391'),
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
