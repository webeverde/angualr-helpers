"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let TextareaControlComponent = class TextareaControlComponent {
    constructor() {
        this.ignore = [];
        this.showLabel = false;
    }
};
__decorate([
    core_1.Input('form')
], TextareaControlComponent.prototype, "form", void 0);
__decorate([
    core_1.Input('name')
], TextareaControlComponent.prototype, "name", void 0);
__decorate([
    core_1.Input('label')
], TextareaControlComponent.prototype, "label", void 0);
__decorate([
    core_1.Input('placeholder')
], TextareaControlComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.Input('helpText')
], TextareaControlComponent.prototype, "helpText", void 0);
__decorate([
    core_1.Input('class')
], TextareaControlComponent.prototype, "class", void 0);
__decorate([
    core_1.Input("messages")
], TextareaControlComponent.prototype, "messages", void 0);
__decorate([
    core_1.Input("ignore")
], TextareaControlComponent.prototype, "ignore", void 0);
__decorate([
    core_1.Input('height')
], TextareaControlComponent.prototype, "height", void 0);
__decorate([
    core_1.Input("showLabel")
], TextareaControlComponent.prototype, "showLabel", void 0);
TextareaControlComponent = __decorate([
    core_1.Component({
        selector: 'textarea-control',
        templateUrl: 'textarea-control.html'
    })
], TextareaControlComponent);
exports.TextareaControlComponent = TextareaControlComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXh0YXJlYS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHdDQUFpRDtBQU9qRCxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQXdCbkM7UUFQQSxXQUFNLEdBQWEsRUFBRSxDQUFDO1FBSXRCLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFJM0IsQ0FBQztDQUNGLENBQUE7QUF2QkM7SUFEQyxZQUFLLENBQUMsTUFBTSxDQUFDO3NEQUNJO0FBRWxCO0lBREMsWUFBSyxDQUFDLE1BQU0sQ0FBQztzREFDRDtBQUViO0lBREMsWUFBSyxDQUFDLE9BQU8sQ0FBQzt1REFDTTtBQUVyQjtJQURDLFlBQUssQ0FBQyxhQUFhLENBQUM7NkRBQ007QUFFM0I7SUFEQyxZQUFLLENBQUMsVUFBVSxDQUFDOzBEQUNEO0FBRWpCO0lBREMsWUFBSyxDQUFDLE9BQU8sQ0FBQzt1REFDRDtBQUVkO0lBREMsWUFBSyxDQUFDLFVBQVUsQ0FBQzswREFDa0I7QUFFcEM7SUFEQyxZQUFLLENBQUMsUUFBUSxDQUFDO3dEQUNNO0FBRXRCO0lBREMsWUFBSyxDQUFDLFFBQVEsQ0FBQzt3REFDRDtBQUVmO0lBREMsWUFBSyxDQUFDLFdBQVcsQ0FBQzsyREFDUTtBQXJCaEIsd0JBQXdCO0lBSnBDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFdBQVcsRUFBRSx1QkFBdUI7S0FDckMsQ0FBQztHQUNXLHdCQUF3QixDQTBCcEM7QUExQlksNERBQXdCIn0=