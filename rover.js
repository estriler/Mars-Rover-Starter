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
         results: orgMessage.results
      }
      return obj;
   }
     
}

module.exports = Rover;