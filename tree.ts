


export function makeTree(chars: string, size: number): string {
    return '';

}

export function calcTrunkLength(size:number):number {
    const division = Math.floor(size / 3);
    const resultAlwaysGreaterThanOne = division < 1 ? 1 : division;

    return resultAlwaysGreaterThanOne;
}

export function calcSpaces(line:number, size:number):number {
    return 0;
}