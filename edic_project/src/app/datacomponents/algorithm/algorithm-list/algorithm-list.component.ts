import { Component, OnInit, Input} from '@angular/core';
import { AlgorithmService } from '../algorithm.service';
import { Subscription, Observable } from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { IAlgorithm } from '../algorithm.model';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-algorithm',
  templateUrl: '../algorithm-list/algorithm-list.component.html',
  styleUrls: ['../algorithm-list/algorithm-list.component.css']
})

export class AlgorithmListComponent implements OnInit {
  selectedValue = '';
  algorithmCtrl = new FormControl();
  filteredAlgorithm: Observable<IAlgorithm[]>;
  selectedAlgorithm: [];

  public algorithms = [];

  constructor(private algorithmService: AlgorithmService) {
    this.filteredAlgorithm = this.algorithmCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterAlgorithm(value))
      );
   }

   @Input() expForm: FormGroup;

   private _filterAlgorithm(value: string): IAlgorithm[] {
    const filterValue = value.toLowerCase();

    return this.algorithms.filter(algorithms => algorithms.name.toLowerCase().indexOf(filterValue) === 0);
  }
  ngOnInit() {
    this.algorithmService.getAlgorithm()
    .subscribe(data => this.algorithms = data);
    console.log(this.algorithms);
    }

    displayFn(algorithm?: IAlgorithm): string | undefined {
      return algorithm ? algorithm.name : undefined;
    }

    save() {
      this.expForm.get('algorithmsForm').setValue(this.algorithmCtrl.value);
      console.log(this.algorithmCtrl.value);
    }
  }
