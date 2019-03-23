import FlyweightKey from './FlyweightKey';
import FlyweightType from './FlyweightType';
import FlyweightFactory from './FlyweightFactory';

const factory: FlyweightFactory = new FlyweightFactory();

const numberKey: FlyweightKey = {type: FlyweightType.Number};
const oneKey: FlyweightKey = {type: FlyweightType.Digit, value: 1};
const twoKey: FlyweightKey = {type: FlyweightType.Digit, value: 2};
const threeKey: FlyweightKey = {type: FlyweightType.Digit, value: 3};

const thirteen = factory.getFlyweight(numberKey);
const firstDigit = factory.getFlyweight(oneKey);
const secondDigit = factory.getFlyweight(threeKey);
thirteen.add(firstDigit);
thirteen.add(secondDigit);

const thirtyTwo = factory.getFlyweight(numberKey);
const thirdDigit = factory.getFlyweight(threeKey);
const fourthDigit = factory.getFlyweight(twoKey);
thirtyTwo.add(thirdDigit);
thirtyTwo.add(fourthDigit);

thirteen.draw({x: 0, y: 0});
thirtyTwo.draw({x:0, y: 1});

console.log('first number === second number?', thirteen === thirtyTwo);
console.log('second digit === third digit?', secondDigit === thirdDigit);