import { AuthentificationMiddleware } from './authentification.middleware';

describe('AuthentificationMiddleware', () => {
  it('should be defined', () => {
    // @ts-ignore
    expect(new AuthentificationMiddleware()).toBeDefined();
  });
});
