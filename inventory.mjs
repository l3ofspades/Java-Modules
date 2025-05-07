let inventory = [];
export function addItem(item) {
  inventory.push(item);
  console.log(`${item} added to inventory.`);
}

export function removeItem(item) {
    inventory = inventory.filter(i => i !== item);
    console.log(`${item} removed from inventory.`);
}
export function listItems() {
  console.log("Current inventory:", inventory);
}

