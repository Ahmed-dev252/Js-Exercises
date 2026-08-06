
// blocking
function getUserDate(){
    
    const startTime = Date.now();
    while (Date.now ()- startTime < 2000 ){}
    return { id: 236, name: "joon", city:"afgooye"};
   
}
console.log("start Fetch User Date");


const user= getUserDate();

console.log(user);

console.log("This message is blocked until the delay is complete.");






// non-blocking
function userDate(Callback){

     setTimeout(()=> {
        let user = { id:242, name: "mohamed", city: "marko" }

        Callback ( user);
    }, 2000);
}

console.log("This message shows up immediately.");

userDate (function(user){
    console.log("waa kanaa xogta", user)
})

console.log("This message is not blocked and runs immediately.");



//  setTimeout(()=> {
//         let user = { id:242, name: "mohamed", city: "marko" }

//         console.log("afer 3second", usr);
//     }, 3000)