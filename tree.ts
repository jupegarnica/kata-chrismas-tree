


export function makeTree(chars: string, size: number): string {
    let result = `\n`;
    for (let row = 1; row <= size; row++) {

        let rowSpaces = ' '.repeat(calcSpacesLength(row, size));
        let rowChars = createChars(chars, calcCharsLength(row))

        result += rowSpaces;
        result += rowChars;
        result += '\n';


    }
    const trunkLength = calcTrunkLength(size);
    for (let trunkRow = 1; trunkRow <= trunkLength; trunkRow++) {

        let trunkSpaces = ' '.repeat(size -1 );
        result += trunkSpaces + '|\n';

    }
    return result;

}

export function calcTrunkLength(size:number):number {
    const division = Math.floor(size / 3);
    const resultAlwaysGreaterThanOne = division < 1 ? 1 : division;

    return resultAlwaysGreaterThanOne;
}

export function calcSpacesLength(row:number, size:number):number {
    return size - row;
}
export function calcCharsLength(row:number):number {
    return ( row  * 2 ) - 1;
}

export function createChars(chars:string,length:number): string {
    let result = '';
    for (let index = 0; index < length; index++) {
        result += chars[index % chars.length]
    }
    return result;
}