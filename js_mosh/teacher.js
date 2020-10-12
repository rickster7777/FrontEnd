import { Person } from './person.js';

//export function promote() {}

export default class Teacher extends Person {
    //whenver constructor is added in the child class parent class costructor need to be called
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log("teaching");
    }
}
