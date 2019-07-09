import { OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { WeFormGroup } from '../../models';
export declare class DynamicListControlComponent implements OnChanges {
    private el;
    form: WeFormGroup;
    name: string;
    label: string;
    addButton: string;
    helpText: string;
    messages: {
        [key: string]: string;
    };
    ignore: string[];
    showLabel: boolean;
    disabled: boolean;
    field: AbstractControl;
    values: String[];
    fieldValues: String[];
    constructor(el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    addEntry(): void;
    onChange(i: number, $event: string): void;
    updateField(): void;
    onEnter(i: number): void;
    remove(i: number): void;
}
