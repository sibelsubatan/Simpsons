import { simpsonsReducer } from '@redux/reqres/reducers';

describe('simpsons redux state test', () => {
  it('initial simpsonsList to an empty array', () => {
    const state = simpsonsReducer.getInitialState();
    expect(state.simpsonsList).toEqual([]);
  });
});
