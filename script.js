const URL = "https://dogapi.dog/api/v2/breeds";

const btn = document.querySelector("#btn");
const name = document.querySelector("#name");
const description = document.querySelector("#description");

const getDog = async () => {

    let response = await fetch(URL);

    let result = await response.json();

    let breeds = result.data;
    name.innerText = breeds[17].attributes.name;

    description.innerText =
        breeds[10].attributes.description;
};

btn.addEventListener("click", getDog);