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
  constructor(private plantasService: PlantasService) { }

  ngOnInit() {
    this.obtenerPlanta();
  }

  obtenerPlanta(): void {
    this.plantasService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }
}
