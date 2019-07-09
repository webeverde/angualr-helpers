import * as tslib_1 from "tslib";
import { Component, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HTMLHelpers } from '../html-helpers';
/**
 * A value container for errors that are displayed via @FormError
 */
export class FormErrorValue {
    constructor() {
        this.show = false;
    }
    clear() {
        this.show = false;
    }
    display(detail, errorCode) {
        this.errorCode = errorCode;
        if (detail) {
            detail = JSON.stringify(detail);
            let i = detail.indexOf("<body>");
            if (i > -1) {
                let e = detail.indexOf("</body>");
                detail = detail.substring(i + 6, e);
            }
        }
        this.detail = detail;
        this.show = true;
    }
}
/**
 * Convinience function to jump to the first error on the page
 */
export function jumpToFirstError() {
    let offset = HTMLHelpers.getOffset(document.body.querySelector('error-block p'));
    if (offset) {
        window.scrollTo({
            top: offset.top - 100
        });
    }
}
/**
 * Small component to display general errors on forms.
 */
let FormError = class FormError {
};
FormError = tslib_1.__decorate([
    Component({
        selector: 'form-error',
        template: `<div class="alert alert-danger" *ngIf="error?.show">
        <p>Es ist ein Fehler aufgetreten.</p>
        <p *ngIf="error.detail">{{error.detail}}</p>
        <p *ngIf="error.errorCode"><b>Fehlercode</b>: {{error.errorCode}}</p>
    </div>`,
        inputs: ['error']
    })
], FormError);
export { FormError };
/**
 * A service for handling errors on http calls
 */
let ErrorService = class ErrorService {
    constructor(flashService) {
        this.flashService = flashService;
        // These are default errors that are set if no error handlers are present.
        this.errorCodeMapping = {
            200: "required",
            201: "pattern",
            202: "min",
            203: "max",
            204: "size",
            205: "maxlength",
            206: "minlength",
            210: "duplicate",
            211: "dependency",
            212: "constraint"
        };
        this.offlineErrorMessage = "ERROR_OFFLINE";
        this.emptyErrorHandle = {
            fieldHandles: {
                fields: {}
            },
            statusHandles: {
                default500: {
                    func: (er) => {
                        this.flashService.addMessage("ERROR_INTERNAL", "danger", { detail: er });
                    }
                }
            }
        };
        this.emptySimpleErrorHandle = {
            codeHandles: {},
            statusHandles: {
                default500: (er) => {
                    this.flashService.addMessage("ERROR_INTERNAL", "danger", { detail: er });
                }
            },
            checkSessionOnForbidden: true
        };
    }
    /**
     * Build a handler for form errors. Use on subscriptions on http calls.
     * @param form The form in which errors are displayed
     * @param formError The formErrorValue used to display general errors
     * @param handles A set of handels for detailed error handling
     */
    buildFormHandler(form, formError, handles) {
        return (r) => {
            var errorMessage;
            var errorCode = 0;
            formError.clear();
            form.loading = false;
            if (!handles) {
                handles = this.emptyErrorHandle;
            }
            handles.statusHandles = Object.assign({}, this.emptyErrorHandle.statusHandles, handles.statusHandles);
            handles.fieldHandles = Object.assign({}, this.emptyErrorHandle.fieldHandles, handles.fieldHandles);
            if (handles.always) {
                handles.always();
            }
            if (r instanceof HttpErrorResponse) {
                var res = r;
                let data = res.error;
                let hasFormError = false;
                // Handling an ServiceError. Usualy happens on invalid parameters.
                if (data instanceof Array) {
                    let apiErrors = data;
                    for (var i = 0; i < apiErrors.length; i++) {
                        let errorHandle;
                        if (handles.isBody && apiErrors[i].param.length > 6) {
                            apiErrors[i].param = apiErrors[i].param.substr(5);
                        }
                        // Check for a handler for the field name
                        if (handles.fieldHandles.fields && handles.fieldHandles.fields[apiErrors[i].param]) {
                            if (handles.fieldHandles.fields[apiErrors[i].param][apiErrors[i].errorCode]) {
                                errorHandle = handles.fieldHandles.fields[apiErrors[i].param][apiErrors[i].errorCode];
                            }
                            else if (handles.fieldHandles.fields[apiErrors[i].param].default) {
                                errorHandle = handles.fieldHandles.fields[apiErrors[i].param].default;
                            }
                        }
                        //Default field handler
                        if (!errorHandle && handles.fieldHandles.default) {
                            errorHandle = handles.fieldHandles.default;
                        }
                        if (!errorHandle) {
                            // Check for a status handler
                            if (handles.statusHandles[res.status]) {
                                errorHandle = handles.statusHandles[res.status];
                            }
                            else if (res.status > 399 && res.status < 500 && handles.statusHandles.default400) {
                                errorHandle = handles.statusHandles.default400;
                            }
                            else if (res.status > 499 && handles.statusHandles.default500) {
                                errorHandle = handles.statusHandles.default500;
                            }
                            else if (handles.statusHandles.default) {
                                errorHandle = handles.statusHandles.default;
                            }
                        }
                        // Generate one if none is found
                        if (!errorHandle) {
                            errorHandle = {
                                error: this.errorCodeMapping[apiErrors[i].errorCode]
                            };
                        }
                        if (errorHandle.func) {
                            errorHandle.func(apiErrors[i]);
                        }
                        else {
                            let e = {};
                            e[errorHandle.error] = true;
                            // If no control name is specified, use the param name
                            if (!errorHandle.control) {
                                errorHandle.control = apiErrors[i].param;
                            }
                            if (form.controls[errorHandle.control]) {
                                form.controls[errorHandle.control].setErrors(e);
                                hasFormError = true;
                            }
                            else {
                                formError.display(apiErrors[i].description, apiErrors[i].errorCode);
                            }
                        }
                    }
                }
                else {
                    let message;
                    // Maybe its a standard Jersey error object {code: number, message: string}
                    if (data.message) {
                        message = data.message;
                    }
                    else {
                        // This is either a browser error (no connection etc) or a pretty catastrophic failure on the server
                        message = data;
                    }
                    if (data instanceof ProgressEvent) {
                        // no communication possible. Offline probably.
                        message = this.offlineErrorMessage;
                    }
                    let errorHandle;
                    if (handles.statusHandles[res.status]) {
                        errorHandle = handles.statusHandles[res.status];
                    }
                    else if (res.status > 399 && res.status < 500 && handles.statusHandles.default400) {
                        errorHandle = handles.statusHandles.default400;
                    }
                    else if (res.status > 499 && handles.statusHandles.default500) {
                        errorHandle = handles.statusHandles.default500;
                    }
                    else if (handles.statusHandles.default) {
                        errorHandle = handles.statusHandles.default;
                    }
                    if (errorHandle) {
                        if (errorHandle.func) {
                            errorHandle.func(message);
                        }
                        else {
                            let e = {};
                            e[errorHandle.error] = true;
                            form.controls[errorHandle.control].setErrors(e);
                            hasFormError = true;
                        }
                    }
                    else {
                        formError.display(message, res.status);
                    }
                }
                if (hasFormError) {
                    jumpToFirstError();
                }
            }
            else {
                formError.display(r);
                console.error(r);
            }
        };
    }
    /**
     * Build a handler for general errors. Use on subscriptions on http calls.
     * @param handles A set of handels for detailed error handling
     */
    buildSimpleHandler(handles) {
        return (r) => {
            var errorMessage;
            var errorCode = 0;
            if (!handles) {
                handles = { checkSessionOnForbidden: true };
            }
            if (handles.always) {
                handles.always();
            }
            if (!handles.codeHandles) {
                handles.codeHandles = this.emptySimpleErrorHandle.codeHandles;
            }
            if (!handles.statusHandles) {
                handles.statusHandles = this.emptySimpleErrorHandle.statusHandles;
            }
            if (r instanceof HttpErrorResponse) {
                var res = r;
                let data = res.error;
                let handeled = false;
                // Check session on forbidden
                if (res.status == 403 && handles.checkSessionOnForbidden) {
                    this.onForbidden();
                }
                // Handling an ServiceError. Usualy happens on invalid parameters.
                if (data instanceof Array) {
                    let apiErrors = data;
                    for (var i = 0; i < apiErrors.length; i++) {
                        if (handles.codeHandles[apiErrors[i].errorCode]) {
                            handles.codeHandles[apiErrors[i].errorCode](apiErrors[i]);
                            handeled = true;
                        }
                        else if (handles.codeHandles.default) {
                            handles.codeHandles.default(apiErrors[i]);
                            handeled = true;
                        }
                    }
                }
                if (!handeled) {
                    if (data instanceof ProgressEvent) {
                        // no communication possible. Offline probably.
                    }
                    if (handles.statusHandles[res.status]) {
                        handles.statusHandles[res.status]();
                    }
                    else if (res.status > 399 && res.status < 500 && handles.statusHandles.default400) {
                        handles.statusHandles.default400(res.status);
                    }
                    else if (res.status > 499 && handles.statusHandles.default500) {
                        handles.statusHandles.default500(res.status);
                    }
                    else if (handles.statusHandles.default) {
                        handles.statusHandles.default(res.status);
                    }
                    else {
                        this.flashService.addMessage("ERROR_OFFLINE", "danger");
                        //Misc.flashMessage(this._messagesService.getMessage('generic_server_error_' + res.status), "danger", true);
                    }
                }
            }
        };
    }
};
ErrorService = tslib_1.__decorate([
    Injectable()
], ErrorService);
export { ErrorService };
//# sourceMappingURL=error-handle.service.js.map