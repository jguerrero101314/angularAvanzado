import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Hospital } from '../../../models/hospital.model';
import { Medico } from '../../../models/medico.model';
import { HospitalService } from './../../../services/hospital.service';
import { MedicoService } from './../../../services/medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [],
})
export class MedicoComponent implements OnInit {
  public medicoForm: FormGroup;
  public hospitales: Hospital[] = [];
  public hospitalSeleccionado: Hospital;
  public medicoSeleccionado: Medico;

  constructor(
    private readonly fb: FormBuilder,
    private readonly hospitalService: HospitalService,
    private readonly medicosService: MedicoService,
    private readonly router: Router
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

  guardarMedico() {
    const { nombre } = this.medicoForm.value;
    this.medicosService
      .crearMedico(this.medicoForm.value)
      .subscribe((resp: Medico) => {
        Swal.fire('Creado', `${nombre} correctamente`, 'success');
        this.router.navigateByUrl(`/dashboard/medico/${resp.medico._id}`);
      });
  }
}
