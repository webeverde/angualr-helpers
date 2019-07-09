import { FormControl } from '@angular/forms';
/**
 * This component displays errors for a form component
 */
export declare class ErrorBlockComponent {
    /**
     * An array mapping all default error types to error messages
     */
    errorMessages: {
        [key: string]: string;
    };
    /**
     * An array containing additional error types and messages
     */
    messages: {
        [key: string]: string;
    };
    /**
     * An array containing error codes to ignore
     */
    ignore: string[];
    /**
     * The form control
     */
    control: FormControl;
    /**
     * The component's constructor
     */
    constructor();
    /**
     * Returns the error message for a given error code
     *
     * @param key The error code
     */
    getMessage(key: string): string;
    /**
     * Returns a list of all error messages to display
     *
     * @param errors An array of all errors
     */
    renderMessages(errors: {
        [key: string]: boolean;
    }): string[];
}
