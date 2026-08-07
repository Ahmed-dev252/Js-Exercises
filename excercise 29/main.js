

async function fetchData(){
    console.log("fetch user Data");

    const responce = await fetch ("data.json");

    const data = await responce.json ();

    console.log ("Fetched Data:", data);

    console.log("Data fetching complete. This message runs after data is fetched.");

}

fetchData();
console.log("This message runs immediately and is not blocked.");