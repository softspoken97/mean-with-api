import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { IOccurrence } from '../occurrence.model';
import { OccurrenceService } from '../occurrence.service';

@Component({
  selector: 'app-occurrence-list',
  templateUrl: './occurrence-list.component.html',
  styleUrls: ['./occurrence-list.component.css']
})

export class OccurrenceListComponent implements OnInit {
  selectedValue = '';
  occurrencesCtrl = new FormControl();
  filteredOccurrences: Observable<IOccurrence[]>;
  selectedOccurrences: '';
  public occurrences: IOccurrence[] = [

    ];

  constructor(private occurrencesService: OccurrenceService) {
   this.filteredOccurrences = this.occurrencesCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterOccurrences(value))
      );
  }

  private _filterOccurrences(value: string): IOccurrence[] {
    const filterValue = value.toLowerCase();

    return this.occurrences.filter(occurrences => occurrences.name.toLowerCase().indexOf(filterValue) === 0);
  }
  ngOnInit() {
    this.occurrencesService.getOccurrence()
    .subscribe(data => this.occurrences = data);
    console.log(this.occurrences);
    }
  }

