import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  templateUrl: 'banner.component.html'
})
export class BannerComponent {
  public checkboxGroupForm: FormGroup=Object.create(null);

  public radioGroupForm: FormGroup=Object.create(null);

  constructor(private formBuilder: FormBuilder) {}

  model = {
    left: true,
    middle: false,
    right: false
  };

  model1 = 1;

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.checkboxGroupForm = this.formBuilder.group({
      left: true,
      middle: false,
      right: false
    });

    this.radioGroupForm = this.formBuilder.group({
      model: 1
    });
  }
}
