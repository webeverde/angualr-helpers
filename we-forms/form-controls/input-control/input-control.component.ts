import { Component, Input } from '@angular/core';
import { WeFormGroup } from '../../models';

@Component({
    selector: 'input-control',
    templateUrl: 'input-control.html'
})
export class InputControlComponent {

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
    showLabel: boolean = false;    

    constructor() {
    }
}
