import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
class CheckSelectOption {
}
let SelectCheckControlComponent = class SelectCheckControlComponent {
    constructor() {
        this.ignore = [];
        this.showLabel = false;
        this.disabled = false;
        this.changeEmitter = new EventEmitter();
        this.values = [];
        this.map = {};
        this.subscribed = false;
    }
    ngOnInit() {
        if (this.options) {
            for (let i = 0; i < this.options.length; i++) {
                this.options[i].key = JSON.stringify(this.options[i].value);
            }
        }
        if (this.form) {
            this.field = this.form.controls[this.name];
            if (this.field) {
                this.field.statusChanges.subscribe(() => {
                    if (Array.isArray(this.field.value)) {
                        this.values = this.field.value;
                    }
                    else {
                        this.values = [this.field.value];
                    }
                    this.updateMap();
                });
                this.subscribed = true;
                if (Array.isArray(this.field.value)) {
                    this.values = this.field.value;
                }
                else {
                    this.values = [this.field.value];
                }
                this.updateMap();
            }
        }
    }
    ngOnChanges(changes) {
        if (changes['form']) {
            let form = changes['form'].currentValue;
            this.field = form.controls[this.name];
            if (this.field) {
                if (!this.subscribed) {
                    this.field.statusChanges.subscribe(() => {
                        if (Array.isArray(this.field.value)) {
                            this.values = this.field.value;
                        }
                        else {
                            this.values = [this.field.value];
                        }
                        this.updateMap();
                    });
                    this.subscribed = true;
                }
            }
            else {
                this.values = [];
            }
            // this.field.updateValueAndValidity();
            this.updateMap();
        }
        if (changes['options']) {
            let options = changes['options'].currentValue;
            for (let i = 0; i < options.length; i++) {
                options[i].key = JSON.stringify(options[i].value);
            }
            this.options = options;
        }
    }
    toggle(option, disabled) {
        if (!disabled) {
            let i = -1;
            if (this.values) {
                i = this.values.indexOf(option);
            }
            if (i > -1) {
                this.values.splice(i, 1);
            }
            else {
                this.values.push(option);
            }
            if (this.filter) {
                this.values = this.filter(this.values, option);
            }
            this.field.setValue(this.values);
            this.field.updateValueAndValidity();
            this.changeEmitter.emit(this.values);
            this.updateMap();
        }
    }
    updateMap() {
        this.map = {};
        for (let i = 0; i < this.values.length; i++) {
            this.map[JSON.stringify(this.values[i])] = true;
        }
    }
};
tslib_1.__decorate([
    Input('form')
], SelectCheckControlComponent.prototype, "form", void 0);
tslib_1.__decorate([
    Input('name')
], SelectCheckControlComponent.prototype, "name", void 0);
tslib_1.__decorate([
    Input('label')
], SelectCheckControlComponent.prototype, "label", void 0);
tslib_1.__decorate([
    Input('helpText')
], SelectCheckControlComponent.prototype, "helpText", void 0);
tslib_1.__decorate([
    Input("messages")
], SelectCheckControlComponent.prototype, "messages", void 0);
tslib_1.__decorate([
    Input("ignore")
], SelectCheckControlComponent.prototype, "ignore", void 0);
tslib_1.__decorate([
    Input("showLabel")
], SelectCheckControlComponent.prototype, "showLabel", void 0);
tslib_1.__decorate([
    Input("disabled")
], SelectCheckControlComponent.prototype, "disabled", void 0);
tslib_1.__decorate([
    Input('options')
], SelectCheckControlComponent.prototype, "options", void 0);
tslib_1.__decorate([
    Output("change")
], SelectCheckControlComponent.prototype, "changeEmitter", void 0);
tslib_1.__decorate([
    Input('filter')
], SelectCheckControlComponent.prototype, "filter", void 0);
SelectCheckControlComponent = tslib_1.__decorate([
    Component({
        selector: 'select-check-control',
        templateUrl: 'select-check-control.html'
    })
], SelectCheckControlComponent);
export { SelectCheckControlComponent };
//# sourceMappingURL=select-check-control.component.js.map