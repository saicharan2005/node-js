// const person1='charan'
// const person2='rahul'



// const sayHi=(name)=>{
//   console.log( `hello there ${name}`);


// }


// sayHi('hello world')
// sayHi(person1)
// sayHi(person2)

const name =require('./4-names');

const sayHi =require('./5-utils');


console.log(name);


sayHi('hello world')
sayHi(name.person1)
sayHi(name.person2)