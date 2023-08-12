let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
    arr.map((val)=>{
        if(val.profession === "developer"){
         console.log(val);
        }
    })

  }
  
  function addData() {
    //Write your code here, just console.log
    let newarr={
        id: 4, name: "Anuj", age: "28", profession: "Intern"
               }
               arr.push(newarr);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.filter((val)=>{
        if(val.profession!="admin")
        {
            console.log(val);
        }
            })
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newEmployee=[
        {id: 10, name: "Sourabh", age: "30", profession: "Tester"},
        {id: 12, name: "Nikhil", age: "25", profession: "Developer"},
        {id: 15, name: "Ram", age: "26", profession: "Software Engineer"}
];

let add= arr.concat(newEmployee);
console.log(add);
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }




