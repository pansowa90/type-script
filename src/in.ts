type TFish = { name: string, swim: () => void };
type TBird = { name: string, fly: () => void };

function move(animal: TBird | TFish) {
  if ('swim' in animal) {
    return animal.swim();
  }

  return animal.fly();
}

declare function getPet(): TBird | TFish;

function isFish(pet: TBird | TFish): pet is TFish {
  return (pet as TFish).swim !== undefined;
}

const pet = getPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

const zoo: Array<TBird | TFish> = [getPet(), getPet(), getPet()];

const underWaterPets: Array<TFish> = zoo.filter(isFish);
// or
const underWaterPetsTwo: TFish[] = zoo.filter(isFish) as TFish[];

const underWaterThree: TFish[] = zoo.filter((pet): pet is TFish => {
  if (pet.name === 'bob') return false;
  return isFish(pet);
});