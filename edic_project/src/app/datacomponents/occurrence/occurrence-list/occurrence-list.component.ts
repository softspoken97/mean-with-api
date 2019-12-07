import { Component, OnInit, Input} from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { IOccurrence } from '../occurrence.model';
import { OccurrenceService } from '../occurrence.service';
import { FormGroup } from '@angular/forms';

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
  occurrencesJson: IOccurrence;
  public occurrences: IOccurrence[] = [

    ];

  constructor(private occurrencesService: OccurrenceService) {
   this.filteredOccurrences = this.occurrencesCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterOccurrences(value))
      );
  }

  @Input() expForm: FormGroup;

  private _filterOccurrences(value: string): IOccurrence[] {
    const filterValue = value.toLowerCase();

    return this.occurrences.filter(occurrences => occurrences.name.toLowerCase().indexOf(filterValue) === 0);
  }
  ngOnInit() {
    this.occurrencesService.getOccurrence()
    .subscribe(data => this.occurrences = data);
    this.occurrencesJson = {
      _id: '',
      url: '',
      epsg: 0,
      id: 0,
      name: '',
      modificationTime: new Date};
    console.log(this.occurrences);
    }

    displayFn(occurrence?: IOccurrence): string | undefined {
      return occurrence ? occurrence.name : undefined;
    }

    save() {
      this.expForm.get('occurrencesForm').setValue(this.occurrencesCtrl.value);
      const obj = this.expForm.getRawValue();
      this.occurrencesJson = this.occurrencesCtrl.value;
      console.log(this.occurrencesCtrl.value);
      console.log(this.occurrencesJson);
    }
  }

