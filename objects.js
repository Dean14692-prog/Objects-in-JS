 /*
 Objects are collection of related properties or methods
 An object literal is a list of name:value pairs inside curly braces {}.
        name:value pairs are also called key:value pairs.
 Example:---> {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
 */

const person = {
    firstName: "Dennis",
    secondName: "Ngui",
    age : 30
}

/*
To print values of the object we use this syntax
---> console.log("object name"."key");
For my case the object name is person.
*/

console.log(person.age);
Object.getOwnPropertyNames(person);

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


