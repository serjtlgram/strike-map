import sys, os
from pathlib import Path
import asyncio
from telethon import TelegramClient
from datetime import datetime, timezone
import json

BASE_DIR = Path('/home/ubuntu/UserBot')
sys.path.insert(0, str(BASE_DIR))
import config

async def main():
    session_path = str(BASE_DIR / 'userbot_temp')
    client = TelegramClient(session_path, config.API_ID, config.API_HASH)
    await client.connect()

    channels = [
        'exilenova_plus', 'supernova_plus', 'ASupersharij', 'astrapress', 'GeneralStaffZSU',
        'DIUkraine', 'SBUkr', 'usf_army', 'bazabazon', 'mash', 'combat_ftg',
        'WarZoneInc', 'milinfolive', 'readovkanews', 'rybar', 'insiderUKR',
        'kpszsu', 'u_now', 'operativnoZSU', 'ssternenko', 'dosye_shpiona',
        'Crimeanwind', 'shot_shot', 'horizontal_russia', 'agentstvonews',
        'motolkohelp', 'svoboda_radio', 'dnipro_osint', 'mod_russia',
        'rian_ru', 'tass_agency'
    ]

    start_utc = datetime(2026, 10, 25, 20, 0, 0, tzinfo=timezone.utc)
    end_utc = datetime(2026, 10, 28, 17, 0, 0, tzinfo=timezone.utc)

    out_file = BASE_DIR / 'dump_26_27.jsonl'
    txt_file = BASE_DIR / 'dump_26_27.txt'

    print(f"Scanning from {start_utc} to {end_utc}...", flush=True)

    with open(out_file, 'w', encoding='utf-8') as fj, open(txt_file, 'w', encoding='utf-8') as ft:
        for ch in channels:
            print(f"Scanning channel: {ch}...", flush=True)
            ft.write(f"\n{'='*30} CHANNEL: {ch} {'='*30}\n")
            try:
                entity = await client.get_entity(ch)
                count = 0
                async for msg in client.iter_messages(entity, limit=4000):
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
                    dur = 0
                    w = 0
                    h = 0
                    if msg.video:
                        for at in msg.video.attributes:
                            if hasattr(at, 'duration'):
                                dur = at.duration
                                w = getattr(at, 'w', 0)
                                h = getattr(at, 'h', 0)

                    record = {
                        "channel": ch,
                        "id": msg.id,
                        "date": msg.date.isoformat(),
                        "text": text,
                        "photo": has_photo,
                        "video": has_video,
                        "doc_mime": doc_mime,
                        "duration": dur,
                        "width": w,
                        "height": h,
                        "grouped_id": msg.grouped_id
                    }
                    fj.write(json.dumps(record, ensure_ascii=False) + '\n')

                    media_info = []
                    if has_photo: media_info.append('PHOTO')
                    if has_video: media_info.append(f'VIDEO({dur}s {w}x{h})')
                    if doc_mime: media_info.append(f'DOC({doc_mime})')
                    m_str = ', '.join(media_info) if media_info else 'NO_MEDIA'

                    ft.write(f"[{msg.id}] Date: {msg.date} | Media: {m_str}\n{text}\n{'-'*60}\n")
                    count += 1
                print(f"Dumped {count} messages from {ch}", flush=True)
            except Exception as e:
                err = f"Error scanning {ch}: {e}\n"
                print(err, flush=True)
                ft.write(err)

    await client.disconnect()
    print("Scan completed successfully!", flush=True)

if __name__ == '__main__':
    asyncio.run(main())
