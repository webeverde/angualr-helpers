"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let InputControlComponent = class InputControlComponent {
    constructor() {
        this.ignore = [];
        this.showLabel = false;
    }
};
__decorate([
    core_1.Input('form')
], InputControlComponent.prototype, "form", void 0);
__decorate([
    core_1.Input('name')
], InputControlComponent.prototype, "name", void 0);
__decorate([
    core_1.Input('label')
], InputControlComponent.prototype, "label", void 0);
__decorate([
    core_1.Input('placeholder')
], InputControlComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.Input('type')
], InputControlComponent.prototype, "type", void 0);
__decorate([
    core_1.Input('helpText')
], InputControlComponent.prototype, "helpText", void 0);
__decorate([
    core_1.Input("messages")
], InputControlComponent.prototype, "messages", void 0);
__decorate([
    core_1.Input("ignore")
], InputControlComponent.prototype, "ignore", void 0);
__decorate([
    core_1.Input("showLabel")
], InputControlComponent.prototype, "showLabel", void 0);
InputControlComponent = __decorate([
    core_1.Component({
        selector: 'input-control',
        templateUrl: 'input-control.html'
    })
], InputControlComponent);
exports.InputControlComponent = InputControlComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnB1dC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHdDQUFpRDtBQU9qRCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQXFCOUI7UUFKQSxXQUFNLEdBQWEsRUFBRSxDQUFDO1FBRXRCLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFHM0IsQ0FBQztDQUNKLENBQUE7QUFwQkc7SUFEQyxZQUFLLENBQUMsTUFBTSxDQUFDO21EQUNJO0FBRWxCO0lBREMsWUFBSyxDQUFDLE1BQU0sQ0FBQzttREFDRDtBQUViO0lBREMsWUFBSyxDQUFDLE9BQU8sQ0FBQztvREFDTTtBQUVyQjtJQURDLFlBQUssQ0FBQyxhQUFhLENBQUM7MERBQ007QUFFM0I7SUFEQyxZQUFLLENBQUMsTUFBTSxDQUFDO21EQUNEO0FBRWI7SUFEQyxZQUFLLENBQUMsVUFBVSxDQUFDO3VEQUNEO0FBRWpCO0lBREMsWUFBSyxDQUFDLFVBQVUsQ0FBQzt1REFDa0I7QUFFcEM7SUFEQyxZQUFLLENBQUMsUUFBUSxDQUFDO3FEQUNNO0FBRXRCO0lBREMsWUFBSyxDQUFDLFdBQVcsQ0FBQzt3REFDUTtBQW5CbEIscUJBQXFCO0lBSmpDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUsb0JBQW9CO0tBQ3BDLENBQUM7R0FDVyxxQkFBcUIsQ0F1QmpDO0FBdkJZLHNEQUFxQiJ9