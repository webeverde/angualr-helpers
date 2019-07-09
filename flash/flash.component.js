"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
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
FlashMessageComponent = __decorate([
    core_1.Component({
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
exports.FlashMessageComponent = FlashMessageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhc2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmxhc2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsd0NBQTBDO0FBRzFDOztHQUVHO0FBc0JILElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBTTlCOzs7O09BSUc7SUFDSCxZQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQVY5Qzs7V0FFRztRQUNILGFBQVEsR0FBbUIsRUFBRSxDQUFDO1FBUTFCLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssVUFBVSxDQUFDLE9BQXFCO1FBQ3BDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksYUFBYSxDQUFDLEtBQWE7UUFDOUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsRUFBRTtZQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7Q0FDSixDQUFBO0FBekNZLHFCQUFxQjtJQXJCakMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFdBQVcsRUFBRSxZQUFZO1FBQ3pCLE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0NBZ0JaLENBQUM7S0FDRCxDQUFDO0dBQ1cscUJBQXFCLENBeUNqQztBQXpDWSxzREFBcUIifQ==