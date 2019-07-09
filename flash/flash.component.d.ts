import { FlashService, FlashMessage } from "./flash.service";
/**
 * This component renders one or more flash alerts for success, warning and error messages
 */
export declare class FlashMessageComponent {
    private flashService;
    /**
     * The list of messages to display
     */
    messages: FlashMessage[];
    /**
     * The component's constructor
     *
     * @param flashService The flash service
     */
    constructor(flashService: FlashService);
    /**
     * Adds a message to display
     *
     * @param message The message
     */
    private addMessage;
    /**
     * Handles click on message close icon
     *
     * @param index The index of the message to close
     */
    removeMessage(index: number): void;
}
