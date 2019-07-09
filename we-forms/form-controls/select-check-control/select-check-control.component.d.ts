import { EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { WeFormGroup, SelectOption } from '../../models';
declare class CheckSelectOption implements SelectOption {
    label: string;
    value: any;
    disabled?: boolean;
    key: string;
}
export declare class SelectCheckControlComponent implements OnChanges, OnInit {
    form: WeFormGroup;
    name: string;
    label: string;
    helpText: string;
    messages: {
        [key: string]: string;
    };
    ignore: string[];
    showLabel: boolean;
    disabled: boolean;
    options: CheckSelectOption[];
    changeEmitter: EventEmitter<any[]>;
    filter: (value: any[], change: any) => any[];
    field: AbstractControl;
    values: any[];
    map: {
        [key: string]: boolean;
    };
    subscribed: boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    toggle(option: any, disabled: boolean): void;
    updateMap(): void;
}
export {};
