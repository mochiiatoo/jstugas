import time
import sys

lirik = [
    "Wake up in the morning, everything's alright",
    "At the end of the story, you're holdin' me tight",
    "I don't need to worry, am I out of my mind?",
    "And, oh, it's hard to see you, but I wish you were right",
    "here (I'm losing my mind)",
    "Oh, it's hard to leave you when I get you everywhere",
    "All this time I'm thinking, I'm strong enough to sink it",
    "Oh, no, I don't need you, but I miss you, come here",
]

for baris in lirik:
    for huruf in baris:
        print(huruf, end="", flush=True)
        time.sleep(0.15)  # Menambahkan jeda antar huruf
    print()
    time.sleep(0.15)