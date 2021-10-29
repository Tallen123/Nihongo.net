import random
import os
import discord
import json
import requests
from discord import channel
from discord.embeds import Embed
from dotenv import load_dotenv
from discord.ext import commands

intents = discord.Intents.default()
intents.members=True
client=discord.Client(intents=intents)

url = "static\Alphabet.json".lower()

AlphabetData = open(url, encoding="utf8")
Kanji = json.load(AlphabetData)[0]['Kanji']
kanjilist = Kanji['N1']
dict.update(kanjilist,Kanji['N2'])
dict.update(kanjilist,Kanji['N3'])
dict.update(kanjilist,Kanji['N4'])
dict.update(kanjilist,Kanji['N5'])

Configdata = open('DiscordBot\Config.json')
token = json.load(Configdata)['BOT_TOKEN']

PREFIX = "!"

@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')
    activity = discord.Game(name="!help | Being a weeb!")
    await client.change_presence(status=discord.Status.online, activity=activity)
    
@client.event
async def on_message(message):
    if message.author == client.user:#checks the message auther
        return

    if message.content == PREFIX + 'kanji':#kanji Command
        rand = random.choice(list(kanjilist))
        response = rand,kanjilist[rand]
        await message.channel.send(response)

    if message.content == PREFIX + 'help':#Help Command
        embed = discord.Embed(
            title="Help",
            description="Commands help",
            color=discord.Color.blue(),
        )
        Embed.set_footer(self=embed,text='Nihongo.net')
        Embed.add_field(self=embed,name='kanji',value='- Random Kanji from N5,N4,N3,N2 and N1 collectivly',inline=True),
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
async def on_member_join(member):
    channel = client.get_channel(902144083001212938)
    embed=discord.Embed(title=f"Welcome {member.name}", description=f"Thanks for joining {member.guild.name}!")#F-Strings!
    embed.set_thumbnail(url=member.avatar_url)#Set the embed's thumbnail to the member's avatar image!
    await channel.send(embed=embed)
client.run(token)