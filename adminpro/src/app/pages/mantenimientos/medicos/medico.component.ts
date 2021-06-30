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
  public hospitalSeleccionado: Hospital;
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
    this.medicoForm.get('hospital').valueChanges.subscribe((hospitalID) => {
      this.hospitalSeleccionado = this.hospitales.find(
        (h) => h._id === hospitalID
      );
    });
  }

  cargarHospitales() {
    this.hospitalService
      .cargarHospitales()
      .subscribe((hospitales: Hospital[]) => {
        this.hospitales = hospitales;
      });
  }

  guardarMedico() {}
}
