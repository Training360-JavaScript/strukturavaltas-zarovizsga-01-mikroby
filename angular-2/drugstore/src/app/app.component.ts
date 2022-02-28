import { DrugService } from './service/drug.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Drug } from './model/drug';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'drugstore';

  drugs: Drug[] = [];

  constructor(
    private drugService: DrugService,
  ) { }

  ngOnInit(): void {
    this.drugService.getAll().subscribe(
      result => {
        this.drugs = result
      console.log(this.drugs)},
      error => console.error()
    )
  }

}
