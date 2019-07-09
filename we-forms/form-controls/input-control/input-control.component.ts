import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeFormGroup } from '../../models';

@Component({
    selector: 'input-control',
    templateUrl: 'input-control.html',
    styleUrls: ['./input-control.scss']
})
export class InputControlComponent implements OnChanges {

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

    value: any;

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes["form"]) {
            this.value = this.form.controls[this.name].value;
        }
    }
}
