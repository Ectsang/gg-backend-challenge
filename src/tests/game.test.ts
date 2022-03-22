import request from 'supertest';
import App from '../app';
import GameRoute from '../routes/game.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Game', () => {
  describe('[GET] /game/currentSegment', () => {
    it('response statusCode 200', () => {
      const gameRoute = new GameRoute();
      const app = new App([gameRoute]);

      return request(app.getServer())
        .get(`${gameRoute.path}/currentSegment`)
        .expect(200, { data: { type: 'BigNumber', hex: '0x00' }, message: 'success' });
    });
  });
});
