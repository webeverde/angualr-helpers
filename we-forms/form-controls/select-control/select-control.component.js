"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let SelectControlComponent = class SelectControlComponent {
    constructor() {
        this.ignore = [];
        this.showLabel = false;
    }
};
__decorate([
    core_1.Input('form')
], SelectControlComponent.prototype, "form", void 0);
__decorate([
    core_1.Input('name')
], SelectControlComponent.prototype, "name", void 0);
__decorate([
    core_1.Input('label')
], SelectControlComponent.prototype, "label", void 0);
__decorate([
    core_1.Input('options')
], SelectControlComponent.prototype, "options", void 0);
__decorate([
    core_1.Input('helpText')
], SelectControlComponent.prototype, "helpText", void 0);
__decorate([
    core_1.Input("messages")
], SelectControlComponent.prototype, "messages", void 0);
__decorate([
    core_1.Input("ignore")
], SelectControlComponent.prototype, "ignore", void 0);
__decorate([
    core_1.Input("showLabel")
], SelectControlComponent.prototype, "showLabel", void 0);
SelectControlComponent = __decorate([
    core_1.Component({
        selector: 'select-control',
        templateUrl: 'select-control.html'
    })
], SelectControlComponent);
exports.SelectControlComponent = SelectControlComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VsZWN0LWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsd0NBQWlEO0FBUWpELElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBbUJqQztRQUpBLFdBQU0sR0FBYSxFQUFFLENBQUM7UUFFdEIsY0FBUyxHQUFZLEtBQUssQ0FBQztJQUczQixDQUFDO0NBQ0YsQ0FBQTtBQWxCQztJQURDLFlBQUssQ0FBQyxNQUFNLENBQUM7b0RBQ0k7QUFFbEI7SUFEQyxZQUFLLENBQUMsTUFBTSxDQUFDO29EQUNEO0FBRWI7SUFEQyxZQUFLLENBQUMsT0FBTyxDQUFDO3FEQUNNO0FBRXJCO0lBREMsWUFBSyxDQUFDLFNBQVMsQ0FBQzt1REFDcUM7QUFFdEQ7SUFEQyxZQUFLLENBQUMsVUFBVSxDQUFDO3dEQUNEO0FBRWpCO0lBREMsWUFBSyxDQUFDLFVBQVUsQ0FBQzt3REFDa0I7QUFFcEM7SUFEQyxZQUFLLENBQUMsUUFBUSxDQUFDO3NEQUNNO0FBRXRCO0lBREMsWUFBSyxDQUFDLFdBQVcsQ0FBQzt5REFDUTtBQWpCaEIsc0JBQXNCO0lBSmxDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFdBQVcsRUFBRSxxQkFBcUI7S0FDbkMsQ0FBQztHQUNXLHNCQUFzQixDQXFCbEM7QUFyQlksd0RBQXNCIn0=