import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorBlockComponent } from './error-block/error-block.component';
import { DynamicListControlComponent } from './form-controls/dynamic-list-control/dynamic-list-control.component';
import { InputControlComponent } from './form-controls/input-control/input-control.component';
import { SelectControlComponent } from './form-controls/select-control/select-control.component';
import { SelectCheckControlComponent } from './form-controls/select-check-control/select-check-control.component';
import { TextareaControlComponent } from './form-controls/textarea-control/textarea-control.component';
import { TimeControlComponent } from './form-controls/time-control/time-control.component';
import { ErrorService } from 'services/error-handle.service';
let WeFormsModule = class WeFormsModule {
};
WeFormsModule = tslib_1.__decorate([
    NgModule({
        providers: [ErrorService],
        declarations: [
            ErrorBlockComponent,
            DynamicListControlComponent,
            InputControlComponent,
            SelectControlComponent,
            SelectCheckControlComponent,
            TextareaControlComponent,
            TimeControlComponent
        ],
        imports: [
            CommonModule
        ],
        exports: [
            ErrorBlockComponent,
            DynamicListControlComponent,
            InputControlComponent,
            SelectControlComponent,
            SelectCheckControlComponent,
            TextareaControlComponent,
            TimeControlComponent
        ]
    })
], WeFormsModule);
export { WeFormsModule };
//# sourceMappingURL=we-forms.module.js.map