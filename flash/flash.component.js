import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * This component renders one or more flash alerts for success, warning and error messages
 */
let FlashMessageComponent = class FlashMessageComponent {
    /**
     * The component's constructor
     *
     * @param flashService The flash service
     */
    constructor(flashService) {
        this.flashService = flashService;
        /**
         * The list of messages to display
         */
        this.messages = [];
        this.flashService.listenToMessageAdded(message => {
            this.addMessage(message);
        });
    }
    /**
     * Adds a message to display
     *
     * @param message The message
     */
    addMessage(message) {
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
    removeMessage(index) {
        let m = this.messages[index];
        if (m) {
            window.clearTimeout(m.timer);
            this.messages.splice(index, 1);
        }
    }
};
FlashMessageComponent = tslib_1.__decorate([
    Component({
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
], FlashMessageComponent);
export { FlashMessageComponent };
//# sourceMappingURL=flash.component.js.map