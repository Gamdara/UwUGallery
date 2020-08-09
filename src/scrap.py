from os import listdir
from os.path import isfile, join
import os 
import json

dir = []
count = 0
b = os.listdir("d:/kalpika/uwugal/src/assets/UwU")
for image in b:
    dir.append({
        'id' : count,
        'src' : image
    })
    count += 1

f = open("d:/kalpika/uwugal/src/data.json", "w")
f.write(json.dumps(dir, indent=1))
f.close()

print(dir)
