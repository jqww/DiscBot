module.exports= {
    name: 'ping',
    discription: "Ping command",
    execute(message, args){
        message.channel.send('pong');
    }
}