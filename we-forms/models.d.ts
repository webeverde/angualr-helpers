import { FormGroup } from '@angular/forms';
export declare class WeFormGroup extends FormGroup {
    sent: boolean;
    loading: boolean;
}
export interface SelectOption {
    label: string;
    value: any;
    disabled?: boolean;
}
