import { FormGroup } from '@angular/forms';
export class WeFormGroup extends FormGroup {
    constructor() {
        super(...arguments);
        this.sent = false;
        this.loading = false;
    }
}
//# sourceMappingURL=models.js.map