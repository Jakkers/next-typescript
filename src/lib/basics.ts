// declaring a variable
// we add the type next to the variable name using : and the data type
//similar format to key and value in an object --> Key: value
let myName: string = "Manny";
let myAge: number = 98;
let isBritish: boolean = false;
//the any type is used so the value can have any data type
let favThingy: any = "sun";

//declaring array types
let myNumberArray: number[] = [1, 2, 3];
let myLongerNumberArray: Array<number> = [1, 2, 3];

let myStringArray: string[] = ["one", "two", "three"];
let myLongerStringArray: Array<string> = ["one", "two", "three"];

//declaring object types
// let myIdentity: {
//   name: string;
//   age: number;
//   isBritish: boolean;
//   favBiscuits: string[];
// } = {
//   name: "Manny",
//   age: 98,
//   isBritish: false,
//   favBiscuits: ["custard cream", "bourbon", "hobnob"],
// };

//we are going to have a type annotation object

type IdentityTypes = {
  name: string;
  age: number;
  isBritish: boolean;
  favBiscuits: string[]; //Array<string>
  //we use the pipe symbol | to add multiple types
  favThings: (string | number)[];
  //Optional chaining --> in case the workplace property is missing in the object
  workPlace?: {
    name: string;
    location: string;
  };
};

let myIdentity: IdentityTypes = {
  name: "Manny",
  age: 98,
  isBritish: false,
  favBiscuits: ["custard cream", "bourbon", "hobnob"],
  favThings: ["sun", 87, "eggs-cream"],
  //   workPlace: {
  //     name: "Tech Ed",
  //     location: "Norwich",
  //   },
};

// array of objects
let myArrayOfObjects: ArrayObjectsType = [
  {
    name: "Joe",
    location: "Norwich",
  },
  {
    name: "Cordelia",
    location: "Liverpool",
  },
];

type ArrayObjectsType = [
  {
    name: string;
    location: string;
  },
  {
    name: string;
    location: string;
  }
];

//function with parameters
function add(a: number, b: number) {
  return a + b;
}

add(2, 5);

//! typescript will inder the data type, if you have not specified the type with an annotaion
let number = 5;
let string = "string";

//TS assumes the data type is number, and errors when we change it
let variable = 6;
// @ts-ignore
variable = "something";

//TS assumes type any because we didn't add a value initially
let emptyVariable;
emptyVariable = 8;
emptyVariable = "string";
