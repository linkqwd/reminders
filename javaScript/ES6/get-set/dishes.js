const menu = {
  _courses: {
  	_appetizers: [],
  	_mains: [],
  	_desserts: [],
    
    set appetizers(item) {this._appetizers.push(item);},
    set mains(item) {this._mains.push(item);},
  	set desserts(item) {this._desserts.push(item);},
    
    get mains() {return this._mains;},
    get appetizers() {return this._appetizers;},
    get desserts() {return this._desserts;}
	},
  
  get courses() {
    return {
     appetizers: this._courses._appetizers,
     mains: this._courses._mains,
     desserts: this._courses._desserts
    }
  },
  
  addDishToCourse(courseName, dishName, dishPrice) {
  	let dish = {name: dishName, price: dishPrice};
    this._courses[courseName] = dish;
	},
  
  getRandomDishFromCourse(name) {
    let dish = this._courses[name];
    return dish[getRnd(dish.length)]
  },
  
  generateRandomMeal() {
  	let appetizer  = this.getRandomDishFromCourse('appetizers');
    let main  = this.getRandomDishFromCourse('mains');
    let dessert  = this.getRandomDishFromCourse('desserts');
    
    let result = `${appetizer.name}, ${main.name} and ${dessert.name}`;
    let price = appetizer.price + main.price + dessert.price;
        
    return `Your today meal is: ${result}, cost is: ${price}$ `;
	}
  
}

function getRnd(int) {
  return Math.floor(Math.random() * int);
}

menu.addDishToCourse('appetizers', 'Chips', 5);
menu.addDishToCourse('appetizers', 'Beer', 7);
menu.addDishToCourse('appetizers', 'Fish', 15);
menu.addDishToCourse('mains', 'Rice', 4);
menu.addDishToCourse('mains', 'Meat', 12);
menu.addDishToCourse('mains', 'Porridge', 3);
menu.addDishToCourse('desserts', 'Cake', 10);
menu.addDishToCourse('desserts', 'Fruits', 8);
menu.addDishToCourse('desserts', 'Chocolate', 7);

console.log(menu.generateRandomMeal());
console.log(menu.courses);
