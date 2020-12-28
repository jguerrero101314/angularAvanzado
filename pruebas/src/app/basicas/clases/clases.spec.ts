import { Jugador } from './clases';
describe(' Pruebas de clase', () => {
    //   const jugador = new Jugador();
         let jugador = new Jugador();
      beforeAll( () => {
          console.log('beforeAll');
      });
      beforeEach( () => {
        //console.log('beforeEach');
        //jugador.hp = 100;
        jugador = new Jugador();

      });

      afterAll( () => {
        console.log('afterAll');
      });

      afterEach( () => {
        // console.log('afterEach');
        //jugador.hp = 100;
      });

    it('Debe de retornar 80 de hp, si recibe 20 de daño', () => {
        // const jugador = new Jugador();
        const res = jugador.recibeDanio(20);
        expect(res).toBe(80);
    });
    it('Debe de retornar 50 de hp, si recibe 50 de daño', () => {
        // const jugador = new Jugador();
        const res = jugador.recibeDanio(50);
        expect(res).toBe(50);
    });
});