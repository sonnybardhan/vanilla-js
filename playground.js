// const wizard = {
//   name: 'merlin',
//   health: 50,
//   compliments: ['funny', 'glorious', 'tremendous', 'lefty'],
//   heal() {
//     this.health += 100;
//     console.log(this.health);
//   },
// };

// const archer = {
//   name: 'robin hood',
//   health: 30,
//   compliments: ['capricious', 'seredipitous', 'hazardous'],
//   showCompliment() {
//     console.log(
//       `${this.name} is ${
//         this.compliments[Math.floor(this.compliments.length * Math.random())]
//       }`
//     );
//   },
//   addCompliment(adjectives) {
//     this.compliments = [...this.compliments, ...adjectives];
//     return this.compliments;
//   },
// };

// // wizard.heal();
// // wizard.heal.call(archer);
// // wizard.heal.call(archer);
// // archer.addCompliment.call(wizard, ['handsome']);
// archer.addCompliment.call(wizard, ['handsome', 'jacked', 'ripped']);
// archer.showCompliment.call(wizard);
// archer.showCompliment.call(wizard);
// archer.showCompliment.call(wizard);
// archer.showCompliment.call(wizard);
// archer.showCompliment.call(wizard);
// archer.showCompliment.call(wizard);
// archer.showCompliment.call(wizard);
// archer.showCompliment.call(wizard);

// const array = [1, 2, 3];

// function getMaxNumber(arr) {
//   return Math.max.apply(this, arr);
// }

// console.log(getMaxNumber(array));

const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  },
};
// const giveMeTheCharacterNOW = character.getCharacter();
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

//How Would you fix this?
console.log('?', giveMeTheCharacterNOW());
