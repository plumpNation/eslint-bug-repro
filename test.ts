const numbers: number[] = [];

const selectedNumber = numbers[100000];

// No error
console.log(selectedNumber || null);

export interface Item {}

// /////////////////////////////////////////////////////////

const items: Item[] = [];
const selectedItem = items[100000];

// Error: Unnecessary conditional, value is always truthy
console.log(selectedItem || null);