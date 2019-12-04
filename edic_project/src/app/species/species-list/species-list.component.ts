import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { SpeciesService } from '../species.service';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { ISpecies } from 'src/app/species/species.model';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {
  selectedValue = '';

  speciesCtrl = new FormControl();
  filteredSpecies: Observable<ISpecies[]>;
  selectedSpecies: '';
  public species: ISpecies[] = [

    ];

  constructor(private speciesService: SpeciesService) {
    this.filteredSpecies = this.speciesCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterSpecies(value))
      );
   }

   private _filterSpecies(value: string): ISpecies[] {
    const filterValue = value.toLowerCase();

    return this.species.filter(species => species.scientificName.toLowerCase().indexOf(filterValue) === 0);
  }
  ngOnInit() {
    this.speciesService.getSpecies()
    .subscribe(data => this.species = data);
    console.log(this.species);
    }
  }







