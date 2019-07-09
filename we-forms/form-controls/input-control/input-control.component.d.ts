import { WeFormGroup } from '../../models';
export declare class InputControlComponent {
    form: WeFormGroup;
    name: string;
    label: string;
    placeholder: string;
    type: string;
    helpText: string;
    messages: {
        [key: string]: string;
    };
    ignore: string[];
    showLabel: boolean;
    constructor();
}
