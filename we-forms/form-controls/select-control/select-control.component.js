import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let SelectControlComponent = class SelectControlComponent {
    constructor() {
        this.ignore = [];
        this.showLabel = false;
    }
};
tslib_1.__decorate([
    Input('form')
], SelectControlComponent.prototype, "form", void 0);
tslib_1.__decorate([
    Input('name')
], SelectControlComponent.prototype, "name", void 0);
tslib_1.__decorate([
    Input('label')
], SelectControlComponent.prototype, "label", void 0);
tslib_1.__decorate([
    Input('options')
], SelectControlComponent.prototype, "options", void 0);
tslib_1.__decorate([
    Input('helpText')
], SelectControlComponent.prototype, "helpText", void 0);
tslib_1.__decorate([
    Input("messages")
], SelectControlComponent.prototype, "messages", void 0);
tslib_1.__decorate([
    Input("ignore")
], SelectControlComponent.prototype, "ignore", void 0);
tslib_1.__decorate([
    Input("showLabel")
], SelectControlComponent.prototype, "showLabel", void 0);
SelectControlComponent = tslib_1.__decorate([
    Component({
        selector: 'select-control',
        templateUrl: 'select-control.html'
    })
], SelectControlComponent);
export { SelectControlComponent };
//# sourceMappingURL=select-control.component.js.map