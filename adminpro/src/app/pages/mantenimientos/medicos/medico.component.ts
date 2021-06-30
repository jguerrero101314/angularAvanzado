import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hospital } from '../../../models/hospital.model';
import { HospitalService } from './../../../services/hospital.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [],
})
export class MedicoComponent implements OnInit {
  public medicoForm: FormGroup;
  public hospitales: Hospital[] = [];
  constructor(
    private readonly fb: FormBuilder,
    private readonly hospitalService: HospitalService
  ) {}

  ngOnInit(): void {
    this.medicoForm = this.fb.group({
      nombre: ['', [Validators.required]],
      hospital: ['', [Validators.required]],
    });
    this.cargarHospitales();
  }

  cargarHospitales() {
    this.hospitalService
      .cargarHospitales()
      .subscribe((hospitales: Hospital[]) => {
        this.hospitales = hospitales;
        console.log(hospitales);
      });
  }

  guardarMedico() {}
}
