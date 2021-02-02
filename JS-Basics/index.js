let person = {
    name: "Matheus",
    age: 21.0,
    isLegal: true,
    colour: 'white'
}

person['name'] = 'Matias';

console.log(person);
console.log(person.name);

function Bolinha(tempX, tempY, tempC) {
    this.x = tempX;
    this.y = tempY;
    this.c = tempC;
}