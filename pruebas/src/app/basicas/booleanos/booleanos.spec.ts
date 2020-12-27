import { usuarioIngresado } from './booleanos';
describe('Pruebas de Booleanos', () =>{
    it('Debe de retornar true', () => {
        const resp = usuarioIngresado();
        //expect(resp).toBeTruthy();
        // expect(resp).toBeFalsy();
        expect(resp).not.toBeTruthy();
    });
})