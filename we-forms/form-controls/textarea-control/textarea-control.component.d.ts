import { WeFormGroup } from '../../models';
export declare class TextareaControlComponent {
    form: WeFormGroup;
    name: string;
    label: string;
    placeholder: string;
    helpText: string;
    class: string;
    messages: {
        [key: string]: string;
    };
    ignore: string[];
    height: number;
    showLabel: boolean;
    constructor();
}
