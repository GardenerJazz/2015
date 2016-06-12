import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { GardenerJazzAppComponent } from '../app/gardener-jazz.component';

beforeEachProviders(() => [GardenerJazzAppComponent]);

describe('App: GardenerJazz', () => {
  it('should create the app',
      inject([GardenerJazzAppComponent], (app: GardenerJazzAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'gardener-jazz works!\'',
      inject([GardenerJazzAppComponent], (app: GardenerJazzAppComponent) => {
    expect(app.title).toEqual('gardener-jazz works!');
  }));
});
