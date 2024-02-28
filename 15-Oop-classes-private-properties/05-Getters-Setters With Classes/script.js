class Person {
  constructor(firstName, lastName) {
    this._firstname = firstName;
    this._lastname = lastName;
  }

  get firstName() {
    return this.capitalizeFirst(this._firstname);
  }
  set firstName(value) {
    this._firstname = this.capitalizeFirst(value);
  }

  get lastName() {
    return this.capitalizeFirst(this._lastname);
  }

  set lastName(value) {
    this._lastname = this.capitalizeFirst(value);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  capitalizeFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

const person1 = new Person('john', 'doe');
console.log(person1.firstName);
console.log(person1.lastName);

person1.firstName = 'joe';
person1.lastName = 'smith';
console.log(person1.fullName);
console.log(person1);
