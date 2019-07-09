import { FormGroup } from '@angular/forms';

export class WeFormGroup extends FormGroup {
    public sent: boolean = false;
    public loading: boolean = false;
}

export interface SelectOption {
    label: string;
    value: any;
    disabled?: boolean;
}
