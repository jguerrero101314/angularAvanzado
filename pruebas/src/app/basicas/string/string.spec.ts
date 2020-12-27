import { mensaje } from './string';
describe('Pruebas de strings', () => {
    it( 'Debe de regresar un string', () => {
       const respuesta = mensaje('Joel');
       expect( typeof respuesta ).toBe('string');
    });
});
