function uppercase(target: any, propertyName : string){
    let value : string = target[propertyName];
    Object.defineProperty(target, propertyName, {
        get(){
            return value;
        },
        set(newValue){
            value = newValue.toUpperCase();
        },
        enumerable: true,
        configurable: true,
    })
}

class Person {
    @uppercase
    firstName: string;

    constructor(firstName: string) {
        this.firstName = firstName;
    }
}

const person = new Person('john');
console.log(person.firstName); // Output: JOHN
person.firstName = 'jane';
console.log(person.firstName); // Output: JANE