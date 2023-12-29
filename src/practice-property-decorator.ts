/* 
Create a property decorator named "logProperty" that logs property access and modification.
The decorator should log a message when the property is accessed and another message when the property is modified.
*/


class ExampleClass {
    /* Implement this */
    @logProperty
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const exampleInstance = new ExampleClass('John');
console.log(exampleInstance.name); // Output: Accessing property 'name'
exampleInstance.name = 'Jane'; // Output: Modifying property 'name'