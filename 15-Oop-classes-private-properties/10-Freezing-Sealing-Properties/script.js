// Sealing - Prevents properties from being added or removed. Can still be changed.

// Freezing - Prevents properties from being added, removed or changed

const rectObj = {
  name: 'Rectangle 1',
  width: 5,
  height: 10
}

Object.seal(rectObj)
// Object.freeze(rectObj)

let descriptors = Object.getOwnPropertyDescriptors(rectObj)
console.log(descriptors);

// Can not add and remove properties
rectObj.color = 'red';
delete rectObj.name;

// Can change value
rectObj.width = 20;

console.log(rectObj);

const circleObj = {
  name: 'circle 1',
  radius: 39
}

Object.freeze(circleObj);

descriptors = Object.getOwnPropertyDescriptors(circleObj)
console.log(descriptors);

// Can not add, remove or modify
circleObj.color = 'blue';
delete circleObj.name;
circleObj.name = 'New Name';

console.log(descriptors);

// if an object is frozen, it is also sealed
console.log('rectObj is sealed?', Object.isSealed(rectObj));
console.log('rectObj is frozen?', Object.isFrozen(rectObj));
console.log('circleObj is sealed?', Object.isSealed(circleObj));
console.log('circleObj is frozen?', Object.isFrozen(circleObj));
