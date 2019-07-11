import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeFormGroup } from '../../models';

@Component({
    selector: 'checkbox-control',
    templateUrl: 'checkbox-control.html',
    styleUrls: ['./checkbox-control.scss']
})
export class CheckboxControlComponent implements OnChanges {

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

    value: boolean;

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes["form"]) {
            this.value = this.form.controls[this.name].value;
        }
    }

    onChange($event: boolean){
        this.value = $event;
        this.form.controls[this.name].setValue(this.value);
        this.form.controls[this.name].updateValueAndValidity();
    }
}
