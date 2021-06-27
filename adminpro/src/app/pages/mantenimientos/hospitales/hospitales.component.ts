import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../../models/hospital.model';
import { HospitalService } from '../../../services/hospital.service';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css'],
})
export class HospitalesComponent implements OnInit {
  public hospitales: Hospital[] = [];
  public cargando: boolean = true;
  constructor(private readonly hospitalService: HospitalService) {}

  ngOnInit(): void {
    this.cargarHospital();
  }

  cargarHospital() {
    this.hospitalService.cargarHospitales().subscribe((hospitales) => {
      this.hospitales = hospitales;
      this.cargando = false;
    });
  }
}
