import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { ISpecies } from 'src/app/species/species.model';
import { IScenario } from '../scenario.model';
import { ScenarioService } from '../scenario.service';

@Component({
  selector: 'app-scenario-list',
  templateUrl: './scenario-list.component.html',
  styleUrls: ['./scenario-list.component.css']
})
export class ScenarioListComponent implements OnInit {
  selectedValue = '';
  scenarioCtrl = new FormControl();
  filteredScenario: Observable<IScenario[]>;
  selectedScenario: '';
  public scenario: IScenario[] = [

      ];
  constructor(private scenarioService: ScenarioService) {
    this.filteredScenario = this.scenarioCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterScenario(value))
      );
   }

   private _filterScenario(value: string): IScenario[] {
    const filterValue = value.toLowerCase();

    return this.scenario.filter(scenario => scenario.name.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {
    this.scenarioService.getSpecies()
    .subscribe(data => this.scenario = data);
    console.log(this.scenario);
    }
  }








