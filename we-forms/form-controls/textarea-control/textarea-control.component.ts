import { Component, Input } from '@angular/core';
import { WeFormGroup } from '../../models';

@Component({
  selector: 'textarea-control',
  templateUrl: 'textarea-control.html'
})
export class TextareaControlComponent {

  @Input('form')
  form: WeFormGroup;
  @Input('name')
  name: string;
  @Input('label')
  public label: string;
  @Input('placeholder')
  public placeholder: string;
  @Input('helpText')
  helpText: string;
  @Input('class')
  class: string;
  @Input("messages")
  messages: { [key: string]: string };
  @Input("ignore")
  ignore: string[] = [];
  @Input('height')
  height: number; // Has no effect so far
  @Input("showLabel")
  showLabel: boolean = false;    


  constructor() {
  }
}
