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
    let command1 = new Command('STATUS_CHECK', "value1");
    let command2 = new Command("MOVE", "value2");
    let newMessage = new Message("messageName", [command1, command2]);
    let newReceivedMessage = rover.receiveMessage(newMessage);
    expect(newReceivedMessage.results.length).toBe(2);
  });

  // test 10
  it("responds correctly to the status check command", function(){
    let rover = new Rover(100);
    let command1 = new Command('STATUS_CHECK');
    let newMessage = new Message("messageName", [command1]);
    let newReceivedMessage = rover.receiveMessage(newMessage);
    expect(newReceivedMessage.results).toStrictEqual([{completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 100}}]);
  });

  it("responds correctly to the mode change command", function(){
    let rover = new Rover(100);
    let command1 = new Command('MODE_CHANGE', "LOW_POWER");
    let newMessage = new Message("messageName", [command1]);
    let newReceivedMessage = rover.receiveMessage(newMessage);
    expect(newReceivedMessage.results).toStrictEqual([{completed: true}]);
    expect(rover.mode).toBe('LOW_POWER');
  });

});
