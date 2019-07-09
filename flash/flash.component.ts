import { Component } from '@angular/core';
import { FlashService, FlashMessage } from "./flash.service";

/**
 * This component renders one or more flash alerts for success, warning and error messages
 */
@Component({
    selector: 'flash-message',
    templateUrl: 'flash.html',
    styles: [`
    @keyframes flash-messageFade {
        0%, 100% {opacity: 0; height: 0; margin: 0; padding-top: 0; padding-bottom: 0}
        5%, 95% {opacity: 1; height: auto; margin-bottom: 10px; padding-top: 15px; padding-bottom: 15px}
    }
    .flash-message-container{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10000;
    }
    .flash-message{
        -webkit-animation: flash-messageFade 5s ease both;
        animation: flash-messageFade 5s ease both;
    }
`]
})
export class FlashMessageComponent {
    /**
     * The list of messages to display
     */
    messages: FlashMessage[] = [];

    /**
     * The component's constructor
     * 
     * @param flashService The flash service
     */
    constructor(private flashService: FlashService) {
        this.flashService.listenToMessageAdded(message => {
            this.addMessage(message);
        })
    }

    /**
     * Adds a message to display
     * 
     * @param message The message
     */
    private addMessage(message: FlashMessage) {
        message.timer = window.setTimeout(() => {
            this.messages.splice(0, 1);
        }, 6000);
        this.messages.push(message);
    }

    /**
     * Handles click on message close icon
     * 
     * @param index The index of the message to close
     */
    public removeMessage(index: number) {
        let m = this.messages[index];
        if (m) {
            window.clearTimeout(m.timer);
            this.messages.splice(index, 1);
        }
    }
}