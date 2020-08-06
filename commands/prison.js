module.exports= {
    name: 'prison',
    discription: "your prison yes.",
    execute(message, args){
        if(message.member.roles.cache.has('726300814192279662')){
            message.channel.send('https://gfycat.com/brightfataurochs');
        }else{
            message.channel.send('You do not have the correct perms for this.');
        }
    }
}