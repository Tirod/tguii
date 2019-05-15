const Discord = require('discord.js')
const bot = new Discord.Client()
var prefix = ("t.")
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapters  = new FileSync('database.json');
const db = low(adapters);
const fs = require('fs');
const ytdl = require('ytdl-core');
bot.commands = new Discord.Collection();



bot.on('message', function (message) {
  if (message.content === 'le stream commence quand ?') {
   message.reply('Pour le momen aucun stream de @VITAF TiRoD_ est en cour')
  }
})

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

fs.readdir('.//', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});

bot.on("ready", async () => {

    bot.user.setStatus('hors ligne')

    bot.user.setGame('Bonjour!')

    bot.user.setGame('TiRoD' , 'https://www.youtube.com/channel/UCoHJK4-WCp4zKWovFE8hhSw?view_as=subscriber');

});

bot.on('message', message => {
  if (message.content === prefix + 'server') {
		message.channel.send('Nom du serveur: ' + message.guild.name + 'Nombre de joueur Total: ' + message.guild.memberCount);
	} else if (message.content === prefix + 'info') {
		message.channel.send('Ton Pseudo: ' + message.author.username + 'ton ID: ' + message.author.id);
	}
});


bot.on('message', function (message) {
  if (message.content === 'Bonjour') {
   message.reply('Salut')
  }
})

bot.on('message', function (message) {
  if (message.content === 'bonjour') {
   message.reply('Salut')
  }
})

bot.on('message', function (message) {
  if (message.content === 'Bonjours') {
   message.reply('Salut')
  }
})

bot.on('message', function (message) {
  if (message.content === 'bonjours') {
   message.reply('Salut')
  }
})

bot.on('message', function (message) {
  if(message.content === prefix + "pub") {
   message.reply('La PUB est interdit!!')
  }
})

bot.on('message', function (message) {
  if(message.content === prefix + "stream"){
   message.reply('TiRoD est hors ligne sur Twitch, Youtube...')
  }
})

db.defaults({ histoire : [],xp : []}).write()
 
bot.on('message', message => {
 
  var msgauthor = message.author.id
 
  if(message.author.bot)return;
 
  if(!db.get("xp").find({user : msgauthor}).value()){
      db.get("xp").push({user : msgauthor, xp: 1}).write();
  }else{
      var userxpdb = db.get("xp").filter({user : msgauthor}).find("xp").value();
      console.log(userxpdb)
      var userxp = Object.values(userxpdb)
      console.log(userxp)
      console.log(`Nombre d'xp: ${userxp[1]}`)
 
      db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 1}).write();
 
      if(message.content === prefix + "xp"){
          var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
          var xpfinal = Object.values(xp);
          var xp_embed = new Discord.RichEmbed()
              .setTitle(`Stat des XP de : ${message.author.username}`)
              .setColor('#F4D03F')
              .addField("XP", `${xpfinal[1]} xp`)
              .setFooter("Bonne Chance :p")
              .setThumbnail(message.author.avatarURL)
          message.channel.send({embed : xp_embed})
      }
  }
})

bot.on('message', message => {
  if (message.content === prefix + "help"){
      var embed = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setAuthor("MENU D'AIDE", 'https://cdn.discordapp.com/attachments/552908990682628119/576748881254285328/telechargement_5.jpg')
      .setDescription("Les commande")
      .addField("t.help", "Page d'aide", true)
      .addField("t.stream", "Info Stream", true)
      .addField("t.pub", "Page de Pub", true)
      .addField("t.info", "Page d'info", true)
      .addField("t.site", "Lien du site", true)
      .setColor("RANDOM")
      .setFooter("By Tirod")
  message.channel.sendEmbed(embed)
  }
});

bot.on('message', message => {
  if (message.content === 'quel est mon logo') {
    message.reply(message.author.avatarURL);
  }
});


bot.login('NTUzNzM2NzM3NTc5MzM1Njgy.D2ScDw.2JytYmfoWQ7cp3Nr82cV0StHq0Y')