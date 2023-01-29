// interface example

interface IAnimal {
  name: string;
}

interface IBear extends IAnimal {
  honey: boolean,
}

const interfaceBear: IBear = {
  name: 'Bob',
  honey: true,
}

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


