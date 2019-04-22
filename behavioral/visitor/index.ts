import Dog from './Dog';
import DogOutputVisitor from './DogOutputVisitor';

const dog: Dog = new Dog;

dog.accept(new DogOutputVisitor);

