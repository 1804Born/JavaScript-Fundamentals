function Player (name) {
  this.name = name;

  this.level = 1;
  this.points = 0; 
};

Player.prototype.gainXp = function (xp) {
  this.points += xp;

  if (this.points >= 10) {
    this.level++;
    this.points -= 10;
  }

  console.log(this.describe());
}

Player.prototype.describe = function () {
  return `${this.name} is level ${this.level} with 
  ${this.points} experience points`;
}

const player1 = new Player('Bob');
const player2 = new Player('Alice');
 
player1.gainXp(7);
player2.gainXp(3);

// console.log(player1.describe());
// console.log(player2.describe());


