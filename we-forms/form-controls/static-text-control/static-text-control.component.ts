import { Component, Input } from '@angular/core';

@Component({
    selector: 'static-text-control',
    templateUrl: 'static-text-control.html',
    styleUrls: ['./static-text-control.scss']
})
export class StaticTextControlComponent{

    @Input('label')
    public label: string;
    @Input('helpText')
    helpText: string;
    @Input("showLabel")
    showLabel: boolean = true;

    value: any;

    constructor() {
    }
}
