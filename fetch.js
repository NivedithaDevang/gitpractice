const URL = "https://dogapi.dog/api/v2/breeds";
const facts = document.querySelector("#fact");

const getData = async () => {
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    console.log(data.data[100].attributes.description);
    console.log(data.data[101].type);
    let breeds = data.data;
    facts.innerText = breeds[19].attributes.description;
};
