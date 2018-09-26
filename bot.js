'use strict';
const Discord = require("discord.js");
const client = new Discord.Client();
const playstream         = require('ytdl-core');

const streamOptions = { seek : 0, volume : 1}
process.setMaxListeners(30);

const cleverbot = require('cleverbot.io');


let input = process.argv.slice(2).join(' ');

let bot = new cleverbot("mA9APXhUa3cnR6Zw", "SLqjiDBww2bfd15v6BHlbmRXNrZ9Qx1L");
bot.setNick('Vlad');

const cheerio = require('cheerio'),
      snekfetch = require('snekfetch'),
      querystring = require('querystring');



client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});




client.on('message', msg => {
  if(msg.author.username=='Robi'){
    msg.delete(1);
    msg.channel.send(msg.content);
  }
  if (msg.content === 'Ping') {
    msg.channel.send("J'ai pas que ça à foutre sérieux...");
  }

  if (msg.content === 'Discussion') {
    msg.author.send("Qu'as-tu à me raconter ? :)");
  }

  if (msg.content === 'Cookies') {
    msg.reply("Tu n'en mérites pas, tu n'est pas polie :)");

  }
  if (msg.content === "Cookies s'il te plait") {
    msg.reply("Tiens, en voilà plein :cookie: :cookie: :cookie:");
  }
  if (msg.content === 'Help') {
    msg.channel.send("\n##################\n    Les commandes sont :\n##################\n\nClear 'nombre messages'\nTabarnak\nPing\nCookies\nCookies s'il te plait\nLicorne\nJe t'aime\nCoucou\nDiscussion\nChanger 'New pseudo'\nPatrick\nCarlo\nJoue_à 'New_jeu'/nStatuts\n\nA utiliser avec modération !");
  }
  if (msg.content.includes('Licorne') & msg.author.id != '427960412840132628') {
    msg.reply("Voici une licorne :)", {
    file: "Licorne.png" // Or replace with FileOptions object
});
  }

  if(msg.content.includes("Info") & msg.author.id != '427960412840132628') { //IF for the command.
    if(msg.mentions.users.first()) { //Check if the message has a mention in it.
          let user = msg.mentions.users.first(); //Since message.mentions.users returns a collection; we must use the first() method to get the first in the collection.
          let output = "\n"+user.username + user.discriminator /*Username and Discriminator*/ +
          "\n\nAvatar URL: " + user.avatarURL+"\n\nDate de création :\n"+user.createdAt+"\n\nSon dernier message :\n"+
          user.lastMessage+"\n\nJeu :\n"+user.presence.game; /*The Avatar URL*/
          msg.channel.sendMessage(output); //We send the output in the current channel.
    } else {
          msg.reply("Invalid user."); //Reply with a mention saying "Invalid user."
    }
}

     if (msg.content.includes('Joue_à') & msg.author.id != '427960412840132628') {
	const user = msg.mentions.users.first();
	const jeu = (msg.content.split(' ')[1]);
	 if (!jeu){ return msg.reply('Tu dois spécifier le nouveau jeu !');}

else {

    		console.log();
    		client.user.setActivity(jeu);

}



	}

  if (msg.content === 'Blague') {
    msg.reply("Qu'est ce qui est jaune et qui attends ?\n\n\n\nBah c'est moi à l'arrêt de bus :'D");

  }


	if (msg.content.includes('Patrick') & msg.author.id != '427960412840132628') {
    msg.reply("Voici mon meilleur ami :)", {
    file: "Patrick.png" // Or replace with FileOptions object
});
  }
	if (msg.content.includes('Carlo') & msg.author.id != '427960412840132628') {
    msg.reply("Voici mon voisin Carlo :)", {
    file: "carlo.jpeg" // Or replace with FileOptions object
});
  }
	if (msg.content.includes('Sandy') & msg.author.id != '427960412840132628') {
    msg.reply("Voici ma copine Sandy :)", {
    file: "sandy.png" // Or replace with FileOptions object
});
  }

  if (msg.content === "Je t'aime") {
    var nb=Math.floor(Math.random() * 10) + 1;
	   if (nb %2 == 1){
    		msg.reply("Moi aussi :heart:");
	     }
	      else{
		        msg.reply("Et bien pas moi :poop:");
	         }

         }
     if (msg.content === "Coucou") {
       var nbb=Math.floor(Math.random() * 10) + 1;
       	if (nbb < 4){
           		msg.reply("Coucou toi !, je t'adore :heart:");
       	}
       	if(nbb < 7 & nbb >=4){
       		msg.reply("Je m'en bats les couilles... :unamused: ");
       	}
       	if(nbb < 11 & nbb >=7){
       		msg.reply("Euh... On se connait ? :rolling_eyes: ");
       	}

     }


     if (msg.content.includes('Changer') & msg.author.id != '427960412840132628') {
const user = msg.mentions.users.first();
       const amounte = (msg.content.split(' ')[1]);
 if (!amounte) return msg.reply('Tu dois spécifier le nouveau pseudo !');

         if (msg.guild.members.get(client.user.id).hasPermission("MANAGE_NICKNAMES") && msg.guild.members.get(client.user.id).hasPermission("CHANGE_NICKNAME")) {
         msg.guild.members.get(client.user.id).setNickname(amounte);
	msg.reply("Mon pseudo a bien été changé :)");

       } else {
         msg.reply("Tu n'as pas les permissions mon chou.");
       }


     }


});



const tab = [" con ", "connard", "imbécile", "fils de pute", "baka", "enculé"];

client.on('message', msg => {
for (var i = 0; i < tab.length; i++) {

  if (msg.content.includes(tab[i])) {
    msg.reply("Tu as dis un vilain mot !! :o");
  }
}
});

client.on('message', msg => {
  if (msg.content.includes("Clear") & msg.author.id != '427960412840132628') {
    const user = msg.mentions.users.first();
     const amount = !!parseInt(msg.content.split(' ')[1]) ? parseInt(msg.content.split(' ')[1]) : parseInt(msg.content.split(' ')[2])
     if (!amount) return msg.reply('Tu dois spécifier le nombre de messages à supprimer !');
     if (!amount && !user) return msg.reply('Must specify a user and amount, or just an amount, of messages to purge!');
     msg.channel.fetchMessages({
      limit: amount,
     }).then((messages) => {
      if (user) {
      const filterBy = user ? user.id : Client.user.id;
      messages = msg.filter(m => m.author.id === filterBy).array().slice(0, amount);
      }
      msg.channel.bulkDelete(messages).catch(error => console.log(error.stack));
    });
     }
});

client.on('message', msg => {
  if (msg.content == "Statuts") {
  var Count;
  for(Count in client.users.array()){
     var User = client.users.array()[Count];

      if(User.presence.status=="online"){
        msg.channel.send(User.username+ " -> En ligne")
      }
      if(User.presence.status=="offline"){
        msg.channel.send(User.username+" -> Hors Ligne")
      }
      if(User.presence.status=="idle"){
        msg.channel.send(User.username+ " -> AFK")
      }
      if(User.presence.status=="dnd"){
        msg.channel.send(User.username +" -> Ne pas déranger")
      }
  }

}
if (msg.content.includes('Test')) {
    var childProcess = require('child_process');
childProcess.exec('/home/geoffrey-manjaro/Documents/C/puissance.exe', function (err, stdout, stderr) {
        if (err) {
        console.error(err);
        return;
    }
    console.log(stderr);
    process.exit(0);// exit process once it is opened
})
  }



});


client.on("message", message => {
  if (message.channel.type === "dm" & message.author.id != '427960412840132628') {

let aa = message.content;

bot.create(function (err, session) {
    bot.ask(aa, function (err, response) {
console.log(message.content);
        console.log(session + ':', response)
message.reply(response);
    });
});

}
});


client.on("message", (message) => {
      if(message.content.includes("kick")) {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?

    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
     member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
});

client.on('message', message => {

  if (message.content.startsWith('Play')) {
 message.delete(1);
    // On récupère le premier channel audio du serveur
    let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice' })
      .first()
    // On récupère les arguments de la commande 
    // il faudrait utiliser une expression régulière pour valider le lien youtube
    let args = message.content.split(' ')
    // On rejoint le channel audio
    voiceChannel
      .join()
      .then(function (connection) {
        // On démarre un stream à partir de la vidéo youtube
        let stream = playstream(args[1])
        stream.on('error', function () {
          message.reply("Je n'ai pas réussi à lire cette vidéo :(")
          connection.disconnect()
        })
        // On envoie le stream au channel audio
        // Il faudrait ici éviter les superpositions (envoie de plusieurs vidéo en même temps)
        connection
          .playStream(stream)
          .on('end', function () {
            connection.disconnect()
          })
      })
  }

})
/*
client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type !== "text") return;

  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    } else {
      let curLevel = Math.floor(0.5 * Math.sqrt(row.points + 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
        message.reply(`Tu viens de passer au Niveau **${curLevel}**! Tu gères :smiley: `);
      }
      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    });
  });



  if (message.content.startsWith("_Level")) {
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply("Ton niveau actuel est 0");
      message.reply(`Ton niveau actuel est ${row.level}`);
    });
  } else

  if (message.content.startsWith("_Points")) {
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply("Tu n'as pas encore de points :'(");
      message.reply(`Tu as ${row.points} points, pas mal ! :smiley: `);
    });
  }
});
*/

client.login(process.env.BOT_TOKEN);
