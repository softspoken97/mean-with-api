import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, Form} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IOccurrence } from '../occurrence/occurrence.model';
import { IScenario } from '../scenario/scenario.model';
import { IAlgorithm } from '../algorithm/algorithm.model';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],

})


export class StepperComponent implements OnInit {
  isLinear = false;
  experimentForm: FormGroup;
  submitForm: FormControl;
  occurrenceSelected: IOccurrence;
  scenarioSelected: IScenario;
  algorithmSelected: IAlgorithm;
  formSubmitted = false;
  experimentResult: any;



  constructor(private _formBuilder: FormBuilder, private httpClient: HttpClient) {}

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
    const url = 'http://localhost:3000/api/v1/experiments/submit2';
    this.formSubmitted = true;
    this.httpClient
      .post<FormGroup>(
        url, this.experimentForm.value
      )
      .subscribe(responseData => {
        console.log(responseData);
        this.experimentResult = responseData;
      }, (error: any) => {
        console.log(error); });
  }

  getOccurrence(occurrenceSelected: IOccurrence) {
    this.occurrenceSelected = occurrenceSelected;
  }

  getScenario(scenarioSelected: IScenario) {
    this.scenarioSelected = scenarioSelected;
  }

  getAlgorithm(algorithmSelected: IAlgorithm) {
    this.algorithmSelected = algorithmSelected;
  }


}

