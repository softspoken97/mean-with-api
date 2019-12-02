import { Component, OnInit } from '@angular/core';
import { MetacrawlService } from './metacrawl.service';

@Component({
  selector: 'app-metacrawl',
  templateUrl: './metacrawl.component.html',
  styleUrls: ['./metacrawl.component.css']
})




export class MetacrawlComponent implements OnInit {

  constructor(private metacrawlService: MetacrawlService) { }

  ngOnInit() {
    this.metacrawlService.getMetacrawl().subscribe((data) => {
      console.log(data);
  });

}}
