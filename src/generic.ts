function getFrist<Type>(arr: Array<Type>): Type | undefined {
  return arr[0];
}

const n = getFrist([1, 2, 3]);

function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length && b.length) {
    return { a, b }
  }
}

const arrays = longest([1, 2], [3, 3]);
const strings = longest('mike', 'stefan');
// const numbers = longest(10, 12); error! because number doesnt have length

function combine<Type>(arr1: Array<Type>, arr2: Array<Type>): Array<Type> {
  return arr1.concat(arr2);
}

const numbers = combine([1, 2], [4, 5]);
// const mix = combine([1,2,3], ['q3']); error! Arrays should be described
const mix = combine<number | string>([1, 2, 3], ['q3']);


