import { makeTree } from './tree';

describe('Kata christmas tree', () => {
  test('should work', () => {
    // arrange
    const expectedResult = 'tree';
    // action
    const realResult = makeTree();

    // assert
    expect(realResult).toBe(expectedResult);
  });
});
