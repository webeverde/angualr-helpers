import { OnChanges, SimpleChanges } from '@angular/core';
import { WeFormGroup } from '../../models';
import { AbstractControl } from '@angular/forms';
export declare class TimeControlComponent implements OnChanges {
    form: WeFormGroup;
    name: string;
    label: string;
    helpText: string;
    messages: {
        [key: string]: string;
    };
    ignore: string[];
    showLabel: boolean;
    interval: number;
    field: AbstractControl;
    hours: string;
    minutes: string;
    hourValues: string[];
    minuteValues: string[];
    constructor();
    updateMinuteInterval(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setFieldValue(): void;
    changeHours(h: string): void;
    changeMinutes(m: string): void;
}
