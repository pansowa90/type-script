type TFish = { swim: () => void };
type TBird = { fly: () => void };

function move(animal: TBird | TFish) {
  if ('swim' in animal) {
    return animal.swim();
  }

  return animal.fly();
}