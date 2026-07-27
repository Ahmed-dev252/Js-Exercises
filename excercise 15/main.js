

console.log( "probrties and values of each person:");



    const people = [
    { name: "hamuda", age: 28, city: "mogadishu" },
    { name: "geedi", age: 22, city: "Burco" },
    { name: "joon", age: 30, city: "afgooye" }
     ];

    console.log("________________");

    for (const person of people) 
        
    for (const key in person) {
        
        console.log(key + ": " + person[key] );   }
    
    console.log("________________");
    