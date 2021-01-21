import { MedicosComponent } from '../../intermedio/espias/medicos.component';
import { TestBed, ComponentFixture } from '@angular/core/testing'
import { MedicoComponent } from './medico.component';
describe('Medico Component', () => {
    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [MedicoComponent]
        })
        fixture = TestBed.createComponent( MedicoComponent );
        component = fixture.componentInstance;
       
    });

    
});