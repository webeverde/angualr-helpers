import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let InputControlComponent = class InputControlComponent {
    constructor() {
        this.ignore = [];
        this.showLabel = false;
    }
};
tslib_1.__decorate([
    Input('form')
], InputControlComponent.prototype, "form", void 0);
tslib_1.__decorate([
    Input('name')
], InputControlComponent.prototype, "name", void 0);
tslib_1.__decorate([
    Input('label')
], InputControlComponent.prototype, "label", void 0);
tslib_1.__decorate([
    Input('placeholder')
], InputControlComponent.prototype, "placeholder", void 0);
tslib_1.__decorate([
    Input('type')
], InputControlComponent.prototype, "type", void 0);
tslib_1.__decorate([
    Input('helpText')
], InputControlComponent.prototype, "helpText", void 0);
tslib_1.__decorate([
    Input("messages")
], InputControlComponent.prototype, "messages", void 0);
tslib_1.__decorate([
    Input("ignore")
], InputControlComponent.prototype, "ignore", void 0);
tslib_1.__decorate([
    Input("showLabel")
], InputControlComponent.prototype, "showLabel", void 0);
InputControlComponent = tslib_1.__decorate([
    Component({
        selector: 'input-control',
        templateUrl: 'input-control.html'
    })
], InputControlComponent);
export { InputControlComponent };
//# sourceMappingURL=input-control.component.js.map