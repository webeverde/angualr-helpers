import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { WeFormGroup, SelectOption } from '../../models';

export class CheckSelectOption implements SelectOption {
    label: string;
    value: any;
    disabled?: boolean;
    key: string;
}

@Component({
    selector: 'select-check-control',
    templateUrl: 'select-check-control.html',
    styleUrls: ['./select-check-control.scss']
})
export class SelectCheckControlComponent implements OnChanges, OnInit {
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

    @Input('options')
    public options: CheckSelectOption[];

    @Output("change")
    changeEmitter: EventEmitter<any[]> = new EventEmitter<any[]>();

    @Input('filter')
    public filter: (value: any[], change: any) => any[];

    disabled: boolean = false;
    field: AbstractControl;
    values: any[] = [];
    map: { [key: string]: boolean } = {};
    subscribed: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
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
                    } else {
                        this.values = [this.field.value];
                    }
                    this.updateMap();
                    this.disabled = this.field.disabled;
                })
                this.subscribed = true;
                this.disabled = this.field.disabled;
                if (Array.isArray(this.field.value)) {
                    this.values = this.field.value;
                } else {
                    this.values = [this.field.value];
                }
                this.updateMap();
            }
        }
    }


    ngOnChanges(changes: SimpleChanges) {
        if (changes['form']) {
            let form: WeFormGroup = changes['form'].currentValue;
            this.field = form.controls[this.name];
            if (this.field) {
                if (!this.subscribed) {
                    this.field.statusChanges.subscribe(() => {
                        if (Array.isArray(this.field.value)) {
                            this.values = this.field.value;
                        } else {
                            this.values = [this.field.value];
                        }
                        this.updateMap();
                    })
                    this.subscribed = true;
                }
            } else {
                this.values = [];
            }
            // this.field.updateValueAndValidity();
            this.updateMap();
        }
        if (changes['options']) {
            let options: CheckSelectOption[] = changes['options'].currentValue;
            for (let i = 0; i < options.length; i++) {
                options[i].key = JSON.stringify(options[i].value);
            }
            this.options = options;
        }
    }

    toggle(option: any, disabled: boolean) {
        if (!disabled && !this.disabled) {
            let i = -1;
            if (this.values) {
                i = this.values.indexOf(option);
            }
            if (i > -1) {
                this.values.splice(i, 1);
            } else {
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

}
