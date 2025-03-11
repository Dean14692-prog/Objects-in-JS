/*
 Objects are collection of related properties or methods
 An object literal is a list of name:value pairs inside curly braces {}.
        name:value pairs are also called key:value pairs.
 Example:---> {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
 */

const person = {
  firstName: "Dennis",
  secondName: "Ngui",
  age: 30,
};

/*
To print values of the object we use this syntax
---> console.log("object name"."key");
For my case the object name is person.
*/

console.log(person.age);

/*
To list the properties of the object we use
--->Object.keys(Object Name)
To print the properties we use the console.log function
--->Console.log(syntax);
The syntax is --->Object.keys(Object Name)
For my case to print the properties of the object I used
--->console.log(Object.keys(person))
*/
console.log(Object.keys(person));

/**
To list values of the object we use the following syntax
---> Object.values(Object Name)
To print the values we use the following syntax
---> Console.log(Object.values(Object Name))
 */
console.log(Object.values(person));

/*
To make changes on the object or to add new properties on the object we use
---> object.property = value;
Let say i want to include Height property with a Tall value
my command will be
---> "Object Name"."Property/Key to be added on the Object" = " Value of the Key"
*/
person.Height = "Tall"; // Adding Height Key with Tall value
console.log(person); // To print the object values and keys
console.log(Object.values(person)); // To Print Values of the
console.log(Object.keys(person)); // To print Keys of the Object
person.Cars = 3; // Adding Cars in the Object
console.log(person);
