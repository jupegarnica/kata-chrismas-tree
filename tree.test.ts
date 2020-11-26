import { makeTree, calcTrunkLength, calcCharsLength } from './tree';

describe('Kata christmas tree', () => {
  test('should work for size 2 and 1 char', () => {
    // arrange
    const expectedResult =
`
 *
***
 |
`

// " * \n***\n | "

    // action
    const realResult = makeTree('*', 2);

    // assert
    expect(realResult).toBe(expectedResult);
  });
  test('should work for size 6 and 1 char', () => {
    // arrange
    const expectedResult =
`
     *
    ***
   *****
  *******
 *********
***********
     |
     |
`
// 1 3 5 7 9
// " * \n***\n | "

    // action
    const realResult = makeTree('*', 6);

    // assert
    expect(realResult).toBe(expectedResult);
  });


  test('should calc trunk length correctly', ()=> {

        expect(calcTrunkLength(2)).toBe(1);
        expect(calcTrunkLength(3)).toBe(1);
        expect(calcTrunkLength(5)).toBe(1);
        expect(calcTrunkLength(6)).toBe(2);
        expect(calcTrunkLength(8)).toBe(2);
        expect(calcTrunkLength(9)).toBe(3);


  })
  test('calcCharsLength should work', () => {
    expect(calcCharsLength(1)).toBe(1);
    expect(calcCharsLength(2)).toBe(3);
    expect(calcCharsLength(3)).toBe(5);

  })

});
