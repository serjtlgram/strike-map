import json
import re
from datetime import datetime, timezone, timedelta

DUMP_PATH = '/home/ubuntu/UserBot/dump_1011.jsonl'
OUT_CANDIDATES = '/home/ubuntu/UserBot/candidates_1011.txt'
OUT_ASTRA = '/home/ubuntu/UserBot/astra_1011.txt'
OUT_SHARIJ = '/home/ubuntu/UserBot/sharij_1011.txt'
OUT_OFFICIAL = '/home/ubuntu/UserBot/official_1011.txt'
OUT_SUMMARY = '/home/ubuntu/UserBot/summary_1011.txt'

KEYWORDS_TARGET = [
    'нпз', 'нефтебаз', 'резервуар', 'завод', 'комбинат', 'фабрик', 'предприяти',
    'аэродром', 'взрыв', 'пожар', 'горит', 'возгоран', 'детонац', 'прилет', 'попадани',
    'гсм', 'топлив', 'цистерн', 'склад', 'бк', 'боеприпас', 'впк', 'шахед', 'дрон', 'бпла',
    'факел', 'промзон', 'терминал', 'газ', 'нефт', 'нефте', 'озон', 'ozon', 'вайлдберриз', 'wildberries',
    'губернатор', 'пво', 'сбит', 'перехвачен', 'атакован', 'удар', 'каспийск', 'флотилия', 'корабл',
    'катер', 'дагестан', 'саратов', 'энгельс', 'порт', 'пирс', 'военн', 'протон', 'алмаз', 'кириш',
    'морозовск', 'борисоглебск', 'сочи', 'москва', 'раменское', 'домодедово', 'жуковский', 'тула',
    'брянск', 'курск', 'белгород', 'воронеж', 'липецк', 'калуга', 'рязань', 'тамбов', 'орёл', 'орел'
]

REGIONS = [
    'воронеж', 'курск', 'белгород', 'брянск', 'ростов', 'тул', 'липецк', 'калуг', 'орел', 'орлов',
    'смоленск', 'твер', 'ярослав', 'владимир', 'рязан', 'нижн', 'новгород', 'самар', 'саратов',
    'волгоград', 'краснодар', 'ставропол', 'адыге', 'тамбов', 'мордови', 'татарстан', 'башкортостан',
    'перм', 'удмурти', 'челябинск', 'уфа', 'ижевск', 'пенз', 'ульяновск', 'псков', 'ленинград',
    'петербург', 'москв', 'подмосков', 'крым', 'севастопол', 'феодоси', 'керч', 'грозн', 'чечн',
    'дагестан', 'каспийск', 'махачкал', 'ахтубинск', 'морозовск', 'ейск', 'энгельс', 'дягилев', 'шайковк',
    'саваслейк', 'борисоглебск', 'миллерово', 'халино', 'торопец', 'карачев', 'котовск', 'алексин',
    'ефремов', 'дзержинск', 'чапаевск', 'стерлитамак', 'салават', 'новошахтинск', 'туапсе', 'афипск',
    'ильск', 'сызран', 'кстов', 'кириш', 'сочи', 'раменск', 'домодедов', 'жуковск', 'люберц', 'коломн'
]

target_pattern = re.compile('|'.join(KEYWORDS_TARGET), re.IGNORECASE)
region_pattern = re.compile('|'.join(REGIONS), re.IGNORECASE)

records = []
with open(DUMP_PATH, 'r', encoding='utf-8') as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        try:
            records.append(json.loads(line))
        except Exception:
            pass

print(f"Loaded {len(records)} messages.")

with open(OUT_ASTRA, 'w', encoding='utf-8') as fa, \
     open(OUT_SHARIJ, 'w', encoding='utf-8') as fs, \
     open(OUT_OFFICIAL, 'w', encoding='utf-8') as fo, \
     open(OUT_CANDIDATES, 'w', encoding='utf-8') as fc, \
     open(OUT_SUMMARY, 'w', encoding='utf-8') as fsum:

    for r in records:
        text = r.get('text', '') or ''
        ch = r.get('channel', '')
        date_iso = r.get('date', '')
        mid = r.get('id', '')
        media = []
        if r.get('photo'): media.append('PHOTO')
        if r.get('video'): media.append(f"VIDEO({r.get('duration')}s)")
        if r.get('doc_mime'): media.append(f"DOC({r.get('doc_mime')})")
        m_str = ', '.join(media) if media else 'NO_MEDIA'

        # Convert date to MSK (UTC+3)
        try:
            dt_utc = datetime.fromisoformat(date_iso)
            dt_msk = dt_utc + timedelta(hours=3)
            msk_str = dt_msk.strftime('%Y-%m-%d %H:%M:%S MSK')
            msk_date = dt_msk.strftime('%Y-%m-%d')
        except Exception:
            msk_str = date_iso
            msk_date = 'unknown'

        entry_header = f"[{ch}] ID: {mid} | Date: {msk_str} | Media: {m_str}\n"

        if ch == 'astrapress':
            fa.write(entry_header + text + "\n" + "-"*50 + "\n")
        elif ch == 'ASupersharij':
            fs.write(entry_header + text + "\n" + "-"*50 + "\n")
        elif ch in ['GeneralStaffZSU', 'DIUkraine', 'SBUkr', 'usf_army', 'kpszsu', 'mod_russia']:
            fo.write(entry_header + text + "\n" + "-"*50 + "\n")

        if target_pattern.search(text) and region_pattern.search(text):
            fc.write(f"[{msk_date}] " + entry_header + text + "\n" + "="*50 + "\n")
            fsum.write(f"[{msk_date}] [{ch}] #{mid} ({msk_str}) [{m_str}]: {text[:160].replace(chr(10), ' ')}\n")

print("Analysis finished! Files written.")
