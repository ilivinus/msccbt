#Using Google Text to Speech which in based on Google Cloud.
from gtts import gTTS
from io import BytesIO

import sys
import json

mytext = sys.argv[1]
#   sys.argv[1]
#   sys.argv[2]

json_obj = json.loads(sys.argv[2])
options = ""
for key,value in json_obj.items():
    options += ". {0} : {1} ".format(key,value)
mytext += options

language = 'en'

tts = gTTS(text=mytext, lang=language, slow=False)
mp3_fp = BytesIO()

tts.write_to_fp(mp3_fp)
mp3_fp.seek(0)

from mpg123 import Mpg123, Out123

mp3 = Mpg123()
mp3.feed(mp3_fp.read())

out = Out123()

for frame in mp3.iter_frames(out.start):
    out.play(frame)

