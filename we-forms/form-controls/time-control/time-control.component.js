import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
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
tslib_1.__decorate([
    Input('form')
], TimeControlComponent.prototype, "form", void 0);
tslib_1.__decorate([
    Input('name')
], TimeControlComponent.prototype, "name", void 0);
tslib_1.__decorate([
    Input('label')
], TimeControlComponent.prototype, "label", void 0);
tslib_1.__decorate([
    Input('helpText')
], TimeControlComponent.prototype, "helpText", void 0);
tslib_1.__decorate([
    Input("messages")
], TimeControlComponent.prototype, "messages", void 0);
tslib_1.__decorate([
    Input("ignore")
], TimeControlComponent.prototype, "ignore", void 0);
tslib_1.__decorate([
    Input("showLabel")
], TimeControlComponent.prototype, "showLabel", void 0);
tslib_1.__decorate([
    Input("interval")
], TimeControlComponent.prototype, "interval", void 0);
TimeControlComponent = tslib_1.__decorate([
    Component({
        selector: 'time-control',
        templateUrl: 'time-control.html'
    })
], TimeControlComponent);
export { TimeControlComponent };
//# sourceMappingURL=time-control.component.js.map