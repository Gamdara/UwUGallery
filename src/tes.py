from os import listdir
from os.path import isfile, join
import os 
import json

b = os.listdir("src/assets/UwU")
for image in b:
    f = open("src/data.txt", "a")
    f.write('img/'+image+' ')
    f.close()
