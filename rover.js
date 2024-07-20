const Message = require('./message.js');
const Command = require('./command.js');

class Rover {
   // Write code here!
   constructor(position){
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
   }

   receiveMessage(orgMessage) {
      let results = [];
      for(let i = 0; i < orgMessage.commands.length; i++){
         if(orgMessage.commands[i].commandType === "STATUS_CHECK"){
            results.push({
               completed: true,
               roverStatus: {
                  mode: this.mode,
                  generatorWatts: this.generatorWatts,
                  position: this.position
               }
            });
         } else if (orgMessage.commands[i].commandType === 'MOVE'){
            results.push({
               completed: true
            });
            this.position = orgMessage.commands.value;
         }
      }
      return {
         message: orgMessage.name,
         results: results
      }
   }
     
}

module.exports = Rover;