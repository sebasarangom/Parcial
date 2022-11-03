import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { PlantasService } from './plantas.service';

describe('Service: Plantas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantasService]
    });
  });

  it('should ...', inject([PlantasService], (service: PlantasService) => {
    expect(service).toBeTruthy();
  }));
});
