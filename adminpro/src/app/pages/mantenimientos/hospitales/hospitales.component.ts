import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../../services/hospital.service';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css'],
})
export class HospitalesComponent implements OnInit {
  constructor(private readonly hospitalService: HospitalService) {}

  ngOnInit(): void {
    this.hospitalService.cargarHospitales().subscribe((hospitales) => {
      console.log(hospitales);
    });
  }
}
