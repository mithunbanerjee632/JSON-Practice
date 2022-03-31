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
const data = require("./students_data.js");

for(x in data){
  console.log(x);
  console.log(data[x]);
}
