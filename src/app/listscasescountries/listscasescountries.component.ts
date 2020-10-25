import { Component, OnInit } from '@angular/core';
import { ServicescoronaService } from "@Services/servicescorona.service";
import { Status } from "@Entities/status";

@Component({
  selector: 'app-listscasescountries',
  templateUrl: './listscasescountries.component.html',
  styleUrls: ['./listscasescountries.component.css']
})
export class ListscasescountriesComponent implements OnInit {
  public listaEstados = new Array<Status>();

  constructor(private service: ServicescoronaService) { }

  ngOnInit(): void {
    this.service.QueryListStatus()
      .subscribe(
        (data: Status[]) => {
          this.listaEstados = data;
        },
        (error) => {
          alert('Error al consultar la lista.');
        }
      )
  }
}
