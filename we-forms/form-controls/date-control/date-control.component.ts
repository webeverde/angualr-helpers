import { Component, Input } from '@angular/core';
import { OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { WeFormGroup } from '@webever/angular-helpers';

@Component({
    selector: 'date-control',
    templateUrl: 'date-control.html'
})
export class DateControlComponent implements OnChanges {

    @Input('form')
    form: WeFormGroup;
    @Input('name')
    name: string;
    @Input('label')
    public label: string;
    @Input('placeholder')
    public placeholder: string;
    @Input('type')
    type: string;
    @Input('helpText')
    helpText: string;
    @Input("messages")
    messages: { [key: string]: string };
    @Input("ignore")
    ignore: string[] = [];
    @Input("showLabel")
    showLabel: boolean = true;
    @Input("disabled")
    disabled: boolean = false;
    @Input("readonly")
    readonly: boolean = false;

    field: AbstractControl;
    date: NgbDateStruct;
    displayDate: Date;
    constructor() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['form']) {
            let form: WeFormGroup = changes['form'].currentValue;
            if (form) {
                this.field = form.controls[this.name];
                if (this.field.value) {
                    try {
                        this.displayDate = new Date(this.field.value);
                    } catch{
                        this.displayDate = new Date();
                    }
                    this.date = {
                        day: this.displayDate.getDate(),
                        month: this.displayDate.getMonth() + 1,
                        year: this.displayDate.getFullYear()
                    }
                }
                this.field.updateValueAndValidity();
            }
        }
    }

    onDateSelect($event: NgbDateStruct) {
        this.date = $event;
        this.displayDate = new Date();
        this.displayDate.setHours(0, 0, 0, 0);
        this.displayDate.setFullYear(this.date.year);
        this.displayDate.setMonth(this.date.month-1);
        this.displayDate.setDate(this.date.day);
        this.field.setValue(this.displayDate);
        this.field.updateValueAndValidity();
    }
}
