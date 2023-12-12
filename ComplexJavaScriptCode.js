/*
Filename: ComplexJavaScriptCode.js
Description: This code is a complex implementation of a web-based chat application using JavaScript.

Author: Your Name
Date: MM/DD/YYYY
*/

// Define the main chat object
class Chat {
  constructor() {
    this.users = [];
    this.messages = [];
  }

  addUser(username) {
    this.users.push(username);
    console.log(`${username} joined the chat.`);
  }

  removeUser(username) {
    const index = this.users.indexOf(username);
    if (index > -1) {
      this.users.splice(index, 1);
      console.log(`${username} left the chat.`);
    }
  }

  sendMessage(sender, message) {
    const timestamp = new Date().toISOString();
    this.messages.push({ sender, message, timestamp });
    console.log(`[${timestamp}] ${sender}: ${message}`);
  }
}

// Initialize the chat object
const chat = new Chat();

// Add users to the chat
chat.addUser("User1");
chat.addUser("User2");
chat.addUser("User3");

// Users send messages to the chat
chat.sendMessage("User1", "Hello, everyone!");
chat.sendMessage("User2", "Hi User1, how are you?");
chat.sendMessage("User3", "Hey all, what's the topic today?");

// Remove a user from the chat
chat.removeUser("User2");

// Send more messages
chat.sendMessage("User3", "I think we should talk about JavaScript.");
chat.sendMessage("User1", "Sure! Let's discuss JavaScript frameworks.");

// Output all the chat messages
console.log("\nChat Messages:");
chat.messages.forEach((message) => {
  console.log(`[${message.timestamp}] ${message.sender}: ${message.message}`);
});

// Output the current users in the chat
console.log("\nCurrent Users:");
chat.users.forEach((user) => {
  console.log(user);
});

// More code goes here...

// ...

// More code goes here...

// Final lines of the code...