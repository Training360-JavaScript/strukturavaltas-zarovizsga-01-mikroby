import { Construction } from 'src/app/model/construction';
import { ConstructionService } from 'src/app/service/construction.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-3';

  list$!: Observable<Construction[]>;

  constructor(
    private constructiontService: ConstructionService,    
  ) { }

  ngOnInit(): void {
    this.list$ = this.constructiontService.getAll();
  }

  onDelete(construction: Construction): void {
    this.constructiontService.delete(construction.id).subscribe(
      result => this.ngOnInit()
    )
  }

}
