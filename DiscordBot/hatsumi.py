import random
import os
import discord
import json
from dotenv import load_dotenv

url = "static\Alphabet.json".lower()

AlphabetData = open(url, encoding="utf8")
Kanji = json.load(AlphabetData)['Kanji']

Configdata = open('DiscordBot\Config.json')
token = json.load(Configdata)['BOT_TOKEN']

client = discord.Client()
PREFIX = "!"

@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')
    
@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content == PREFIX + 'KanjiN5':
        kanjilist = Kanji['N5']
        rand = random.choice(list(kanjilist))
        response = rand,kanjilist[rand]
        await message.channel.send(response)

    if message.content == PREFIX + 'KanjiN4':
        kanjilist = Kanji['N4']
        rand = random.choice(list(kanjilist))
        response = rand,kanjilist[rand]
        await message.channel.send(response)
    
    if message.content == PREFIX + 'KanjiN3':
        kanjilist = Kanji['N3']
        rand = random.choice(list(kanjilist))
        response = rand,kanjilist[rand]
        await message.channel.send(response)
    
    if message.content == PREFIX + 'KanjiN2':
        kanjilist = Kanji['N2']
        rand = random.choice(list(kanjilist))
        response = rand,kanjilist[rand]
        await message.channel.send(response)

    if message.content == PREFIX + 'KanjiN1':
        kanjilist = Kanji['N1']
        rand = random.choice(list(kanjilist))
        response = rand,kanjilist[rand]
        await message.channel.send(response)


client.run(token)