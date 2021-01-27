import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { ActivatedRoute, Router } from '@angular/router';
import { empty, Observable } from 'rxjs';

class FakeRouter {
  navigate( params ){}
}

class FakeActivatedRoute {
  params: Observable<any> = empty();
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers:[
        { provide: Router, useClass: FakeRouter},
        { provide: ActivatedRoute, useClass: FakeActivatedRoute},
        
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redireccionar a medico cuando se guarde', () => {

    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.guardarMedico();
    expect(spy).toHaveBeenCalledWith(['Medico','123']);
  });
});
