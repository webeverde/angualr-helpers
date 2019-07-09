import { WeFormGroup } from '../we-forms/models';
import { FlashService } from "../flash/flash.service";
/**
 * A value container for errors that are displayed via @FormError
 */
export declare class FormErrorValue {
    show: boolean;
    errorCode: number;
    detail: string;
    clear(): void;
    display(detail?: string, errorCode?: number): void;
}
/**
 * Wrapper for an error created by the API
 */
export interface ServiceError {
    errorCode: number;
    description: string;
    param: string;
    status: number;
}
export interface ErrorHandle {
    /**
     * The control on which an error is invoked
     */
    control?: string;
    /**
     * the error name
     */
    error?: string;
    /**
     *Alternativeliy, a function to handle the errorCode
     */
    func?: Function;
}
/**
 * Set of handlers for errors on forms
 */
export interface ErrorHandleSet {
    /**
     * true if the expected errors are caused be a request body
     */
    isBody?: boolean;
    /**
     * Handles for errors on indiviual params
     */
    fieldHandles?: {
        fields?: {
            /**
             *Param name that caused the error
             */
            [key: string]: {
                /**
                 * Handlers for individual error codes
                 */
                [key: number]: ErrorHandle;
                /**
                 * default error handler for this param
                 */
                default?: ErrorHandle;
            };
        };
        /**
         * Default handler if none exists for a param.
         */
        default?: ErrorHandle;
    };
    /**
     * Handles for general HTTP errors.
     */
    statusHandles?: {
        /**
         * Handles for specific http codes.
         */
        [key: number]: ErrorHandle;
        /**
         * default handler if none is specified.
         */
        default?: ErrorHandle;
        /**
         * default handler for 500+
         */
        default500?: ErrorHandle;
        /**
         * default handle for 400 - 499
         */
        default400?: ErrorHandle;
    };
    /**
     * Function to always run on errors.
     */
    always?: Function;
}
/**
 * Set of handles for requests without forms.
 */
export interface SimpleErrorHandleSet {
    /**
     * Handles for error codes in an ServiceError. Usually happens on 4xx errors.
     */
    codeHandles?: {
        /**
         * Handler for a specific error code.
         */
        [key: number]: Function;
        /**
         * default handler for all other error codes
         */
        default?: Function;
    };
    /**
    * Handles for general HTTP errors.
    */
    statusHandles?: {
        /**
         * Handles for specific http codes.
         */
        [key: number]: () => void;
        /**
         * default handler if none is specified.
         */
        default?: (status: number) => void;
        /**
         * default handler for 500+
         */
        default500?: (status: number) => void;
        /**
         * default handle for 400 - 499
         */
        default400?: (status: number) => void;
    };
    /**
     * Automatically check if the session is still valid if a 304 is returned.
     */
    checkSessionOnForbidden?: boolean;
    /**
   * Function to always run on errors.
   */
    always?: Function;
}
/**
 * Convinience function to jump to the first error on the page
 */
export declare function jumpToFirstError(): void;
/**
 * Small component to display general errors on forms.
 */
export declare class FormError {
    error: FormErrorValue;
}
/**
 * A service for handling errors on http calls
 */
export declare class ErrorService {
    private flashService;
    private errorCodeMapping;
    private onForbidden;
    private emptyErrorHandle;
    private emptySimpleErrorHandle;
    private offlineErrorMessage;
    constructor(flashService: FlashService);
    /**
     * Build a handler for form errors. Use on subscriptions on http calls.
     * @param form The form in which errors are displayed
     * @param formError The formErrorValue used to display general errors
     * @param handles A set of handels for detailed error handling
     */
    buildFormHandler(form: WeFormGroup, formError: FormErrorValue, handles?: ErrorHandleSet): (r: any) => void;
    /**
     * Build a handler for general errors. Use on subscriptions on http calls.
     * @param handles A set of handels for detailed error handling
     */
    buildSimpleHandler(handles?: SimpleErrorHandleSet): (r: any) => void;
}
