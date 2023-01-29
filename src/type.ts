// type example

type TAnimal = {
  name: string,
}

type TBear = TAnimal & {
  honey: boolean,
}

const typeBear: TBear = {
  name: 'Bob',
  honey: false,
}


