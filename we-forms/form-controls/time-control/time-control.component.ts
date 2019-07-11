import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeFormGroup } from '../../models';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'time-control',
    templateUrl: 'time-control.html'
})
export class TimeControlComponent implements OnChanges {

    @Input('form')
    form: WeFormGroup;
    @Input('name')
    name: string;
    @Input('label')
    public label: string;
    @Input('helpText')
    helpText: string;
    @Input("messages")
    messages: { [key: string]: string };
    @Input("ignore")
    ignore: string[] = [];
    @Input("showLabel")
    showLabel: boolean = true;

    @Input("interval")
    interval: number = 5;

    disabled: boolean = false;

    field: AbstractControl;

    hours: string = "00";
    minutes: string = "00";

    hourValues: string[] = [];
    minuteValues: string[] = [];

    constructor() {
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

    ngOnChanges(changes: SimpleChanges) {
        if (changes['form']) {
            let chng = changes['form'];
            let form: WeFormGroup = changes['form'].currentValue;
            this.field = form.controls[this.name];
            if (this.field) {
                let v: string = this.field.value;
                if (v) {
                    let ar = v.split(":");
                    if (ar.length) {
                        this.hours = ar[0];
                        this.minutes = ar[1];
                        return;
                    }
                }
                this.disabled = this.field.disabled;
            }
            this.hours = "00";
            this.minutes = "00";
        } else if (changes['interval']) {
            this.updateMinuteInterval();
        }
    }
    setFieldValue() {
        if (this.field) {
            this.field.setValue(this.hours + ":" + this.minutes);
        }
    }

    changeHours(h: string) {
        this.hours = h;
        this.setFieldValue();
    }

    changeMinutes(m: string) {
        this.minutes = m;
        this.setFieldValue();
    }

}
