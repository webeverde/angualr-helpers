import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
/**
 * This component displays errors for a form component
 */
let ErrorBlockComponent = class ErrorBlockComponent {
    /**
     * The component's constructor
     */
    constructor() {
        /**
         * An array mapping all default error types to error messages
         */
        this.errorMessages = {
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
            'crmDuplicate': 'FORM_ERROR_CRM_DUPLICATE'
        };
        /**
         * An array containing error codes to ignore
         */
        this.ignore = [];
    }
    /**
     * Returns the error message for a given error code
     *
     * @param key The error code
     */
    getMessage(key) {
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
    renderMessages(errors) {
        let out = [];
        for (let key in errors) {
            if (this.ignore.indexOf(key) > -1) {
                continue;
            }
            out.push(this.getMessage(key));
        }
        return out;
    }
};
tslib_1.__decorate([
    Input("messages")
], ErrorBlockComponent.prototype, "messages", void 0);
tslib_1.__decorate([
    Input("ignore")
], ErrorBlockComponent.prototype, "ignore", void 0);
tslib_1.__decorate([
    Input("control")
], ErrorBlockComponent.prototype, "control", void 0);
ErrorBlockComponent = tslib_1.__decorate([
    Component({
        selector: 'error-block',
        templateUrl: 'error-block.html'
    })
], ErrorBlockComponent);
export { ErrorBlockComponent };
//# sourceMappingURL=error-block.component.js.map