import { Component, OnInit } from '@angular/core';
import { AlgorithmService } from './algorithm.service';
import { Subscription, Observable } from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { IAlgorithm } from './algorithm.model';


@Component({
  selector: 'app-algorithm',
  templateUrl: './algorithm.component.html',
  styleUrls: ['./algorithm.component.css']
})

export class AlgorithmComponent implements OnInit {
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

   private _filterAlgorithm(value: string): IAlgorithm[] {
    const filterValue = value.toLowerCase();

    return this.algorithms.filter(algorithms => algorithms.name.toLowerCase().indexOf(filterValue) === 0);
  }
  ngOnInit() {
    this.algorithmService.getAlgorithm()
    .subscribe(data => this.algorithms = data);
    console.log(this.algorithms);
    }
  }
