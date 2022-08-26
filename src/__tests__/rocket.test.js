import '@testing-library/jest-dom';
import reducer from '../Redux/Rocket/rocketSlice';

describe('test reducer', () => {
  test('reducer has default state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      rockets: [],
      missions: [],
      status: 'idle',
      error: null,
    });
  });
});
