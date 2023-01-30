type TGetter = (a: string) => void;

function getter(fn: TGetter) {
  fn('hello world');
}

function print(s: string) {
  console.log(s);
}

getter(print);

type TDescribeFunction = {
  description: string,
  (someAtr: string): boolean,
}

function describeFunction(fn: TDescribeFunction) {
  console.log(fn.description, fn('d'));
}