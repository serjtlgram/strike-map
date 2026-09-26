import sys, os
from pathlib import Path
import asyncio
from telethon import TelegramClient
from datetime import datetime, timezone

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

async def main():
    session_path = str(BASE_DIR / 'userbot_temp')
    client = TelegramClient(session_path, config.API_ID, config.API_HASH)
    await client.connect()

    channels = [
        'exilenova_plus', 'supernova_plus', 'astrapress', 'operativnoZSU',
        'Crimeanwind', 'kiber_boroshno', 'oko_gora', 'GeneralStaffZSU',
        'DIUkraine', 'SBUkr', 'usf_army', 'bazabazon', 'shot_shot', 'mash', 'dnipro_osint', 'combat_ftg',
        'WarZoneInc', 'dosye_shpiona', 'milinfolive', 'readovkanews', 'rybar',
        'insiderUKR', 'uniannet', 'Pravda_Gerashchenko', 'mysiagin_chat'
    ]
    # 25.09.2026 from 00:00 to 24:00 (local MSK/Kyiv is UTC+3, so UTC is 24.09 21:00 to 25.09 21:00)
    # Scan from 24.09 18:00 UTC to 26.09 08:00 UTC
    start_utc = datetime(2026, 9, 24, 18, 0, 0, tzinfo=timezone.utc)
    end_utc = datetime(2026, 9, 26, 8, 0, 0, tzinfo=timezone.utc)

    out_file = BASE_DIR / 'dump_2509.txt'
    with open(out_file, 'w', encoding='utf-8') as f:
        for ch in channels:
            header = f"\n{'='*30} CHANNEL: {ch} {'='*30}\n"
            print(header, flush=True)
            f.write(header)
            try:
                entity = await client.get_entity(ch)
                count = 0
                async for msg in client.iter_messages(entity, limit=3000):
                    if not msg.date:
                        continue
                    if msg.date > end_utc:
                        continue
                    if msg.date < start_utc:
                        break
                    
                    text = msg.text or ''
                    has_photo = bool(msg.photo)
                    has_video = bool(msg.video)
                    doc_mime = getattr(msg.document, 'mime_type', '') if msg.document else ''
                    media_type = []
                    if has_photo: media_type.append('PHOTO')
                    if has_video: media_type.append('VIDEO')
                    if doc_mime: media_type.append(f'DOC({doc_mime})')
                    media_str = ', '.join(media_type) if media_type else 'NO_MEDIA'

                    line = f"[{msg.id}] Date: {msg.date} | Media: {media_str}\n{text}\n{'-'*60}\n"
                    f.write(line)
                    count += 1
                print(f"Dumped {count} messages from {ch}", flush=True)
            except Exception as e:
                err = f"Error scanning {ch}: {e}\n"
                print(err, flush=True)
                f.write(err)

    await client.disconnect()

if __name__ == '__main__':
    asyncio.run(main())
