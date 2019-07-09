import { WeFormGroup } from '../../models';
export declare class SelectControlComponent {
    form: WeFormGroup;
    name: string;
    label: string;
    options: {
        'name': string;
        'value': string;
    }[];
    helpText: string;
    messages: {
        [key: string]: string;
    };
    ignore: string[];
    showLabel: boolean;
    constructor();
}
