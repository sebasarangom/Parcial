import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantasService } from '../plantas.service';

@Component({
  selector: 'app-listar-planta',
  templateUrl: './listar-planta.component.html',
  styleUrls: ['./listar-planta.component.css']
})
export class ListarPlantaComponent implements OnInit {

  plantas: Array<Planta> = [];
  totalPlantasInterior: number = 0;
  totalPlantasExterior: number = 0;
  constructor(private plantasService: PlantasService) { }

  ngOnInit() {
    this.obtenerPlanta();
  }

  obtenerPlanta(): void {
    this.plantasService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
      this.calcularPlantasInterior(plantas);
      this.calcularPlantasExterior(plantas);
    });
  }

  calcularPlantasInterior(plantas: Array<Planta>): number {
    for (let planta of plantas) {
      if (planta.tipo == 'Interior') {
        this.totalPlantasInterior++;
      }
    }
    return this.totalPlantasInterior;
  }

  calcularPlantasExterior(plantas: Array<Planta>): number {
    for (let planta of plantas) {
      if (planta.tipo == 'Exterior') {
        this.totalPlantasExterior++;
      }
    }
    return this.totalPlantasExterior;
  }
}
