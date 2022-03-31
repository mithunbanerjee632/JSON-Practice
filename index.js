//const data = require("./friends.js");
//console.log(data);
//console.log(data.friends[0]);
//console.log(data.friends[0].name);

//modify
// data.friends[0].name ="Mithun";

// console.log(data.friends[0].name);

// //delete
// delete data.friends[0].name;
// console.log(data);


//json data access using loop
// const data = require("./students_data.js");

// for(x in data){
//   console.log(x);
//   console.log(data[x]);
// }



//convert js data to json object

const data = {
  name:"mithun",
  age:25
}

console.log(JSON.stringify(data));

//json data convert to js data
const data2 ={
  "friends": [
    {
      "name":"Alamin",
      "age":27
    },
    {
      "name":"Mridul",
      "age":27
    }
]


}
console.log(JSON.parse(data2));