"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const html_helpers_1 = require("../html-helpers");
/**
 * A value container for errors that are displayed via @FormError
 */
class FormErrorValue {
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
exports.FormErrorValue = FormErrorValue;
/**
 * Convinience function to jump to the first error on the page
 */
function jumpToFirstError() {
    let offset = html_helpers_1.HTMLHelpers.getOffset(document.body.querySelector('error-block p'));
    if (offset) {
        window.scrollTo({
            top: offset.top - 100
        });
    }
}
exports.jumpToFirstError = jumpToFirstError;
/**
 * Small component to display general errors on forms.
 */
let FormError = class FormError {
};
FormError = __decorate([
    core_1.Component({
        selector: 'form-error',
        template: `<div class="alert alert-danger" *ngIf="error?.show">
        <p>Es ist ein Fehler aufgetreten.</p>
        <p *ngIf="error.detail">{{error.detail}}</p>
        <p *ngIf="error.errorCode"><b>Fehlercode</b>: {{error.errorCode}}</p>
    </div>`,
        inputs: ['error']
    })
], FormError);
exports.FormError = FormError;
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
            if (r instanceof http_1.HttpErrorResponse) {
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
            if (r instanceof http_1.HttpErrorResponse) {
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
ErrorService = __decorate([
    core_1.Injectable()
], ErrorService);
exports.ErrorService = ErrorService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaGFuZGxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlcnJvci1oYW5kbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHdDQUE2RDtBQUM3RCwrQ0FBeUQ7QUFHekQsa0RBQThDO0FBQzlDOztHQUVHO0FBQ0gsTUFBYSxjQUFjO0lBQTNCO1FBQ1csU0FBSSxHQUFZLEtBQUssQ0FBQztJQXNCakMsQ0FBQztJQWxCVSxLQUFLO1FBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVNLE9BQU8sQ0FBQyxNQUFlLEVBQUUsU0FBa0I7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFFM0IsSUFBSSxNQUFNLEVBQUU7WUFDUixNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNSLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2xDLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDdkM7U0FDSjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Q0FDSjtBQXZCRCx3Q0F1QkM7QUFvSUQ7O0dBRUc7QUFDSCxTQUFnQixnQkFBZ0I7SUFFNUIsSUFBSSxNQUFNLEdBQUcsMEJBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUNqRixJQUFJLE1B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