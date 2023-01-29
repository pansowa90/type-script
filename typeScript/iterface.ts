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


