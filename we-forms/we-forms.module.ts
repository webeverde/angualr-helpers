import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorBlockComponent } from './error-block/error-block.component';
import { DynamicListControlComponent } from './form-controls/dynamic-list-control/dynamic-list-control.component';
import { InputControlComponent } from './form-controls/input-control/input-control.component';
import { SelectControlComponent } from './form-controls/select-control/select-control.component';
import { SelectCheckControlComponent } from './form-controls/select-check-control/select-check-control.component';
import { TextareaControlComponent } from './form-controls/textarea-control/textarea-control.component';
import { TimeControlComponent } from './form-controls/time-control/time-control.component';
import { ErrorService, FormError } from './error-handle.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DateControlComponent } from './form-controls/date-control/date-control.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
@NgModule({
  providers: [ErrorService],
  declarations: [
    ErrorBlockComponent,
    DynamicListControlComponent,
    InputControlComponent,
    SelectControlComponent,
    SelectCheckControlComponent,
    TextareaControlComponent,
    TimeControlComponent,
    FormError,
    DateControlComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDatepickerModule,
    FontAwesomeModule
  ],
  exports: [
    ErrorBlockComponent,
    DynamicListControlComponent,
    InputControlComponent,
    SelectControlComponent,
    SelectCheckControlComponent,
    TextareaControlComponent,
    TimeControlComponent,
    DateControlComponent,
    FormError
  ]
})
export class WeFormsModule { }
