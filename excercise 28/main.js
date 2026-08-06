


function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const success = false;

            if (success) {

                resolve({ id: 234, name: "mahamed", city: "wajaale" })

            } else {

                reject("Failed to fetch user data");

            }

        }, 2000);
    })
}


async function displayUserData() {
    try {
        const user = await fetchUserData();
        console.log("User data:", user);
    } catch (error) {
        console.error("Error: Qaladka dhacay waa", error);
    }
}

displayUserData();

