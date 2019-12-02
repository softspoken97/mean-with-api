import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-esri',
  templateUrl: './esri.component.html',
  styleUrls: ['./esri.component.css']
})



export class EsriComponent implements OnInit {
  articles;

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getEsri().subscribe((data) => {
      console.log(data);
      this.articles = data['articles'];
    });
  }
}
