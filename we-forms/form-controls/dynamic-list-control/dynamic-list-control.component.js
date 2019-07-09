"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
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
__decorate([
    core_1.Input('form')
], DynamicListControlComponent.prototype, "form", void 0);
__decorate([
    core_1.Input('name')
], DynamicListControlComponent.prototype, "name", void 0);
__decorate([
    core_1.Input('label')
], DynamicListControlComponent.prototype, "label", void 0);
__decorate([
    core_1.Input('addButton')
], DynamicListControlComponent.prototype, "addButton", void 0);
__decorate([
    core_1.Input('helpText')
], DynamicListControlComponent.prototype, "helpText", void 0);
__decorate([
    core_1.Input("messages")
], DynamicListControlComponent.prototype, "messages", void 0);
__decorate([
    core_1.Input("ignore")
], DynamicListControlComponent.prototype, "ignore", void 0);
__decorate([
    core_1.Input("showLabel")
], DynamicListControlComponent.prototype, "showLabel", void 0);
__decorate([
    core_1.Input("disabled")
], DynamicListControlComponent.prototype, "disabled", void 0);
DynamicListControlComponent = __decorate([
    core_1.Component({
        selector: 'dynamic-list-control',
        templateUrl: 'dynamic-list-control.html'
    })
], DynamicListControlComponent);
exports.DynamicListControlComponent = DynamicListControlComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1saXN0LWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZHluYW1pYy1saXN0LWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsd0NBQXdGO0FBUXhGLElBQWEsMkJBQTJCLEdBQXhDLE1BQWEsMkJBQTJCO0lBMEJwQyxZQUFxQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQVhuQyxXQUFNLEdBQWEsRUFBRSxDQUFDO1FBRXRCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUkxQixXQUFNLEdBQWEsRUFBRSxDQUFDO1FBQ3RCLGdCQUFXLEdBQWEsRUFBRSxDQUFDO0lBRzNCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLElBQUksSUFBSSxHQUFnQixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQ3JELElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDWixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztxQkFDbEM7eUJBQU07d0JBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3BDO2lCQUNKO3FCQUFNO29CQUNILElBQUks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