const URL = "https://official-joke-api.appspot.com/random_joke";

const btn = document.querySelector("#btn");
const joke = document.querySelector("#joke");

const getJoke = async () => {

    let response = await fetch(URL);

    let data = await response.json();

    joke.innerText = data.setup + "\n" + data.punchline;
    console.log(data);
};

btn.addEventListener("click", getJoke);