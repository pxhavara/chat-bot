import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent{

  messages: Message[] = [];
  userMessage: string = '';

  sendMessage() {
    if (this.userMessage.trim() === '') return;

    // Add message from user
    this.messages.push(new Message(this.userMessage, true));

    // Handle user input
    this.handleUserInput(this.userMessage);

    // Clear user input
    this.userMessage = '';
  }

  handleUserInput(input: string) {
 
    // Simulate a typing delay
    setTimeout(() => {
      // Simulated bot response, integrate with API later
      const response = "Yo, Brunhilde";
  
      // Display typing animation
      this.displayTypingAnimation(response);
    }, 1000); // Delay for 1 second (adjust as needed)
  }

  displayTypingAnimation(text: string) {
    // Create a temporary bot response message (empty) to prepare for typing animation
    this.messages.push(new Message('', false));
  
    // Split the response into individual characters for typing animation
    const responseChars = text.split('');
    let currentIndex = 0;
  
    const intervalId = setInterval(() => {
      if (currentIndex < responseChars.length) {
        // Add one character at a time
        this.messages[this.messages.length - 1].text += responseChars[currentIndex];
        currentIndex++;
      } else {
        // Typing animation complete, clear the interval
        clearInterval(intervalId);
      }
    }, 100); // Delay between each character (adjust as needed)
  }
}


export class Message {
  constructor(public text: string, public isUser: boolean) {}
}
