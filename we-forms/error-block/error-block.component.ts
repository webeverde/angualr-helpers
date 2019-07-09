import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * This component displays errors for a form component
 */
@Component({
    selector: 'error-block',
    templateUrl: 'error-block.html'
})
export class ErrorBlockComponent {

    /**
     * An array mapping all default error types to error messages
     */
    errorMessages: { [key: string]: string } = {
        'required': 'FORM_ERROR_REQUIRED',
        'min': 'FORM_ERROR_MIN',
        'max': 'FORM_ERROR_MAX',
        'size': 'FORM_ERROR_SIZE',
        'maxlength': 'FORM_ERROR_MAXLENGTH',
        'minlength': 'FORM_ERROR_MINLENGTH',
        'email': 'FORM_ERROR_EMAIL',
        'duplicate': 'FORM_ERROR_DUPLICATE',
        'dependency': 'FORM_ERROR_DEPENDENCY',
        'constraint': 'FORM_ERROR_CONSTRAINT',
        'date': 'FORM_ERROR_DATE',
        'beforeDate': 'FORM_ERROR_BEFORE_DATE',
        'unavailableDate': 'FORM_ERROR_UNAVAILABLE_DATE',
        'compareTo': 'FORM_ERROR_COMPARE_TO',
        'zip': 'FORM_ERROR_COMPARE_ZIP',
        'undefined': 'FORM_ERROR_INVALID_INPUT',
        'crmDuplicate' : 'FORM_ERROR_CRM_DUPLICATE'
    }

    /**
     * An array containing additional error types and messages
     */
    @Input("messages")
    messages: { [key: string]: string };
    /**
     * An array containing error codes to ignore
     */
    @Input("ignore")
    ignore: string[] = [];
    /**
     * The form control
     */
    @Input("control")
    control: FormControl;

    /**
     * The component's constructor
     */
    constructor() {
    }

    /**
     * Returns the error message for a given error code
     * 
     * @param key The error code
     */
    getMessage(key: string): string {
        if (this.messages) {
            if (this.messages[key]) {
                return this.messages[key];
            }
        }
        if (this.errorMessages[key]) {
            return this.errorMessages[key];
        }
        return "Unknown error: " + key;
    }

    /**
     * Returns a list of all error messages to display
     * 
     * @param errors An array of all errors
     */
    renderMessages(errors: { [key: string]: boolean }): string[] {
        let out: string[] = [];
        for (let key in errors) {
            if (this.ignore.indexOf(key) > -1) {
                continue;
            }
            out.push(this.getMessage(key));
        }
        return out;
    }
}
