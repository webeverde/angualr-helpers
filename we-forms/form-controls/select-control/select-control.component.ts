import { Component, Input } from '@angular/core';
import { WeFormGroup } from '../../models';

@Component({
  selector: 'select-control',
  templateUrl: 'select-control.html'
})
export class SelectControlComponent {

  @Input('form')
  form: WeFormGroup;
  @Input('name')
  name: string;
  @Input('label')
  public label: string;
  @Input('options')
  public options: { 'name': string, 'value': string }[];
  @Input('helpText')
  helpText: string;
  @Input("messages")
  messages: { [key: string]: string };
  @Input("ignore")
  ignore: string[] = [];
  @Input("showLabel")
  showLabel: boolean = true;

  constructor() {
  }
}
