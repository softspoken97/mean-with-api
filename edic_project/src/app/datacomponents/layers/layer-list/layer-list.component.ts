import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { ILayers } from '../layers.model';
import { LayersService } from '../layers.service';

@Component({
  selector: 'app-layer-list',
  templateUrl: './layer-list.component.html',
  styleUrls: ['./layer-list.component.css']
})
export class LayerListComponent implements OnInit {
  selectedValue = '';
  layersCtrl = new FormControl();
  filteredLayers: Observable<ILayers[]>;
  selectedLayers: '';
  public layers: ILayers[] = [

    ];
  constructor(private layersService: LayersService) {
  this.filteredLayers = this.layersCtrl.valueChanges
  .pipe(
    startWith(''),
    map(value => this._filterLayers(value))
  );
}

private _filterLayers(value: string): ILayers[] {
const filterValue = value.toLowerCase();

return this.layers.filter(layers => layers.name.toLowerCase().indexOf(filterValue) === 0);
}

ngOnInit() {
this.layersService.getLayers()
.subscribe(data => this.layers = data);
console.log(this.layers);
  }
}

