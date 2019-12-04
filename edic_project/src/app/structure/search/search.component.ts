import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ISpecies } from 'src/app/species/species.model';
import { SpeciesService } from 'src/app/species/species.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})



export class SearchComponent implements OnInit {
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




