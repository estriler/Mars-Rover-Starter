// const Message = require('./message.js');
// const Command = require('./command.js');

class Rover {
   // Write code here!
   constructor(position, mode = 'NORMAL', generatorWatts = 110){
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   }

   receiveMessage(orgMessage) {
      let obj = {
         message: orgMessage.name,
         results: []
      }
      for(let i = 0; i < orgMessage.commands.length; i++){
         if(orgMessage.commands[i] === "STATUS_CHECK"){
            results.push("completed: " + true + ", roverStatus: " + this.mode + ", generatorWatts: " + this.generatorWatts + ", position: " + this.position)
         }
      }
      return obj;
   }
     
}

module.exports = Rover;