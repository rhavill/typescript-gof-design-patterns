import GlobalCounter from './GlobalCounter';

const GlobalCounterInstance1 = GlobalCounter.Instance;
GlobalCounterInstance1.increment();
console.log(GlobalCounterInstance1.getCount());

const GlobalCounterInstance2 = GlobalCounter.Instance;
GlobalCounterInstance1.increment();
console.log(GlobalCounterInstance2.getCount());

