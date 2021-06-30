import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Medico } from '../../../models/medico.model';
import { BusquedasService } from './../../../services/busquedas.service';
import { MedicoService } from './../../../services/medico.service';
import { ModalImagenService } from './../../../services/modal-imagen.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css'],
})
export class MedicosComponent implements OnInit, OnDestroy {
  public medicos: Medico[] = [];
  public cargando: boolean = true;
  public imgSubs: Subscription;

  constructor(
    private readonly medicosService: MedicoService,
    private readonly modalImagenService: ModalImagenService,
    private readonly busquedasService: BusquedasService
  ) {}
  ngOnInit(): void {
    this.cargarMedicos();

    this.imgSubs = this.imgSubs = this.modalImagenService.nuevaImagen
      .pipe(delay(100))
      .subscribe((img) => this.cargarMedicos());
  }

  ngOnDestroy(): void {
    this.imgSubs.unsubscribe();
  }
  cargarMedicos() {
    this.cargando = true;
    this.medicosService.cargarMedicos().subscribe((medicos) => {
      this.cargando = false;
      this.medicos = medicos;
    });
  }

  eliminarMedico(medico: Medico) {
    this.medicosService.eliminarMedico(medico._id).subscribe((resp) => {
      this.cargarMedicos();
      Swal.fire('Borrado', medico.nombre, 'success');
    });
  }

  async crearMedico() {}

  abrirModal(medico: Medico) {
    this.modalImagenService.abrirModal('medicos', medico._id, medico.img);
  }

  buscar(termino: string) {
    if (termino.length === 0) {
      return this.cargarMedicos();
    }

    this.busquedasService
      .buscar('medicos', termino)
      .subscribe((resultados: Medico[]) => {
        this.medicos = resultados;
      });
  }
}
