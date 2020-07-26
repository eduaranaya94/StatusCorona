import { Component, OnInit } from '@angular/core';
import { ServicescoronaService } from '../../services/servicescorona.service';
import { Status } from 'src/entities/status';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.css']
})
export class TotalsComponent implements OnInit {

  public sumary: Status;

  constructor(private service: ServicescoronaService) { }

  ngOnInit(): void {
    this.sumary = {
      cases: 0,
      deaths: 0,
      recovered: 0
    }
    this.service.QueryListStatus()
      .subscribe(
        (data: Status[]) => {
          this.sumary = {
            cases: data.map(c => c.cases).reduce((a, b) => a + b),
            deaths: data.map(c => c.deaths).reduce((a, b) => a + b),
            recovered: data.map(c => c.recovered).reduce((a, b) => a + b)
          }
        }
      )
  }

}
