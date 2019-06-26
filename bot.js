const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log('Rainbow Bot is ready');
});

client.on('ready', () => {
  setInterval(function(){
      client.guilds.forEach(g => { 
                  var role = g.roles.find('name', 'Rainbow');
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  }, 60000);
});

client.login(process.env.BOT_TOKEN);
