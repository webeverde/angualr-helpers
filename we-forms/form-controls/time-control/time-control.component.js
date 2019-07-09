"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let TimeControlComponent = class TimeControlComponent {
    constructor() {
        this.ignore = [];
        this.showLabel = false;
        this.interval = 5;
        this.hours = "00";
        this.minutes = "00";
        this.hourValues = [];
        this.minuteValues = [];
        for (var i = 0; i < 24; i++) {
            let pre = "";
            if (i < 10) {
                pre = "0";
            }
            this.hourValues.push(pre + i);
        }
        this.updateMinuteInterval();
    }
    updateMinuteInterval() {
        for (var i = 0; i < 60; i += this.interval) {
            let pre = "";
            if (i < 10) {
                pre = "0";
            }
            this.minuteValues.push(pre + i);
        }
    }
    ngOnChanges(changes) {
        if (changes['form']) {
            let chng = changes['form'];
            let form = changes['form'].currentValue;
            this.field = form.controls[this.name];
            if (this.field) {
                let v = this.field.value;
                if (v) {
                    let ar = v.split(":");
                    if (ar.length) {
                        this.hours = ar[0];
                        this.minutes = ar[1];
                        return;
                    }
                }
            }
            this.hours = "00";
            this.minutes = "00";
        }
        else if (changes['interval']) {
            this.updateMinuteInterval();
        }
    }
    setFieldValue() {
        if (this.field) {
            this.field.setValue(this.hours + ":" + this.minutes);
        }
    }
    changeHours(h) {
        this.hours = h;
        this.setFieldValue();
    }
    changeMinutes(m) {
        this.minutes = m;
        this.setFieldValue();
    }
};
__decorate([
    core_1.Input('form')
], TimeControlComponent.prototype, "form", void 0);
__decorate([
    core_1.Input('name')
], TimeControlComponent.prototype, "name", void 0);
__decorate([
    core_1.Input('label')
], TimeControlComponent.prototype, "label", void 0);
__decorate([
    core_1.Input('helpText')
], TimeControlComponent.prototype, "helpText", void 0);
__decorate([
    core_1.Input("messages")
], TimeControlComponent.prototype, "messages", void 0);
__decorate([
    core_1.Input("ignore")
], TimeControlComponent.prototype, "ignore", void 0);
__decorate([
    core_1.Input("showLabel")
], TimeControlComponent.prototype, "showLabel", void 0);
__decorate([
    core_1.Input("interval")
], TimeControlComponent.prototype, "interval", void 0);
TimeControlComponent = __decorate([
    core_1.Component({
        selector: 'time-control',
        templateUrl: 'time-control.html'
    })
], TimeControlComponent);
exports.TimeControlComponent = TimeControlComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWUtY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx3Q0FBMkU7QUFRM0UsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUE0QjdCO1FBZkEsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUV0QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBRzNCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFJckIsVUFBSyxHQUFXLElBQUksQ0FBQztRQUNyQixZQUFPLEdBQVcsSUFBSSxDQUFDO1FBRXZCLGVBQVUsR0FBYSxFQUFFLENBQUM7UUFDMUIsaUJBQVksR0FBYSxFQUFFLENBQUM7UUFHeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ1IsR0FBRyxHQUFHLEdBQUcsQ0FBQzthQUNiO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELG9CQUFvQjtRQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3hDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDUixHQUFHLEdBQUcsR0FBRyxDQUFDO2FBQ2I7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2pCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixJQUFJLElBQUksR0FBZ0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUNyRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDWixJQUFJLENBQUMsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztnQkFDakMsSUFBSSxDQUFDLEVBQUU7b0JBQ0gsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFO3dCQUNYLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDckIsT0FBTztxQkFDVjtpQkFDSjthQUNKO1lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDdkI7YUFBTSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFDRCxhQUFhO1FBQ1QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hEO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxDQUFTO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxhQUFhLENBQUMsQ0FBUztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztDQUVKLENBQUE7QUFwRkc7SUFEQyxZQUFLLENBQUMsTUFBTSxDQUFDO2tEQUNJO0FBRWxCO0lBREMsWUFBSyxDQUFDLE1BQU0sQ0FBQztrREFDRDtBQUViO0lBREMsWUFBSyxDQUFDLE9BQU8sQ0FBQzttREFDTTtBQUVyQjtJQURDLFlBQUssQ0FBQyxVQUFVLENBQUM7c0RBQ0Q7QUFFakI7SUFEQyxZQUFLLENBQUMsVUFBVSxDQUFDO3NEQUNrQjtBQUVwQztJQURDLFlBQUssQ0FBQyxRQUFRLENBQUM7b0RBQ007QUFFdEI7SUFEQyxZQUFLLENBQUMsV0FBVyxDQUFDO3VEQUNRO0FBRzNCO0lBREMsWUFBSyxDQUFDLFVBQVUsQ0FBQztzREFDRztBQWxCWixvQkFBb0I7SUFKaEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSxtQkFBbUI7S0FDbkMsQ0FBQztHQUNXLG9CQUFvQixDQXVGaEM7QUF2Rlksb0RBQW9CIn0=