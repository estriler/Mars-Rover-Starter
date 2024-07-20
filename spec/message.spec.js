const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {

    it("should throw error if a name is NOT passed into the constructor as the first parameter", function(){
        expect( function() { new Message();}).toThrow(new Error('Message name is required.'));
    });

});

describe("constructor sets name", function() {

    it("should confirm that the constructor in the Message class correctly sets the name property in the new message object.", function(){
        let newMessage = new Message("newName");
        expect(newMessage.name).toBe("newName");
    });

});

describe("contains a commands array passed into the constructor as the 2nd argument", function(){

    it("should confirm that the commands property of the new message object contains the data pased in from the Message(name, commands) call.", function(){
        let command1 = new Command('commandType1', "value1");
        let command2 = new Command("commandType2", "value2");
        let newCommands = [command1, command2];
        let newMessage = new Message("newName", newCommands);
        expect(newMessage.commands).toEqual([command1, command2]);
        // expect(newMessage.commands.length).toEqual(2);
    });

});
