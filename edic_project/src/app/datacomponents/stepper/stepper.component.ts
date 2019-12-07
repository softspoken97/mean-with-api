import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],

})


export class StepperComponent implements OnInit {
  isLinear = false;
  experimentForm: FormGroup;
  submitForm: FormControl;

  constructor(private _formBuilder: FormBuilder) {}

  @Input() expForm: FormGroup;

  ngOnInit() {
    this.experimentForm = this._formBuilder.group({
      'occurrencesForm': [''],
      'scenariosForm': [''],
      'algorithmsForm': ['']
    });

  }

  /* */

  onSubmit() {
    console.log('Submit');
    console.log(this.experimentForm.value);
  }
}

