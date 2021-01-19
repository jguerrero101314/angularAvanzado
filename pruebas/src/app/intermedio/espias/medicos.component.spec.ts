import { from, Observable, empty, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './MedicosService';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;
  const servicio = new MedicosService(null as any);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });

  it('Init: Debe cargar los medicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];

    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return from([medicos]);
    });

    componente.ngOnInit();

    expect(componente.medicos.length).toBeGreaterThan(0);
  });
  it('Debe de llamar al servidor para agregar un medico', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake((medico) => {
      return empty();
    });
    componente.agregarMedico();
    expect(espia).toHaveBeenCalled();
  });
  it('Debe de agregar un nuevo medico al arreglo de medicos', () => {
    const medico = { id: 1, nombre: 'Juan' };
    spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));
    componente.agregarMedico();
    // expect(componente.medicos.length).toBe(1);
    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla la adicion, la propiedad mensajeError, debe ser igual al error del servicio', () => {
   
    const miError = 'No se pudo agregar al medico';

    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(miError));

    componente.agregarMedico();
    expect(componente.mensajeError).toBe(miError);
  });
});
