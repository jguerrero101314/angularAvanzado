import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Hospital } from '../../../models/hospital.model';
import { HospitalService } from '../../../services/hospital.service';
import { BusquedasService } from './../../../services/busquedas.service';
import { ModalImagenService } from './../../../services/modal-imagen.service';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css'],
})
export class HospitalesComponent implements OnInit, OnDestroy {
  public hospitales: Hospital[] = [];
  public cargando: boolean = true;
  public imgSubs: Subscription;

  constructor(
    private readonly hospitalService: HospitalService,
    private readonly modalImagenService: ModalImagenService,
    private readonly busquedasService: BusquedasService
  ) {}

  ngOnInit(): void {
    this.cargarHospital();
    this.imgSubs = this.modalImagenService.nuevaImagen
      .pipe(delay(100))
      .subscribe((img) => {
        console.log(img);
        this.cargarHospital();
      });
  }

  buscar(termino: string) {
    if (termino.length === 0) {
      return this.cargarHospital();
    }

    this.busquedasService
      .buscar('hospitales', termino)
      .subscribe((resultados: Hospital[]) => {
        this.hospitales = resultados;
      });
  }

  cargarHospital() {
    this.hospitalService.cargarHospitales().subscribe((hospitales) => {
      this.hospitales = hospitales;
      this.cargando = false;
    });
  }

  guardarCambios(hospital: Hospital) {
    this.hospitalService
      .actualizarHospital(hospital._id, hospital.nombre)
      .subscribe((resp) => {
        Swal.fire('Actualizado', hospital.nombre, 'success');
      });
  }

  eliminarHospital(hospital: Hospital) {
    this.hospitalService.eliminarHospital(hospital._id).subscribe((resp) => {
      this.cargarHospital();
      Swal.fire('Borrado', hospital.nombre, 'success');
    });
  }
  ngOnDestroy(): void {
    this.imgSubs.unsubscribe();
  }

  async crearHospital() {
    const { value = '' } = await Swal.fire<string>({
      title: 'Crear Hospital',
      text: 'Ingrese el nombre del nuevo hospital',
      input: 'text',
      inputPlaceholder: 'Nombre del hospital',
      showCancelButton: true,
    });

    if (value.trim().length > 0) {
      this.hospitalService.crearHospital(value).subscribe((resp: any) => {
        this.hospitales.push(resp.hospital);
        Swal.fire('Creado correctamente', value, 'success');
      });
    } else {
      Swal.fire('No puede ingresar hospital en blanco', value, 'error');
    }
  }

  abrirModal(hospital: Hospital) {
    this.modalImagenService.abrirModal(
      'hospitales',
      hospital._id,
      hospital.img
    );
  }
}
