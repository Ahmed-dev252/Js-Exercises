

async function fetchData() {

    try {
        console.log("starting fetch date");

        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!response.ok) {
            throw new Error(`http error! status:${response.status}`);
        }
        console.log(response);
        
        const data = await response.json();
        console.log("Response data:", data);

    } catch (error) {
        console.error("Error fetching data:", error);
    }

}

fetchData();