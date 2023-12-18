import { LightningElement, track } from 'lwc';
import processChat from '@salesforce/apex/ChatBotController.processChat';

export default class ChatBot extends LightningElement {
    @track inputMessage = '';
    @track messages = [{
                           id: 0,
                           content: 'How may I help you?',
                           cssClass: 'bot-message'
                       }];
    botResponse = '';

    handleInputChange(event) {
        this.inputMessage = event.target.value;
    }

    sendMessage() {
        if (this.inputMessage) {
            this.messages = [
                ...this.messages,
                {
                    id: this.messages.length,
                    content: this.inputMessage,
                    cssClass: 'user-message'
                }
            ];

            processChat({
                messages : this.messages
            }).then(
                results =>{
//                    const botMessages = results.map((msg, index) => ({
//                        id: this.messages.length + index,
//                        content: msg.content, // Replace with the actual property name in 'results'
//                        cssClass: msg.cssClass
//                    }));
//                    this.messages = [...this.messages, ...botMessages];
                    this.messages.push(results)
//                    console.log("results" + JSON.stringify(results));
                }

            ).catch( error => {
                console.log('eeeeeeeeee ' + JSON.stringify(error.data));
            })
            // Reset the input
        }
        this.inputMessage = '';
    }
}
