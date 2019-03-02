import Box from './Box';
import Item from './Item';

const page = new Box();
const header = new Item();
page.add(header);
const menu = new Box();
page.add(menu);
const content = new Box();
page.add(content);

const menuItem = new Item();
menu.add(menuItem);

const text = new Item();
content.add(text);

content.doSomething();
menuItem.doSomething();

content.remove(0);

console.log(menu.getChild(0));

