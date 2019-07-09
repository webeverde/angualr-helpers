import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let DynamicListControlComponent = class DynamicListControlComponent {
    constructor(el) {
        this.el = el;
        this.ignore = [];
        this.showLabel = true;
        this.disabled = false;
        this.values = [];
        this.fieldValues = [];
    }
    ngOnChanges(changes) {
        if (changes['form']) {
            let chng = changes['form'];
            let form = changes['form'].currentValue;
            if (form) {
                this.field = form.controls[this.name];
                if (this.field) {
                    if (Array.isArray(this.field.value)) {
                        this.values = this.field.value;
                    }
                    else {
                        this.values = [this.field.value];
                    }
                }
                else {
                    this.values = [];
                }
                this.fieldValues = [];
                this.values.forEach((value, index, array) => {
                    this.fieldValues.push(value);
                });
                this.field.updateValueAndValidity();
            }
        }
    }
    addEntry() {
        this.values.push('');
        this.fieldValues.push('');
    }
    onChange(i, $event) {
        this.values[i] = $event;
        this.updateField();
    }
    updateField() {
        let out = [];
        this.values.forEach((value) => {
            if (value.trim()) {
                out.push(value);
            }
        });
        this.form.controls[this.name].setValue(out);
    }
    onEnter(i) {
        if (i == this.values.length - 1) {
            this.addEntry();
            setTimeout(() => {
                let elem = this.el.nativeElement.querySelector("input:last");
                if (elem) {
                    elem.focus();
                }
            }, 100);
        }
    }
    remove(i) {
        this.values.splice(i, 1);
        this.fieldValues.splice(i, 1);
        this.updateField();
    }
};
tslib_1.__decorate([
    Input('form')
], DynamicListControlComponent.prototype, "form", void 0);
tslib_1.__decorate([
    Input('name')
], DynamicListControlComponent.prototype, "name", void 0);
tslib_1.__decorate([
    Input('label')
], DynamicListControlComponent.prototype, "label", void 0);
tslib_1.__decorate([
    Input('addButton')
], DynamicListControlComponent.prototype, "addButton", void 0);
tslib_1.__decorate([
    Input('helpText')
], DynamicListControlComponent.prototype, "helpText", void 0);
tslib_1.__decorate([
    Input("messages")
], DynamicListControlComponent.prototype, "messages", void 0);
tslib_1.__decorate([
    Input("ignore")
], DynamicListControlComponent.prototype, "ignore", void 0);
tslib_1.__decorate([
    Input("showLabel")
], DynamicListControlComponent.prototype, "showLabel", void 0);
tslib_1.__decorate([
    Input("disabled")
], DynamicListControlComponent.prototype, "disabled", void 0);
DynamicListControlComponent = tslib_1.__decorate([
    Component({
        selector: 'dynamic-list-control',
        templateUrl: 'dynamic-list-control.html'
    })
], DynamicListControlComponent);
export { DynamicListControlComponent };
//# sourceMappingURL=dynamic-list-control.component.js.map