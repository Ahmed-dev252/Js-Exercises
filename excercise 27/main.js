

function  fetchUserData(){
    return new Promise (( resolve, reject) => {
        setTimeout(() => {

            const success = true;

            if (success){
                resolve({id:2345, name: "jaamac", city: "bosaso"});

            }else {
                reject ( "Failed to fetch user data" )
            }
        }, 2000);
    });
}

fetchUserData()
.then((Data)=> console.log(Data))
.catch((err)=>console.log("err:", err));