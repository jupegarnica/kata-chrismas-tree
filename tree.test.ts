import {
  makeTree,
  calcTrunkLength,
  calcCharsLength,
  createChars
} from './tree';

describe('Kata christmas tree', () => {
  test('should work for size 2 and 1 char', () => {
    // arrange
    const expectedResult = `
 *
***
 |
`;

    // action
    const realResult = makeTree('*', 2);

    // assert
    expect(realResult).toBe(expectedResult);
  });
  test('should work for size 6 and 1 char', () => {
    // arrange
    const expectedResult = `
     *
    ***
   *****
  *******
 *********
***********
     |
     |
`;

    // action
    const realResult = makeTree('*', 6);

    // assert
    expect(realResult).toBe(expectedResult);
  });

  test('should calc trunk length correctly', () => {
    expect(calcTrunkLength(2)).toBe(1);
    expect(calcTrunkLength(3)).toBe(1);
    expect(calcTrunkLength(5)).toBe(1);
    expect(calcTrunkLength(6)).toBe(2);
    expect(calcTrunkLength(8)).toBe(2);
    expect(calcTrunkLength(9)).toBe(3);
  });
  test('calcCharsLength should work', () => {
    expect(calcCharsLength(1)).toBe(1);
    expect(calcCharsLength(2)).toBe(3);
    expect(calcCharsLength(3)).toBe(5);
  });
  test('createChars should work', () => {

    expect(createChars('*', 3)).toBe('***');
    expect(createChars('12', 5)).toBe('12121');
    expect(createChars('123', 7)).toBe('1231231');
  });
  test('should work for size 2 and 2 char', () => {
    // arrange
    const expectedResult = `
 #
#$#
 |
`;


    // action
    const realResult = makeTree('#$', 2);

    // assert
    expect(realResult).toBe(expectedResult);
  });
  test('should work for size 6 and 3 char', () => {
    // arrange
    const expectedResult = `
     1
    123
   12312
  1231231
 123123123
12312312312
     |
     |
`;

    // action
    const realResult = makeTree('123', 6);

    // assert
    expect(realResult).toBe(expectedResult);
  });

});
