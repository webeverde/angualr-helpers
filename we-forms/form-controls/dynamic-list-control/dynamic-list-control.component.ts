import { Component,  Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { WeFormGroup } from '../../models';

@Component({
    selector: 'dynamic-list-control',
    templateUrl: 'dynamic-list-control.html'
})
export class DynamicListControlComponent implements OnChanges {

    @Input('form')
    form: WeFormGroup;
    @Input('name')
    name: string;
    @Input('label')
    public label: string;
    @Input('addButton')
    public addButton: string;
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


    field: AbstractControl;
    values: String[] = [];
    fieldValues: String[] = [];

    constructor( private el: ElementRef) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['form']) {
            let chng = changes['form'];
            let form: WeFormGroup = changes['form'].currentValue;
            if (form) {
                this.field = form.controls[this.name];
                if (this.field) {
                    if (Array.isArray(this.field.value)) {
                        this.values = this.field.value;
                    } else {
                        this.values = [this.field.value];
                    }
                } else {
                    this.values = [];
                }
                this.fieldValues = [];
                this.values.forEach((value, index, array) => {
                    this.fieldValues.push(value);
                })
                this.field.updateValueAndValidity();
            }    
        }
    }

    addEntry() {
        this.values.push('');
        this.fieldValues.push('');
    }

    onChange(i: number, $event: string) {
        this.values[i] = $event;
        this.updateField();
    }

    updateField() {
        let out: String[] = [];
        this.values.forEach((value) => {
            if (value.trim()) {
                out.push(value);
            }
        })
        this.form.controls[this.name].setValue(out);
    }

    onEnter(i: number) {
        if (i == this.values.length - 1) {
            this.addEntry();
            setTimeout(() => {
                let elem = (this.el.nativeElement as HTMLElement).querySelector("input:last") as HTMLElement;
                if(elem){
                    elem.focus();
                }
            }, 100);
            
        }
    }

    remove(i: number) {
        this.values.splice(i, 1);
        this.fieldValues.splice(i, 1);
        this.updateField();
    }
}
