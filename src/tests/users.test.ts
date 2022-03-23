import request from 'supertest';
import App from '../app';
import UserRoute from '../routes/users.route';

jest.autoMockOn();

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Users', () => {
  describe('[GET] /users/address/:address', () => {
    it('response statusCode 200', () => {
      // player address: 0xc480abab3B49B5905ba6325412cB752fbEC8B06D
      const userAddr = '0xc480abab3B49B5905ba6325412cB752fbEC8B06D';
      const usersRoute = new UserRoute();
      const app = new App([usersRoute]);

      return request(app.getServer())
        .get(`${usersRoute.path}/address/${userAddr}`)
        .expect(200, {
          data: {
            addr: `${userAddr}`,
            withdrawn: false,
            canRejoin: false,
            mostRecentSegmentPaid: {
              type: 'BigNumber',
              hex: '0x00',
            },
            amountPaid: {
              type: 'BigNumber',
              hex: '0x0de0b6b3a7640000',
            },
          },
          message: 'success',
        });
    });

    it('response statusCode 404 / findUserByAddress', () => {
      // non player address: 0x5360Be190f26daD6302207B805f15720A1bC804d
      const userAddr = '0x5360Be190f26daD6302207B805f15720A1bC804d';
      const usersRoute = new UserRoute();
      const app = new App([usersRoute]);

      return request(app.getServer()).get(`${usersRoute.path}/address/${userAddr}`).expect(404, { message: 'Player Not Found' });
    });
  });
});
