from pathlib import Path
import subprocess
import sys

out_dir = Path(r'c:\portfolio\public\projects')
out_dir.mkdir(parents=True, exist_ok=True)

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', '--user', 'pillow'])
    from PIL import Image, ImageDraw, ImageFont

projects = [
    ('ai-email-agent', 'AI Email Agent'),
    ('studymate', 'StudyMate'),
    ('fingerprint', 'Fingerprint'),
    ('yolo', 'YOLO'),
    ('diabetes', 'Diabetes'),
]

for slug, title in projects:
    img = Image.new('RGB', (1200, 800), (15, 23, 42))
    draw = ImageDraw.Draw(img)

    # Background accents
    for i, color in enumerate([(56, 189, 248), (129, 140, 248), (34, 197, 94), (248, 113, 113)]):
        draw.rounded_rectangle((80 + i * 250, 120, 320 + i * 250, 680), radius=40, fill=color)

    try:
        title_font = ImageFont.truetype('arial.ttf', 70)
        subtitle_font = ImageFont.truetype('arial.ttf', 36)
    except Exception:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()

    draw.text((120, 80), title, fill='white', font=title_font)
    draw.text((120, 180), 'Portfolio Project Preview', fill=(203, 213, 225), font=subtitle_font)

    img.save(out_dir / f'{slug}.webp', 'WEBP', quality=90)
    print(f'created {slug}.webp')
