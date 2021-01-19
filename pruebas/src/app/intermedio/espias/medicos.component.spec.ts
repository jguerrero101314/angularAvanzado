import { from, Observable, empty } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './MedicosService';
 
 
describe('MedicosComponent', () => {
 
    let componente: MedicosComponent;
    const servicio = new MedicosService(null as any);
 
    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });
 
 
    it('Init: Debe cargar los medicos', () => {
        const medicos = ['medico1', 'medico2', 'medico3'];
 
        spyOn(servicio, 'getMedicos').and.callFake(()=>{
            return from([medicos]);
        })
 
        componente.ngOnInit();
 
        expect(componente.medicos.length).toBeGreaterThan(0);
    });
    it('Debe de llamar al servidor para agregar un medico', () => {

          const espia =  spyOn(servicio, 'agregarMedico').and.callFake( medico => {
                return empty();
            });
            componente.agregarMedico();
            expect(espia).toHaveBeenCalled();
    });
});