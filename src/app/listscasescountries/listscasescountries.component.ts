import { Component, OnInit } from '@angular/core';
import { ServicescoronaService } from "@Services/servicescorona.service";
import { Status } from "@Entities/status";
import { Countries } from "@Entities/Countries";

@Component({
  selector: 'app-listscasescountries',
  templateUrl: './listscasescountries.component.html',
  styleUrls: ['./listscasescountries.component.css']
})
export class ListscasescountriesComponent implements OnInit {
  bar: string;
  public listaEstados = new Array<Status>();
  public listaEstadosFiltre = new Array<Status>();
  private listaPaises = new Array<Countries>();

  constructor(private service: ServicescoronaService) { }

  ngOnInit() {
    this.service.QueryListStatus()
      .subscribe(
        (data: Status[]) => {
          this.listaEstados = data;
          this.listaEstadosFiltre = this.listaEstados;
        },
        (error) => {
          alert('Error al consultar la lista.');
        }
      )
    this.service.QueryCountriesList()
      .subscribe(
        (data: Countries[]) => {
          this.listaPaises = data;
        },
        (error) => {
          alert('Error al consultar la lista.');
        }
      )
  }
  modelChangeFn(pais: string) {
    var listaPaisesFiltre = new Array<Countries>();
    const filtroPais = pais.toLowerCase();
    if (filtroPais.length > 0) {
      listaPaisesFiltre = this.listaPaises.filter(pais => pais.name.toLowerCase().includes(filtroPais));
      this.listaEstadosFiltre = new Array<Status>();
      listaPaisesFiltre.forEach(pais => {
        this.listaEstadosFiltre.push(this.listaEstados.find(estado => estado.country === pais.alpha2));
      })
      this.listaEstadosFiltre.sort(function (a, b) {
        return b.cases - a.cases;
      });
      return;
    }
    this.listaEstadosFiltre = this.listaEstados;
  }
}
