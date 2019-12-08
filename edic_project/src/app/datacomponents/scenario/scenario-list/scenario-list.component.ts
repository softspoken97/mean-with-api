import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { ISpecies } from 'src/app/species/species.model';
import { IScenario } from '../scenario.model';
import { ScenarioService } from '../scenario.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-scenario-list',
  templateUrl: './scenario-list.component.html',
  styleUrls: ['./scenario-list.component.css']
})
export class ScenarioListComponent implements OnInit {
  selectedValue = '';
  scenariosCtrl = new FormControl();
  filteredScenario: Observable<IScenario[]>;
  selectedScenario: '';
  public scenarios: IScenario[] = [];
  scenarioJson: IScenario;


  constructor(private scenarioService: ScenarioService) {
    this.filteredScenario = this.scenariosCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterScenario(value))
      );
   }

   @Input() expForm: FormGroup;
   @Output() scenarioSelected = new EventEmitter<IScenario>();

   private _filterScenario(value: string): IScenario[] {
    const filterValue = value.toLowerCase();

    return this.scenarios.filter(scenario => scenario.name.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {
    this.scenarioService.getScenarios()
    .subscribe(data => this.scenarios = data);
    console.log(this.scenarios);
    }

    displayFn(scenario?: IScenario): string | undefined {
      return scenario ? scenario.name : undefined;
    }

    save() {
      this.expForm.get('scenariosForm').setValue(this.scenariosCtrl.value);
      this.scenarioJson = this.scenariosCtrl.value;
      this.scenarioSelected.emit(this.scenarioJson);
      console.log(this.scenariosCtrl.value);
    }
  }








