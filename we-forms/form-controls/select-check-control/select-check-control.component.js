"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
class CheckSelectOption {
}
let SelectCheckControlComponent = class SelectCheckControlComponent {
    constructor() {
        this.ignore = [];
        this.showLabel = false;
        this.disabled = false;
        this.changeEmitter = new core_1.EventEmitter();
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
__decorate([
    core_1.Input('form')
], SelectCheckControlComponent.prototype, "form", void 0);
__decorate([
    core_1.Input('name')
], SelectCheckControlComponent.prototype, "name", void 0);
__decorate([
    core_1.Input('label')
], SelectCheckControlComponent.prototype, "label", void 0);
__decorate([
    core_1.Input('helpText')
], SelectCheckControlComponent.prototype, "helpText", void 0);
__decorate([
    core_1.Input("messages")
], SelectCheckControlComponent.prototype, "messages", void 0);
__decorate([
    core_1.Input("ignore")
], SelectCheckControlComponent.prototype, "ignore", void 0);
__decorate([
    core_1.Input("showLabel")
], SelectCheckControlComponent.prototype, "showLabel", void 0);
__decorate([
    core_1.Input("disabled")
], SelectCheckControlComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Input('options')
], SelectCheckControlComponent.prototype, "options", void 0);
__decorate([
    core_1.Output("change")
], SelectCheckControlComponent.prototype, "changeEmitter", void 0);
__decorate([
    core_1.Input('filter')
], SelectCheckControlComponent.prototype, "filter", void 0);
SelectCheckControlComponent = __decorate([
    core_1.Component({
        selector: 'select-check-control',
        templateUrl: 'select-check-control.html'
    })
], SelectCheckControlComponent);
exports.SelectCheckControlComponent = SelectCheckControlComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWNoZWNrLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VsZWN0LWNoZWNrLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsd0NBQXlHO0FBSXpHLE1BQU0saUJBQWlCO0NBS3RCO0FBTUQsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBMkI7SUErQnBDO1FBbkJBLFdBQU0sR0FBYSxFQUFFLENBQUM7UUFFdEIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBSzFCLGtCQUFhLEdBQXdCLElBQUksbUJBQVksRUFBUyxDQUFDO1FBTS9ELFdBQU0sR0FBVSxFQUFFLENBQUM7UUFDbkIsUUFBRyxHQUErQixFQUFFLENBQUM7UUFDckMsZUFBVSxHQUFZLEtBQUssQ0FBQztJQUc1QixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9EO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtvQkFDcEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7cUJBQ2xDO3lCQUFNO3dCQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNwQztvQkFDRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQyxDQUFBO2dCQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDbEM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3BDO2dCQUNELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNwQjtTQUNKO0lBQ0wsQ0FBQztJQUdELFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNqQixJQUFJLElBQUksR0FBZ0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUNyRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDWixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTt3QkFDcEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7NEJBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7eUJBQ2xDOzZCQUFNOzRCQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUNwQzt3QkFDRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ3JCLENBQUMsQ0FBQyxDQUFBO29CQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2lCQUMxQjthQUNKO2lCQUFNO2dCQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2FBQ3BCO1lBQ0YsdUNBQXVDO1lBQ3RDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwQjtRQUNELElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3BCLElBQUksT0FBTyxHQUF3QixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQ25FLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNyQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3JEO1lBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQVcsRUFBRSxRQUFpQjtRQUNqQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ25DO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzVCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzVCO1lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ2xEO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQUVELFNBQVM7UUFDTCxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ25EO0lBQ0wsQ0FBQztDQUVKLENBQUE7QUF4SEc7SUFEQyxZQUFLLENBQUMsTUFBTSxDQUFDO3lEQUNJO0FBRWxCO0lBREMsWUFBSyxDQUFDLE1BQU0sQ0FBQzt5REFDRDtBQUViO0lBREMsWUFBSyxDQUFDLE9BQU8sQ0FBQzswREFDTTtBQUVyQjtJQURDLFlBQUssQ0FBQyxVQUFVLENBQUM7NkRBQ0Q7QUFFakI7SUFEQyxZQUFLLENBQUMsVUFBVSxDQUFDOzZEQUNrQjtBQUVwQztJQURDLFlBQUssQ0FBQyxRQUFRLENBQUM7MkRBQ007QUFFdEI7SUFEQyxZQUFLLENBQUMsV0FBVyxDQUFDOzhEQUNRO0FBRTNCO0lBREMsWUFBSyxDQUFDLFVBQVUsQ0FBQzs2REFDUTtBQUUxQjtJQURDLFlBQUssQ0FBQyxTQUFTLENBQUM7NERBQ21CO0FBR3BDO0lBREMsYUFBTSxDQUFDLFFBQVEsQ0FBQztrRUFDOEM7QUFHL0Q7SUFEQyxZQUFLLENBQUMsUUFBUSxDQUFDOzJEQUNvQztBQXhCM0MsMkJBQTJCO0lBSnZDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLFdBQVcsRUFBRSwyQkFBMkI7S0FDM0MsQ0FBQztHQUNXLDJCQUEyQixDQTBIdkM7QUExSFksa0VBQTJCIn0=