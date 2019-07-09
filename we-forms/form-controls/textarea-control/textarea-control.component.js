import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let TextareaControlComponent = class TextareaControlComponent {
    constructor() {
        this.ignore = [];
        this.showLabel = false;
    }
};
tslib_1.__decorate([
    Input('form')
], TextareaControlComponent.prototype, "form", void 0);
tslib_1.__decorate([
    Input('name')
], TextareaControlComponent.prototype, "name", void 0);
tslib_1.__decorate([
    Input('label')
], TextareaControlComponent.prototype, "label", void 0);
tslib_1.__decorate([
    Input('placeholder')
], TextareaControlComponent.prototype, "placeholder", void 0);
tslib_1.__decorate([
    Input('helpText')
], TextareaControlComponent.prototype, "helpText", void 0);
tslib_1.__decorate([
    Input('class')
], TextareaControlComponent.prototype, "class", void 0);
tslib_1.__decorate([
    Input("messages")
], TextareaControlComponent.prototype, "messages", void 0);
tslib_1.__decorate([
    Input("ignore")
], TextareaControlComponent.prototype, "ignore", void 0);
tslib_1.__decorate([
    Input('height')
], TextareaControlComponent.prototype, "height", void 0);
tslib_1.__decorate([
    Input("showLabel")
], TextareaControlComponent.prototype, "showLabel", void 0);
TextareaControlComponent = tslib_1.__decorate([
    Component({
        selector: 'textarea-control',
        templateUrl: 'textarea-control.html'
    })
], TextareaControlComponent);
export { TextareaControlComponent };
//# sourceMappingURL=textarea-control.component.js.map