import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { faker } from '@faker-js/faker';
import { Planta } from '../planta';
import { PlantasService } from '../plantas.service';
import { ListarPlantaComponent } from './listar-planta.component';

describe('ListarPlantaComponent', () => {
  let component: ListarPlantaComponent;
  let fixture: ComponentFixture<ListarPlantaComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ListarPlantaComponent],
      providers: [PlantasService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPlantaComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const planta = new Planta(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.word(),
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.words()
      );
      component.plantas.push(planta);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 <table.table-vivero> elements', () => {
    expect(debug.queryAll(By.css('table.table-vivero'))).toHaveSize(1)
  });

  it('should have 1 <thead.table-dark.fondo> elements', () => {
    expect(debug.queryAll(By.css('thead.table-dark'))).toHaveSize(1)
  });

  it('should have 1 <th.left.colId> elements', () => {
    expect(debug.queryAll(By.css('th.left.colId'))).toHaveSize(1)
  });

  it('should have th tag with the #', () => {
    debug.queryAll(By.css('th.left.colId')).forEach((th, i) => {
      expect(th.nativeElement.textContent).toContain("#")
    });
  });

  it('should have 1 <th.left.colNombreComun> elements', () => {
    expect(debug.queryAll(By.css('th.left.colNombreComun'))).toHaveSize(1)
  });

  it('should have th tag with the Nombre común', () => {
    debug.queryAll(By.css('th.left.colNombreComun')).forEach((th, i) => {
      expect(th.nativeElement.textContent).toContain("Nombre común")
    });
  });

  it('should have 1 <th.left.colTipo> elements', () => {
    expect(debug.queryAll(By.css('th.left.colTipo'))).toHaveSize(1)
  });

  it('should have th tag with the Tipo', () => {
    debug.queryAll(By.css('th.left.colTipo')).forEach((th, i) => {
      expect(th.nativeElement.textContent).toContain("Tipo")
    });
  });

  it('should have 1 <th.left.colClima> elements', () => {
    expect(debug.queryAll(By.css('th.left.colClima'))).toHaveSize(1)
  });

  it('should have th tag with the Clima', () => {
    debug.queryAll(By.css('th.left.colClima')).forEach((th, i) => {
      expect(th.nativeElement.textContent).toContain("Clima")
    });
  });

  it('should have 1 <tbody> elements', () => {
    expect(debug.queryAll(By.css('thead'))).toHaveSize(1)
  });

  it('should have 3 <td.left.colId> elements', () => {
    expect(debug.queryAll(By.css('td.left.colId'))).toHaveSize(3)
  });

  it('should have td tag with the planta.id', () => {
    debug.queryAll(By.css('td.left.colId')).forEach((td, i) => {
      expect(td.nativeElement.textContent).toContain(component.plantas[i].id)
    });
  });

  it('should have 3 <td.left.colNombreComun> elements', () => {
    expect(debug.queryAll(By.css('td.left.colNombreComun'))).toHaveSize(3)
  });

  it('should have td tag with the planta.nombre_comun', () => {
    debug.queryAll(By.css('td.left.colNombreComun')).forEach((td, i) => {
      expect(td.nativeElement.textContent).toContain(component.plantas[i].nombre_comun)
    });
  });

  it('should have 3 <td.left.colTipo> elements', () => {
    expect(debug.queryAll(By.css('td.left.colTipo'))).toHaveSize(3)
  });

  it('should have td tag with the planta.tipo', () => {
    debug.queryAll(By.css('td.left.colTipo')).forEach((td, i) => {
      expect(td.nativeElement.textContent).toContain(component.plantas[i].tipo)
    });
  });

  it('should have 3 <td.left.colClima> elements', () => {
    expect(debug.queryAll(By.css('td.left.colClima'))).toHaveSize(3)
  });

  it('should have td tag with the planta.clima', () => {
    debug.queryAll(By.css('td.left.colClima')).forEach((td, i) => {
      expect(td.nativeElement.textContent).toContain(component.plantas[i].clima)
    });
  });

  it('should have 1 <p.resumen> elements', () => {
    expect(debug.queryAll(By.css('p.resumen'))).toHaveSize(1)
  });
});
