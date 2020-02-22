import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollections';
import { LinkedList } from './LinkedList';

const nums = new NumbersCollection([10, 3, -5, 0]);
nums.sort();
console.log(nums.data);

const char = new CharactersCollection('aXoP');
char.sort();
console.log(char.data);

const list = new LinkedList();
list.add(500);
list.add(-10);
list.add(-3);
list.add(4);
list.sort();

list.print();
