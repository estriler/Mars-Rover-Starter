const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here!

  it("constructor sets postition and default values for mode and generatorWatts", function(){
    let rover = new Rover(100);
    expect(rover).toEqual({position: 100, mode: 'NORMAL', generatorWatts: 110});
  });

  it("response returned by receiveMessage contains the name of the message", function(){
    let rover = new Rover(100);
    let newMessage = new Message("messageName");
    let newReceivedMessage = rover.receiveMessage(newMessage);
    expect(newReceivedMessage.message).toBe("messageName");
  });

  it("response returned by recieveMessage includes two results if two commands are sent in the message", function(){
    let rover = new Rover(100);
    let command1 = new Command('commandType1', "value1");
    let command2 = new Command("commandType2", "value2");
    let newMessage = new Message("messageName", [command1, command2]);
    let newReceivedMessage = rover.receiveMessage(newMessage);
    expect(newReceivedMessage.results.length).toBe(2);
  });

});
