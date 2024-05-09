// Task 1
// compare two JSON have the same properties without order... 
/*
let obj1 = {name:"person 1",age:5};
let obj2 = {age:5,name:"person 1"};


let  srt1 =JSON.stringify(obj1);
let  srt2 =JSON.stringify(obj2);

if(_isEqual(srt1,srt2))
{
  console.log("json both are equal")
}
else{
  console.log("json both are not equal")
}*/

// Task 2
// The rest countries API URL->https://restcountries.com/v3.1/all and display all the country flags in the console...

/*
var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload = function() {

  var data = request1.response;
  // console.log(data);
  var result =JSON.parse(data);
  // console.log(result);
for(var i=0;i<result.length;i++){
  console.log(result[i].flags.png);
}
}*/



// Task 3
// The same rest countries and print all countries names,regions,sub-region and populations...
/*
var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload = function() {

  var data = request1.response;
  // console.log(data);
  var result =JSON.parse(data);
  // console.log(result);
for(var i=0;i<result.length;i++){
  console.log("countryname "+result[i].name.common,"region "+result[i].region,"population"+result[i].poplution,result[i].subregion);

}
}*/


