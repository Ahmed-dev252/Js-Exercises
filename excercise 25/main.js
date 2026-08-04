


// spread
const number= [5,6,7,8,];

const totall=[...number,12, 15, 18, 20];

console.log(totall);

// Rest

function multiply(...mult){
    return mult.reduce((result,num ) => result * num, 1);

}

console.log(multiply(2,5,6,8,12,22));