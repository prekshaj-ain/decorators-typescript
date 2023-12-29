/* 
Create a class decorator named capitalizeProperties that automatically capitalizes the first letter of every string property in a class. 
When an instance of the decorated class is created, it should automatically capitalize the initial values of string properties. 
Additionally, if a string property is modified later, it should automatically capitalize the new value. */

@capitalizeProperties /* write the implementation */
class Employee {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const employee = new Employee('john', 'doe');
console.log(employee.firstName); // Output: John
console.log(employee.lastName); // Output: Doe

employee.firstName = 'jane';
console.log(employee.firstName); // Output: Jane


/* 
Hints:

1. Define a decorator function named capitalizeProperties.
2. Access the class prototype and iterate over its properties.
3. For each string property, redefine its setter to capitalize the value.
4. Apply the capitalizeProperties decorator to the class.


*/
