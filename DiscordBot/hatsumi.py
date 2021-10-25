import random
import os
import discord
import json
import requests
from discord import channel
from discord.embeds import Embed
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
    activity = discord.Game(name="Being a weeb!")
    await client.change_presence(status=discord.Status.online, activity=activity)
    
@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content == PREFIX + 'KanjiN5':#Start of kanji section
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

    if message.content == PREFIX + 'KanjiN1':#End of kanji section
        kanjilist = Kanji['N1']
        rand = random.choice(list(kanjilist))
        response = rand,kanjilist[rand]
        await message.channel.send(response)

    if message.content == PREFIX + 'Help':#Help Command
        embed = discord.Embed(
            title="Help",
            description="Commands help",
            color=discord.Color.blue(),
        )
        Embed.set_footer(self=embed,text='Nihongo.net')
        Embed.add_field(self=embed,name='KanjiN5',value='- Random Kanji from N5',inline=True),
        Embed.add_field(self=embed,name='KanjiN4',value='- Random Kanji from N4',inline=True),
        Embed.add_field(self=embed,name='KanjiN3',value='- Random Kanji from N3',inline=True),
        Embed.add_field(self=embed,name='KanjiN2',value='- Random Kanji from N2',inline=True),
        Embed.add_field(self=embed,name='KanjiN1',value='- Random Kanji from N1',inline=True),
        Embed.add_field(self=embed,name='meme',value='- Random Meme',inline=True),
        await message.channel.send(embed=embed)

    if message.content == PREFIX + "meme":#Meme Command
        response = requests.get("https://meme-api.herokuapp.com/gimme")
        data = response.json()
        embed = discord.Embed(
            title="Meme",
            description="Random Meme",
            color=discord.Color.red(),
            
        )
        Embed.set_image(url=data['url'],self=embed)
        Embed.set_footer(self=embed,text='Nihongo.net')
        await message.channel.send(embed=embed)

@client.event
async def New_Member(member):
    new_member = member.name
    random_msg = {
        "Nihongo.net へ ようこそ":"",
        "Welcome To Nihongo.net":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
    }
    await client.get_channel(902144083001212938).send(new_member + random.choice(random_msg))
client.run(token)